import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/action/user';
import { postRestaurant } from '../../redux/action/restaurant';

const RestaurantCreate = (props) => {

    const [name, setName] = useState("")
    const [selectedFile, setFile] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [description, setDescription] = useState("")
    const [user_id, setUserId] = useState()

    const [isLoading, setLoading] = useState(true)
    const [isFetched, setFetched] = useState(false)

    const handleFileInputChange = (files) => {
        setFile(files[0])
    }

    const handleSelectChanged = (e) => {
        e.preventDefault()
        setUserId(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', name)
        data.append('logo', selectedFile)
        data.append('longitude', longitude)
        data.append('latitude', latitude)
        data.append('description', description)
        data.append('user_id', user_id)
        await props.dispatch(postRestaurant(data))
        setLoading(props.restaurant.isLoading)
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getUsers())
            setFetched(!props.user.isLoading)
        }
        fetchData()
    },[])

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            {
                !isLoading && props.restaurant.isSuccess &&
                <Alert color="success">
                    Restaurant Created Successfully.
                </Alert>
            }
            {
                !isLoading && !props.restaurant.isSuccess &&
                <Alert color="danger">
                    Error. Try Again.
                </Alert>
            }
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="name">Restaurant Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Restaurant Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="logo">Logo</Label>
                        <Input type="file" name="logo" id="logo" onChange={e => handleFileInputChange(e.target.files)} />
                        <FormText color="muted">
                            Maximum Image Size is 1 Mb
                        </FormText>
                    </FormGroup>
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
                        <Input type="text" name="latitude" id="latitude" placeholder="Latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Decription" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="user">Owner</Label>
                        <Input type="select" name="user_id" id="user" value={user_id} onChange={e => handleSelectChanged(e)}>
                            <option>--Select User to be the Owner--</option>
                            {isFetched && props.user.data.users.map((v, key) => {
                                if (v.role_id === 3) {
                                    return (
                                        <option value={v.id} key={key}>{v.name}</option>
                                    )
                                }
                                return null
                            })}
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
        user: state.user,
        restaurant: state.restaurant
    }
}

export default connect(mapStateToProps)(RestaurantCreate)