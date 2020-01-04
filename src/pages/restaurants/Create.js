import React from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

const RestaurantCreate = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Form className="mt-3">
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Restaurant Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Restaurant Name" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="logo">Logo</Label>
                        <Input type="file" name="logo" id="logo" />
                        <FormText color="muted">
                            Maximum Image Size is 1 Mb
                        </FormText>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="longitude">Longitude</Label>
                        <Input type="text" name="longitude" id="longitude" placeholder="Longitude" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="latitude">Latitude</Label>
                        <Input type="text" name="latitude" id="latitude" placeholder="Latitude" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="user">Owner</Label>
                        <Input type="select" name="user_id" id="user">
                            <option value="2">Ahmad</option>
                            <option value="3">Beni</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleFormSubmit} color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

export default RestaurantCreate