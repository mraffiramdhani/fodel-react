import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { getUser, patchUser } from '../../redux/action/user';

const UserUpdate = (props) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role_id, setRoleId] = useState(2)

    const [isLoading, setLoading] = useState(true)
    const [isVisible, setVisible] = useState(false)

    const onDismiss = () => setVisible(false)

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getUser(props.match.params.id))
                .then((data) => {
                    setName(data.value.data.data.name)
                    setUsername(data.value.data.data.username)
                    setRoleId(data.value.data.data.role_id)
                    setLoading(props.user.isLoading)
                })
        }
        fetchData()
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name, username, role_id
        }
        if (password !== '') {
            data.password = password
        }
        await props.dispatch(patchUser(props.match.params.id, data))
        setLoading(props.user.isLoading)
        setVisible(true)
    }

    return (
        <Form className="mt-3" onSubmit={handleFormSubmit}>
            {
                !isLoading && props.user.isSuccess &&
                <Alert color="success" isOpen={isVisible} toggle={onDismiss}>
                    User Updated Successfully.
                </Alert>
            }
            {
                !isLoading && !props.user.isSuccess &&
                <Alert color="danger" isOpen={isVisible} toggle={onDismiss}>
                    {props.user.data.message}
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
            <Button type="submit" color="success" block>{
                props.user.isLoading
                    ? <i className="fa fa-spinner fa-spin"></i>
                    : <span><i className="fa fa-save"></i> Save Changes</span>
            }</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserUpdate)