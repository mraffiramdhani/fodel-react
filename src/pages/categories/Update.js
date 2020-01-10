import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { APP_URL } from '../../helper/config';

const CategoryUpdate = (props) => {

    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(APP_URL.concat('/category/' + props.match.params.id))

            setName(result.data.data[0].name)
        }
        fetchData()
    }, [props.match.params.id])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await axios.patch(APP_URL.concat('/category/' + props.match.params.id), { name }).then((result) => {
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
                {status === true ? "Category Updated Successfuly." : "Data is invalid. Try Again"}
            </Alert>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Category Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Category Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default CategoryUpdate