import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const UserUpdate = (props) => {

    const [isFetched, setFetched] = useState(false)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [role_id, setRoleId] = useState(2)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState()
    const [message, setMessage] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const result = await axios.get(
                APP_URL.concat('/user/' + props.match.params.id),
                USER_TOKEN)

            const data = result.data.data[0]
            setName(data.name)
            setUsername(data.username)
            setRoleId(data.role_id)
        }
        fetchData()
    }, [])

    const onDismiss = () => setVisible(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name, username, role_id
        }
        await axios.patch(APP_URL.concat('/user/' + props.match.params.id), data, USER_TOKEN).then((result) => {
            if (result.data.success === true) {
                setStatus(true)
                setVisible(true)
                setName(result.data.data.requests[0].name)
                setUsername(result.data.data.requests[0].username)
                setRoleId(result.data.data.requests[0].role_id)
                setMessage(result.data.message)
            } else if (result.data.success === false) {
                setStatus(false)
                setVisible(true)
                setMessage(result.data.message)
            }
        })
    }

    return (
        <Form className="mt-3" onSubmit={handleFormSubmit}>
            <Alert color={status == true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                {message}
            </Alert>
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
                <Col md={12}>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input type="select" name="role_id" id="role" value={role_id} onChange={e => setRoleId(e.target.value)}>
                            <option value="2">Restaurant</option>
                            <option value="3">Customer</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default UserUpdate