import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserUpdate = () => {
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
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input type="select" name="role_id" id="role">
                            <option value="2">Restaurant</option>
                            <option value="3">Customer</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default UserUpdate