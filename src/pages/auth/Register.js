import React from 'react';
import {
    Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../assets/css/login.css';

const RegisterPage = () => {
    return (
        <Container>
            <Row>
                <Col sm={9} md={7} lg={5} className="mx-auto">
                    <Card className="card-signin my-5">
                        <CardBody>
                            <CardTitle className="text-center">Register</CardTitle>
                            <Form className="form-signin">
                                <FormGroup className="form-label-group">
                                    <Input type="text" id="name" className="form-control" placeholder="Full Name" required autoFocus />
                                    <Label for="name">Full Name</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="text" id="username" className="form-control" placeholder="Username" required />
                                    <Label for="username">Username</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="password" id="password" className="form-control" placeholder="Password" required />
                                    <Label for="password">Password</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="password" id="confirm_password" className="form-control" placeholder="Re-Type Password" required />
                                    <Label for="confirm_password">Re-Type Password</Label>
                                </FormGroup>

                                <Button size="lg" color="primary" block className="text-uppercase">Register</Button>
                                <hr className="my-4" />
                                <Link to="/auth/login" className="btn btn-lg btn-block btn-secondary text-uppercase">have an account? login</Link>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage