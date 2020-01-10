import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import Select from 'react-select';
import NumberFormat from 'react-number-format';
import { APP_URL } from '../../helper/config';

const ItemCreate = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [isFetched, setFetched] = useState(false)

    const [optCategory, setCatOption] = useState()
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
            optCategory.map((v, key) => {
                option.push({ value: v.id, label: v.name })
                return true
            })
        }
        return option
    }

    const handleCategoryChange = (e) => {
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
        const data = new FormData()
        data.append('name', name)
        data.append('price', price)
        data.append('description', description)
        data.append('image', selectedFile)
        data.append('category', category)
        await axios.post(APP_URL.concat('/item'), data).then((result) => {
            if (result.data.success === true) {
                setStatus(true)
                setVisible(true)
                setName('')
                setPrice('')
                setDescription('')
                setOptValue(null)
                document.getElementById('image').value = null
            } else {
                setStatus(false)
                setVisible(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setFetched(false)
            try {
                const category = await axios.get(APP_URL.concat('/category'))

                setCatOption(category.data.data.requests)
            } catch (error) {
                console.log(error)
            }
            setFetched(true)
        }
        fetchData()
    }, [])

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            <Alert color={status === true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                {status === true ? "Item Created Successfuly." : "Data is invalid. Try Again"}
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
                        <NumberFormat placeholder={"Price"} prefix={'Rp.'} thousandSeparator={'.'} decimalSeparator={','} className="form-control" value={price} onValueChange={e => setPrice(e.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Describe the Menu" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input type="file" name="image" id="image" accept="jpg,png,svg,bmp" onChange={e => handleFileInputChange(e.target.files)} />
                        <FormText color="muted">
                            Maximum Image size 1 Mb
                        </FormText>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="category">Categories</Label>
                        <Select
                            isMulti
                            name="category"
                            value={optValue}
                            options={categoryOption()}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={e => handleCategoryChange(e)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

export default ItemCreate