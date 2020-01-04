import React from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import Select from 'react-select';
import NumberFormat from 'react-number-format';

import DummyCategory from '../../data/category';

const ItemCreate = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    const categoryOption = () => {
        var option = []
        DummyCategory.requests.map((value, key) => {
            option.push({ value: value.id, label: value.name })
            return true
        })

        return option
    }

    return (
        <Form className="mt-3">
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <NumberFormat placeholder={"Price"} prefix={'Rp.'} thousandSeparator={'.'} decimalSeparator={','} className="form-control" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Describe the Menu" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="image">Image(s)</Label>
                        <Input type="file" name="image" id="image" multiple accept="jpg,png,svg,bmp" />
                        <FormText color="muted">
                            Maximum Image size 1 Mb per file.<br />
                            Maximum 10 image files.
                        </FormText>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="category">Categories</Label>
                        <Select
                            isMulti
                            name="category"
                            options={categoryOption()}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="restaurant_id">Restaurant</Label>
                        <Input type="select" name="role_id" id="role">
                            <option value="2">Restaurant</option>
                            <option value="3">Customer</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleFormSubmit} color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

export default ItemCreate