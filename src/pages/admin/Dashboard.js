import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const AdminDashboard = () => {

    const [users, setUserCount] = useState(0)
    const [restaurants, setRestaurantCount] = useState(0)
    const [categories, setCategoryCount] = useState(0)
    const [isFetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setFetched(false)
            try {
                const users = await axios.get(APP_URL.concat('/user'), USER_TOKEN)
                const restaurants = await axios.get(APP_URL.concat('/restaurant'), USER_TOKEN)
                const categories = await axios.get(APP_URL.concat('/category'), USER_TOKEN)

                setUserCount(users.data.data.length)
                setRestaurantCount(restaurants.data.data.requests.length)
                setCategoryCount(categories.data.data.requests.length)
            } catch (error) {
                console.log(error)
            }
            setFetched(true)
        }
        fetchData()
    }, [])

    const styles = {
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


    return (
        <div>
            <Row>
                {isFetched &&
                    <>
                        <Col sm={12} md={4}>
                            <Card body outline color="warning" className="mt-3">
                                <span>
                                    <i className="fa fa-users"></i> Users
                                </span>
                                <span style={styles.counter}>{users}</span>
                                <Link to="/admin/user/index" style={styles.detail}>See Detail</Link>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card body outline color="success" className="mt-3">
                                <span>
                                    <i className="fa fa-briefcase"></i> Restaurants
                                </span>
                                <span style={styles.counter}>{restaurants}</span>
                                <Link to="/admin/restaurant/index" style={styles.detail}>See Detail</Link>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card body outline color="primary" className="mt-3">
                                <span>
                                    <i className="fa fa-list-alt"></i> Categories
                                </span>
                                <span style={styles.counter}>{categories}</span>
                                <Link to="/admin/category/index" style={styles.detail}>See Detail</Link>
                            </Card>
                        </Col>
                    </>
                }
            </Row>
        </div >
    )

}

export default AdminDashboard