import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const RestaurantDashboard = (props) => {

    const [items, setItemCount] = useState(0)
    const [isFetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setFetched(false)
            try {
                const items = await axios.get(APP_URL.concat('/restaurant-item'), USER_TOKEN)
                setItemCount(items.data.data.length)
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
                        <Col sm={12} md={6}>
                            <Card body outline color="warning" className="mt-3">
                                <span>
                                    <i className="fa fa-th"></i> Items
                                </span>
                                <span style={styles.counter}>{items}</span>
                                <Link to="/restaurant/item/index" style={styles.detail}>See Detail</Link>
                            </Card>
                        </Col>
                    </>
                }
            </Row>
        </div>
    )
}

export default RestaurantDashboard