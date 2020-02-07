import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';
import { APP_IMAGE_URL } from '../../helper/config';
import { connect } from 'react-redux';
import { getRestaurant, patchRestaurant, patchRestaurantLogo } from '../../redux/action/restaurant';

const RestaurantUpdate = (props) => {

    const [name, setName] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState('')
    const [logo, setLogo] = useState('')
    const [selectedFile, setFile] = useState('')

    const [isLoading, setLoading] = useState(true)
    const [isVisible, setVisible] = useState(false)

    const onDismiss = () => setVisible(false)

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getRestaurant(props.match.params.id)).then((data) => {
                const res = data.value.data.data
                setName(res.name)
                setLongitude(res.longitude)
                setLatitude(res.latitude)
                setDescription(res.description)
                setLogo(res.logo)
            })
        }
        fetchData()
    }, [])

    const handleFileInputChange = (files) => {
        setFile(files[0])
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('name', name);
        data.append('longitude', longitude);
        data.append('latitude', latitude);
        data.append('description', description);
        if (selectedFile !== '') {
            data.append('logo', selectedFile);
        }

        await props.dispatch(patchRestaurant(props.match.params.id, data))
            .then(async (data) => {
                setLoading(props.restaurant.isLoading)
                setVisible(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form className="mt-3" encType="multipart/form-data" onSubmit={e => handleFormSubmit(e)}>
            {
                !isLoading && props.restaurant.isSuccess &&
                <Alert color="success" isOpen={isVisible} toggle={onDismiss}>
                    Restaurant Updated Successfully.
                </Alert>
            }
            {
                !isLoading && !props.restaurant.isSuccess &&
                <Alert color="danger" isOpen={isVisible} toggle={onDismiss}>
                    {props.restaurant.data.message}
                </Alert>
            }
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
                        <Input type="file" name="logo" id="logo" accept="jpg,jpeg,png,svg,bmp" onChange={e => handleFileInputChange(e.target.files)} />
                        <FormText color="muted">
                            Maximum Image Size is 1 Mb
                        </FormText>
                    </FormGroup>
                </Col>
                <Col>
                    <Label>Current Logo : </Label>
                    {(logo !== '' && logo !== null)
                        ? <img alt={name} src={logo.substr(0, 4) === 'http' ? logo : APP_IMAGE_URL.concat('/' + logo)} width="85px" height="85px" />
                        : 'No Image'}
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
                        <Input type="textarea" name="description" id="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" color="success" block><i className="fa fa-save"></i> Save Changes</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        restaurant: state.restaurant
    }
}

export default connect(mapStateToProps)(RestaurantUpdate)