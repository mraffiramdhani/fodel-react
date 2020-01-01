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
                    <Card className="bg-white shadow border-0 mt-5">
                        <CardHeader className="bg-transparent">
                            <div className="text-muted text-center mt-2 mb-3">
                                <h2>Sign in</h2>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form">
                                <FormGroup className="mb-1">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-user" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Username" type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-lock" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Password" type="password" />
                                    </InputGroup>
                                </FormGroup>
                                <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        id=" customCheckLogin"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor=" customCheckLogin"
                                    >
                                        <span className="text-muted">Remember me</span>
                                    </label>
                                </div>
                                <div className="text-center">
                                    <Button className="my-2" block color="primary" type="button">
                                        Sign in
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <small>Forgot password?</small>
                            </a>
                        </Col>
                        <Col className="text-right" xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <small>Create new account</small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </>
        )
    }
}

export default Login