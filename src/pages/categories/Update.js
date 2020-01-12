import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { getCategory, patchCategory } from '../../redux/action/category';

const CategoryUpdate = (props) => {

    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await props.dispatch(patchCategory(props.match.params.id, { name })).then((data) => {
            setStatus(true)
            setVisible(true)
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getCategory(props.match.params.id)).then((data) => {
                setName(data.value.data.data.name)
            })
        }
        fetchData()
    },[])

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

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(CategoryUpdate)