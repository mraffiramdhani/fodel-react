import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import Select from 'react-select';
import NumberFormat from 'react-number-format';
import { APP_URL } from '../../helper/config';

const ItemUpdate = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [isFetched, setFetched] = useState(false)

    const [optCategory, setCatOption] = useState()
    const [optValue, setOptValue] = useState()
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState()

    const onDismiss = () => setVisible(false)

    const handleFileInputChange = (files) => {
        setFile(files[0])
    }

    const handleCategoryChange = (e) => {
        console.table(e)
        var arr_cat = []
        if (e.length !== 0) {
            e.map((v, key) => {
                arr_cat.push(v.value)
                return true
            })
        }
        setCategory(arr_cat.join(','))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name, price, description, category
        }

        const image = new FormData()

        await axios.patch(APP_URL.concat('/item/' + props.match.params.id), data).then(async (result) => {
            if (selectedFile !== '') {
                image.append('image', selectedFile)
                await axios.patch(APP_URL.concat('/item/' + props.match.params.id + '/images'), image).then((result) => {
                    setStatus(true)
                    setVisible(true)
                    setName('')
                    setPrice('')
                    setDescription('')
                    setOptValue(null)
                    document.getElementById('image').value = null
                }).catch((error) => {
                    setStatus(false)
                    setVisible(true)
                })
            } else {
                setStatus(true)
                setVisible(true)
                setName('')
                setPrice('')
                setDescription('')
                setOptValue(null)
                document.getElementById('image').value = null
            }
        }).catch((error) => {
            console.log(error)
            setStatus(false)
            setVisible(true)
        })
    }

    const categoryOption = () => {
        var option = []
        if (isFetched) {
            optCategory.map((v, key) => {
                option.push({ value: v.id, label: v.name })
                return true
            })
        }

        return option
    }

    useEffect(() => {
        const fetchData = async () => {
            setFetched(false)
            try {
                const item = await axios.get(APP_URL.concat('/item/' + props.match.params.id))
                const category = await axios.get(APP_URL.concat('/category'))

                const data = item.data.data.requests[0].item[0]
                setName(data.name)
                setPrice(data.price)
                setDescription(data.description)
                var arr = []
                data.categories.map((v, key) => {
                    return arr.push({ value: v.id, label: v.name })
                })
                setCatOption(category.data.data.requests)

                if (data.images.length !== 0) {
                    setImage(data.images[0].filename)
                }
            } catch (error) {
                console.log(error)
            }
            setFetched(true)
        }
        fetchData()
    }, [])

    return (
        <Form className="mt-3" onSubmit={e => handleFormSubmit(e)}>
            <Alert color={status === true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                {status === true ? "Item Updated Successfuly." : "Data is invalid. Try Again"}
            </Alert>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <NumberFormat
                            prefix={"Rp."}
                            thousandSeparator={'.'} decimalSeparator={','} className="form-control"
                            placeholder="Price" value={price} onValueChange={e => setPrice(e.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Describe the Menu" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input type="file" name="image" id="image" accept="jpg,png,svg,bmp" onChange={e => handleFileInputChange(e.target.files)} />
                        <FormText color="muted">
                            Maximum Image size 1 Mb.
                        </FormText>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <Label>Current Image : </Label>
                    {image !== ''
                        ? <img alt={name} src={image.substr(0, 4) === 'http' ? image : APP_URL.concat('/images/' + image)} width="85px" height="85px" />
                        : ''}
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="category">Categories</Label>
                        <Select
                            isMulti
                            name="category"
                            options={categoryOption()}
                            value={optValue}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={e => handleCategoryChange(e)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default ItemUpdate