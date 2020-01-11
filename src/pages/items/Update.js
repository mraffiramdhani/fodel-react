import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import Select from 'react-select';
import NumberFormat from 'react-number-format';
import { APP_URL } from '../../helper/config';
import { getCategories } from '../../redux/action/category';
import { getItem, patchItem, patchItemImage } from '../../redux/action/item';

const ItemUpdate = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [isFetched, setFetched] = useState(false)

    const [optValue, setOptValue] = useState()
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState()

    const onDismiss = () => setVisible(false)

    const handleFileInputChange = (files) => {
        setFile(files[0])
    }

    const categoryOption = () => {
        var option = []
        if (isFetched) {
            props.category.data.categories.map((v, key) => {
                option.push({ value: v.id, label: v.name })
                return true
            })
        }

        return option
    }

    const handleCategoryChange = (e) => {
        var arr_cat = []
        if (e === null) {
            arr_cat = []
            setOptValue([])
        } else if (e.length !== 0) {
            e.map((v, key) => {
                arr_cat.push(v.value)
                setOptValue(e)
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

        await props.dispatch(patchItem(props.match.params.id, data)).then(async (data) => {
            if (selectedFile !== '') {
                image.append('image', selectedFile)
                await props.dispatch(patchItemImage(props.match.params.id, image)).then((data) => {
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

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getItem(props.match.params.id)).then((data) => {
                const item = data.value.data.data
                setName(item.name)
                setPrice(item.price)
                setDescription(item.description)
                if (item.images.length !== 0) {
                    setImage(item.images[0].filename)
                }
                var arr_cat = []
                var item_cat = []
                item.categories.map((v, i) => {
                    arr_cat.push({ value: v.id, label: v.name })
                    item_cat.push(v.id)
                    return true
                })
                setOptValue(arr_cat)
                setCategory(item_cat.join(','))
            })
            await props.dispatch(getCategories())
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
                            thousandSeparator={','} decimalSeparator={'.'}
                            className="form-control"
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

const mapStateToProps = state => {
    return {
        category: state.category,
        item: state.item
    }
}

export default connect(mapStateToProps)(ItemUpdate)