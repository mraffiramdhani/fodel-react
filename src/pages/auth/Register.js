import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Button, Label, Input, Alert
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/action/auth';

import '../../assets/css/login.css';

class RegisterPage extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        isLoading: false,
        isSuccess: false,
        name: '',
        email: '',
        username: '',
        password: '',
        restaurant_name: '',
        message: ''
      };
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.auth.isLoading !== this.state.isLoading) {
            if (prevProps.auth.isLoading) {
                this.setState({
                    isLoading: true
                })
            }
            else {
                await localStorage.setItem('token', this.props.auth.data.token)
                await localStorage.setItem('name', this.props.auth.data.name)
                await localStorage.setItem('role', this.props.auth.data.role)
                this.setState({
                    isLoading: false,
                    isSuccess: prevProps.auth.isSuccess
                })
                this.handleRedirect()
            }
        }
    }

    handleRedirect() {
        if (this.state.isSuccess) {
            this.setState({
                message:
                    <Alert color="success">
                        Register Success.
                    </Alert>
            })
        } else {
            this.setState({
                message:
                    <Alert color="danger">
                        Register Failed. Please Try Again.
                    </Alert>
            })
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            restaurant_name: this.state.restaurant_name
        }

        await this.props.dispatch(register(data));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={9} md={7} lg={5} className="mx-auto">
                        <Card className="card-signin my-5">
                            <CardBody>
                                <CardTitle className="text-center">Register as a Restaurant</CardTitle>
                                {this.state.message}
                                <Form className="form-signin" onSubmit={e => this.handleSubmit(e)}>
                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="name" className="form-control" placeholder="Full Name" onChange={e => this.setState({name: e.target.value})} required autoFocus />
                                        <Label for="name">Full Name</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="email" id="email" className="form-control" placeholder="Email" onChange={e => this.setState({email: e.target.value})} required />
                                        <Label for="Email">Email</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="username" className="form-control" placeholder="Username" onChange={e => this.setState({username: e.target.value})} required />
                                        <Label for="username">Username</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="password" id="password" className="form-control" placeholder="Password" onChange={e => this.setState({password: e.target.value})} required />
                                        <Label for="password">Password</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="restaurant_name" className="form-control" placeholder="Restaurant Name" onChange={e => this.setState({restaurant_name: e.target.value})} required />
                                        <Label for="restaurant_name">Restaurant Name</Label>
                                    </FormGroup>

                                    <Button type="submit" size="lg" color="primary" block className="text-uppercase">
                                        {this.props.auth.isLoading
                                            ? <i className="fa fa-spinner fa-spin"></i>
                                            : 'Register'}
                                    </Button>
                                    <hr className="my-4" />
                                    <Link to="/auth/login" className="btn btn-lg btn-block btn-secondary text-uppercase">have an account? login</Link>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(RegisterPage)