import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

class AdminDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: 0,
            restaurants: 0,
            categories: 0,
            isFetched: false
        }
    }

    handleUserChange = (users) => {
        this.setState({ users })
    }

    handleRestaurantChange = (restaurants) => {
        this.setState({ restaurants })
    }

    handleCategoryChange = (categories) => {
        this.setState({ categories })
    }

    handleFetchedChange = (isFetched) => {
        this.setState({ isFetched })
    }

    async componentDidMount() {
        await axios.get(APP_URL.concat('/user'), USER_TOKEN).then(async (result) => {
            this.handleUserChange(result.data.data.length)
            await axios.get(APP_URL.concat('/restaurant'), USER_TOKEN).then(async (result) => {
                this.handleRestaurantChange(result.data.data.requests.length)
                await axios.get(APP_URL.concat('/category'), USER_TOKEN).then((result) => {
                    this.handleCategoryChange(result.data.data.requests.length)
                    this.handleFetchedChange(true)
                })
            })
        })
    }

    styles = {
        counter: {
            fontSize: "5em",
            textAlign: "right"
        },
        detail: {
            color: "#0088cc",
            textDecoration: "none",
            textAlign: "right",
            fontSize: "1em",
            cursor: "pointer"
        }
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.isFetched &&
                        <>
                            <Col sm={12} md={4}>
                                <Card body outline color="warning" className="mt-3">
                                    <span>
                                        <i className="fa fa-users"></i> Users
                                </span>
                                    <span style={this.styles.counter}>{this.state.users}</span>
                                    <Link to="/admin/user/index" style={this.styles.detail}>See Detail</Link>
                                </Card>
                            </Col>
                            <Col sm={12} md={4}>
                                <Card body outline color="success" className="mt-3">
                                    <span>
                                        <i className="fa fa-briefcase"></i> Restaurants
                                </span>
                                    <span style={this.styles.counter}>{this.state.restaurants}</span>
                                    <Link to="/admin/restaurant/index" style={this.styles.detail}>See Detail</Link>
                                </Card>
                            </Col>
                            <Col sm={12} md={4}>
                                <Card body outline color="primary" className="mt-3">
                                    <span>
                                        <i className="fa fa-list-alt"></i> Categories
                                </span>
                                    <span style={this.styles.counter}>{this.state.categories}</span>
                                    <Link to="/admin/category/index" style={this.styles.detail}>See Detail</Link>
                                </Card>
                            </Col>
                        </>
                    }
                </Row>
            </div >
        )
    }
}

export default AdminDashboard