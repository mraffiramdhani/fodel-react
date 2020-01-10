import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { postUser } from '../../redux/action/user';
const UserCreate = (props) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role_id, setRoleId] = useState(2)

    const [isLoading, setLoading] = useState(true)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name, username, password, role_id
        }
        await props.dispatch(postUser(data))
        setLoading(props.user.isLoading)
    }

    return (
        <Form className="mt-3" onSubmit={handleFormSubmit}>
            {
                !isLoading && props.user.isSuccess &&
                <Alert color="success">
                    User Created Successfully.
                </Alert>
            }
            {
                !isLoading && !props.user.isSuccess &&
                <Alert color="danger">
                    Error. Try Again.
                </Alert>
            }
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input type="select" name="role_id" id="role" value={role_id} onChange={e => setRoleId(e.target.value)}>
                            <option value="2">Restaurant</option>
                            <option value="3">Customer</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserCreate)