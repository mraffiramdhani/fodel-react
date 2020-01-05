import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const RestaurantCreate = () => {

    const [name, setName] = useState("")
    const [selectedFile, setFile] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [description, setDescription] = useState("")
    const [user_id, setUserId] = useState()

    const [isFetched, setFetched] = useState(false)
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState()

    const [ownerList, setOwnerList] = useState([])

    const onDismiss = () => setVisible(false)

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
        data.append('image', selectedFile)
        data.append('longitude', longitude)
        data.append('latitude', latitude)
        data.append('description', description)
        data.append('user_id', user_id)
        await axios.post(APP_URL.concat('/restaurant'), data, USER_TOKEN).then((result) => {
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

    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get(APP_URL.concat('/user'), USER_TOKEN)
            setOwnerList(data.data.data)
        }
        fetchUser().then(() => {
            setFetched(true)
        })
    }, [isFetched])

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            <Alert color={status === true ? "success" : "danger"} isOpen={visible} toggle={onDismiss}>
                {status === true ? "Restaurant Created Successfuly." : "Data is invalid. Try Again"}
            </Alert>
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
                            {isFetched && ownerList.map((v, key) => {
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

export default RestaurantCreate