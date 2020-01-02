import React, { Component } from 'react';
import { Button, Jumbotron, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            result: ""
        }
    }
    handleSubmit = () => {
        this.setState({
            result: <p>Nama: {this.state.name}<br />
                email: {this.state.email}<br />
                message: {this.state.message}
            </p>
        })
    }
    render() {
        const { name, email, message, result } = this.state
        return (
            <Container>
                <Form className="mt-3">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={name} onChange={(event) => this.setState({ name: event.target.value })} placeholder="Type your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email} onChange={(event) => this.setState({ email: event.target.value })} placeholder="Type your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" name="message" id="message" value={message} onChange={(event) => this.setState({ message: event.target.value })} />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
                <Jumbotron>
                    {result}
                </Jumbotron>
            </Container>
        )
    }
}

export default ContactUs