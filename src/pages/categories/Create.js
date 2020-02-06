import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { postCategory } from '../../redux/action/category';

const CategoryCreate = (props) => {

    const [name, setName] = useState('')
    const [iconFile, setIconFile] = useState('');
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    const handleInputFile = (files) => {
        setIconFile(files[0]);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('name', name);
        data.append('icon', iconFile);

        console.log(iconFile);

        await props.dispatch(postCategory(data)).then((result) => {
            setStatus(true)
            setVisible(true)
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
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Category Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Category Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="icon">Category Icon</Label>
                        <Input type="file" name="icon" id="icon" placeholder="Category Icon" onChange={e => handleInputFile(e.target.files)} />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="primary" block><i className="fa fa-check"></i> Confirm</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(CategoryCreate)