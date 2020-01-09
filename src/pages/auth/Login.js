import React, { useState } from 'react';
import {
    Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input, Alert
} from 'reactstrap';
import { connect } from 'react-redux';

import '../../assets/css/login.css';
import { login } from '../../redux/action/auth';

const LoginPage = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isSuccess, setSuccess] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { username, password }
        await props.dispatch(login(data))
        setSuccess(props.auth.isSuccess)
        setLoading(!isLoading)
    }

    const getMessage = () => {
        if (isSuccess) {
            setTimeout(() => {
                if (props.auth.data.role === "administrator") {
                    props.history.push('/admin/index')
                } else if (props.auth.data.role === "restaurant") {
                    props.history.push('/restaurant/admin')
                }
            }, 2000)
            return (
                <Alert color="success">
                    Login Success. Redirecting...
                </Alert>
            )
        } else {
            return (
                <Alert color="danger">
                    Login Failed. Please Try Again.
                </Alert>
            )
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={9} md={7} lg={5} className="mx-auto">
                    <Card className="card-signin my-5">
                        <CardBody>
                            <CardTitle className="text-center">Sign In</CardTitle>
                            {
                                isLoading
                                    ? ''
                                    : getMessage()
                            }
                            <Form className="form-signin" onSubmit={handleSubmit}>
                                <FormGroup className="form-label-group">
                                    <Input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                        autoFocus />
                                    <Label for="username">Username</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required />
                                    <Label for="password">Password</Label>
                                </FormGroup>

                                <Button type="submit" size="lg" color="primary" block className="text-uppercase">
                                    {props.auth.isLoading
                                        ? <i className="fa fa-spinner fa-spin"></i>
                                        : 'Sign in'}
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginPage)