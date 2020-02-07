import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';

import '../../assets/css/login.css';
import { login } from '../../redux/action/auth';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            isSuccess: false,
            username: '',
            password: '',
            message: ''
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e
        })
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.auth.isLoading !== this.state.isLoading) {
            if (prevProps.auth.isLoading === true) {
                this.setState({
                    isLoading: true
                })
                console.log('masih loading')
            } else {
                console.log('sudah fulfill')
                if (this.props.auth.isSuccess) {
                    console.log('berhasil login')
                    await this.setState({
                        isLoading: false
                    })
                    await this.setState({
                        isSuccess: true
                    })
                    await localStorage.setItem('token', this.props.auth.data.token)
                    await localStorage.setItem('name', this.props.auth.data.name)
                    await localStorage.setItem('role', this.props.auth.data.role)
                    this.handleRedirect()
                } else {
                    console.log('gagal login')
                    await this.setState({
                        isLoading: false
                    })
                    this.handleRedirect()
                }
            }
        }
    }

    handleRedirect() {
        if (this.state.isSuccess) {
            this.setState({
                message:
                    <Alert color="success">
                        Login Success. Redirecting...
                </Alert>
            })
            setTimeout(() => {
                if (this.props.auth.data.role === 'administrator') {
                    this.props.history.push('/admin/index')
                } else if (this.props.auth.data.role === 'restaurant') {
                    this.props.history.push('/restaurant/index')
                }
            }, 2000)
        } else {
            this.setState({
                message:
                    <Alert color="danger">
                        Login Failed. Try Again.
                </Alert>
            })
        }
    }

    async handleOnSubmit(e) {
        e.preventDefault()
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        await this.props.dispatch(login(data))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col sm={9} md={7} lg={5} className="mx-auto">
                        <Card className="card-signin my-5">
                            <CardBody>
                                <CardTitle className="text-center">Sign In</CardTitle>
                                {this.state.message}
                                <Form className="form-signin" onSubmit={e => this.handleOnSubmit(e)}>
                                    <FormGroup className="form-label-group">
                                        <Input
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={e => this.handleUsernameChange(e.target.value)}
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
                                            value={this.state.password}
                                            onChange={e => this.handlePasswordChange(e.target.value)}
                                            required />
                                        <Label for="password">Password</Label>
                                    </FormGroup>

                                    <Button type="submit" size="lg" color="primary" block className="text-uppercase">
                                        {this.props.auth.isLoading
                                            ? <i className="fa fa-spinner fa-spin"></i>
                                            : 'Sign in'}
                                    </Button>
                                    <hr className="my-4" />
                                    <Link to="/auth/register" className="btn btn-lg btn-block btn-secondary text-uppercase">Register as a Restaurant</Link>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginPage)