import React from 'react';
import {
    Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../assets/css/login.css';

const LoginPage = () => {
    return (
        <Container>
            <Row>
                <Col sm={9} md={7} lg={5} className="mx-auto">
                    <Card className="card-signin my-5">
                        <CardBody>
                            <CardTitle className="text-center">Sign In</CardTitle>
                            <Form className="form-signin">
                                <FormGroup className="form-label-group">
                                    <Input type="text" id="username" className="form-control" placeholder="Username" required autoFocus />
                                    <Label for="username">Username</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="password" id="password" className="form-control" placeholder="Password" required />
                                    <Label for="password">Password</Label>
                                </FormGroup>

                                <FormGroup className="custom-control custom-checkbox mb-3">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <Label className="custom-control-label" for="customCheck1">Remember me</Label>
                                </FormGroup>
                                <Button size="lg" color="primary" block className="text-uppercase">Sign in</Button>
                                <hr className="my-4" />
                                <Link to="/auth/register" className="btn btn-lg btn-block btn-secondary text-uppercase">Register</Link>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage