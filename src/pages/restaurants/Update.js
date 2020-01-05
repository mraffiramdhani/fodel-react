import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const RestaurantUpdate = (props) => {

    const [name, setName] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitute, setLatitude] = useState(0)
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState('')
    const [logo, setLogo] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                APP_URL.concat('/restaurant/' + props.match.params.id),
                USER_TOKEN
            )

            const data = result.data.data.requests[0].restaurant[0]
            console.log(result.data.data)
            setName(data.name)
            setLongitude(data.longitude)
            setLatitude(data.latitude)
            setDescription(data.description)
            setLogo(data.logo)
            setOwner(result.data.data.owner)
        }
        fetchData()
    }, [props.match.params.id])

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Restaurant Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Restaurant Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="logo">Logo</Label>
                        <Input type="file" name="logo" id="logo" />
                        <FormText color="muted">
                            Maximum Image Size is 1 Mb
                        </FormText>
                    </FormGroup>
                </Col>
                <Col>
                    <Label>Current Logo : </Label>
                    {logo !== ''
                        ? <img alt={name} src={logo.substr(0, 4) === 'http' ? logo : APP_URL.concat('/logos/' + logo)} width="85px" height="85px" />
                        : ''}
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="longitude">Longitude</Label>
                        <Input type="text" name="longitude" id="longitude" placeholder="Longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="latitude">Latitude</Label>
                        <Input type="text" name="latitude" id="latitude" placeholder="Latitude" value={latitute} onChange={e => setLatitude(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="owner">Owner</Label>
                        <Input type="text" name="owner" id="owner" disabled value={owner} />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

export default RestaurantUpdate