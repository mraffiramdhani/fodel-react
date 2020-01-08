import React, { useState } from 'react';
import {
    Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input, Alert
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { APP_URL } from '../../helper/config';
import '../../assets/css/login.css';

const LoginPage = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isAuth, setAuth] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username, password
        }
        await axios.post(APP_URL.concat('/login'), data).then(async (res) => {
            console.log(res)
            const data = res.data
            if (data.success === true) {
                localStorage.setItem('token', data.data.token)
                axios.post(APP_URL.concat('/check-token'), { token: data.data.token }).then((result) => {
                    if (result.data.success === true) {
                        setAuth(true)
                        setOpen(true)
                        setTimeout(() => {
                            localStorage.setItem('name', result.data.data.name)
                            if (result.data.data.role === "administrator") {
                                props.history.push('/admin/index')
                            } else if (result.data.data.role === "restaurant") {
                                props.history.push('/restaurant/index')
                            }
                        }, 1000)
                    } else {
                        setAuth(false)
                        setMessage(result.data.message)
                        setOpen(true)
                    }
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                setAuth(false)
                setOpen(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Row>
                <Col sm={9} md={7} lg={5} className="mx-auto">
                    <Card className="card-signin my-5">
                        <CardBody>
                            <CardTitle className="text-center">Sign In</CardTitle>
                            <Alert color={isAuth ? "success" : "danger"} isOpen={isOpen}>
                                {isAuth ? "Login Success. Redirecting..." : message}
                            </Alert>
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

                                {/* <FormGroup className="custom-control custom-checkbox mb-3">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <Label className="custom-control-label" for="customCheck1">Remember me</Label>
                                </FormGroup> */}
                                <Button type="submit" size="lg" color="primary" block className="text-uppercase">Sign in</Button>
                                {/* <hr className="my-4" />
                                <Link to="/auth/register" className="btn btn-lg btn-block btn-secondary text-uppercase">Register</Link> */}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage