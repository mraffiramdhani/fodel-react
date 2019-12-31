import React, { Component } from 'react';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

class Login extends Component {
    render() {
        return (
            <>
                <Col lg="5" md="7">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-3">
                                <small>Sign in</small>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form">
                                <FormGroup className="mb-3">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-user" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Type a valid Username" type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-key" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Type a valid Password" type="password" />
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                    <Button className="my-4" color="primary" type="button">
                                        Sign in
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <a className="text-light">
                                <small>Forgot Password?</small>
                            </a>
                        </Col>
                        <Col className="text-light" xs="6">
                            <a className="text-light">
                                <small>Create new Account</small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </>
        )
    }
}

export default Login