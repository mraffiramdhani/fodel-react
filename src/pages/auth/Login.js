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
    const [isAuth, setAuth] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username, password
        }
        await axios.post(APP_URL.concat('/login'), data).then(async (res) => {
            const data = JSON.parse(res.request.response)
            if (data.success === true) {
                localStorage.setItem('token', data.token)
                setAuth(true)
                setOpen(true)
                setTimeout(async () => {
                    await axios.post(APP_URL.concat('/check-token'), { token: data.token }).then((result) => {
                        localStorage.setItem('name', result.data.name)
                        if (result.data.role === "administrator") {
                            props.history.push('/admin/index')
                        } else if (result.data.role === "restaurant") {
                            props.history.push('/restaurant/index')
                        }
                    })
                }, 2000)
            } else {
                setAuth(false)
                setOpen(true)
            }
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
                                {isAuth ? "Login Success. Redirecting..." : "Error. Data is Invalid"}
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