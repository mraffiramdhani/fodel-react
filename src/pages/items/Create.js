import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import Select from 'react-select';
import NumberFormat from 'react-number-format';

import { getCategories } from '../../redux/action/category';
import { getRestaurants } from '../../redux/action/restaurant';
import { postItem, postItemByAdmin } from '../../redux/action/item';

const ItemCreate = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [restaurant_id, setRestaurantId] = useState('')

    // const [optCategory, setCatOption] = useState([])
    const [optValue, setOptValue] = useState([])
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)
    const [isFetched, setFetched] = useState(false)

    const onDismiss = () => setVisible(false)

    const handleFileInputChange = (files) => {
        setFile(files)
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
        const data = new FormData()
        data.append('name', name)
        data.append('price', price)
        data.append('description', description)
        data.append('category', category)
        
        Array.from(selectedFile).forEach(file => { data.append('images', file); });

        if (localStorage.getItem('role') === 'administrator') {
            data.append('restaurant_id', restaurant_id)
            await props.dispatch(postItem(data))
            setFetched(true)
            setStatus(true)
            setVisible(true)
            setName('')
            setPrice('')
            setDescription('')
            setOptValue(null)
            document.getElementById('image').value = null
        } else {
            await props.dispatch(postItem(data))
            setFetched(true)
            setStatus(true)
            setVisible(true)
            setName('')
            setPrice('')
            setDescription('')
            setOptValue(null)
            document.getElementById('image').value = null
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getCategories())
            if (localStorage.getItem('role') === 'administrator') {
                await props.dispatch(getRestaurants())
            }
            setFetched(true)
        }
        fetchData()
    },[])

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            {props.restaurant.count > 0 && isFetched
                ? <Alert color={status === true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                    {status === true ? "Item Created Successfuly." : "Data is invalid. Try Again"}
                </Alert>
                : ''
            }
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
                        <Input type="file" name="image" id="image" accept="jpg,png,svg,bmp" onChange={e => handleFileInputChange(e.target.files)} multiple />
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
                <Col md={12}>
                    {
                        localStorage.getItem('role') === 'administrator' && isFetched
                            ? <FormGroup>
                                <Label for="restaurant">Restaurant</Label>
                                <Input type="select" name="restaurant_id" value={restaurant_id} onChange={e => setRestaurantId(e.target.value)}>
                                    <option>-- SELECT RESTAURANT --</option>
                                    {props.restaurant.data.restaurants.map((v, i) => {
                                        return (
                                            <option value={v.id} key={i}>{v.name}</option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                            : ''
                    }
                </Col>
            </Row>
            <Button type="submit" color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        category: state.category,
        restaurant: state.restaurant
    }
}

export default connect(mapStateToProps)(ItemCreate)