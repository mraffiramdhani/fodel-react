import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const CategoryCreate = () => {

    const [name, setName] = useState('')
    const [visible, setVisible] = useState('')
    const [status, setStatus] = useState('')

    const onDismiss = () => setVisible(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await axios.post(APP_URL.concat('/category'), { name }, USER_TOKEN).then((result) => {
            if (result.data.success === true) {
                setStatus(true)
                setVisible(true)
            } else {
                setStatus(false)
                setVisible(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Form className="mt-3" onSubmit={e => handleFormSubmit(e)}>
            <Alert color={status === true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                {status === true ? "Category Created Successfuly." : "Data is invalid. Try Again"}
            </Alert>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Category Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Category Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

export default CategoryCreate