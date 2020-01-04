import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CategoryUpdate = () => {

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <Form className="mt-3">
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Category Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Category Name" />
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleFormSubmit} color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default CategoryUpdate