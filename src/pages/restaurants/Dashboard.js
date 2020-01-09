import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../../redux/action/item';

const RestaurantDashboard = (props) => {

    const [items, setItemCount] = useState(0)
    const [isFetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // setFetched(false)
            // try {
            //     const items = await axios.get(APP_URL.concat('/restaurant-item'), USER_TOKEN)
            //     setItemCount(items.data.data.length)
            // } catch (error) {
            //     console.log(error)
            // }
            await props.dispatch(getItems())
        }
        fetchData()
        setFetched(!props.item.isLoading)
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
                                <span style={styles.counter}>{props.item.count}</span>
                                <Link to="/restaurant/item/index" style={styles.detail}>See Detail</Link>
                            </Card>
                        </Col>
                    </>
                }
            </Row>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps)(RestaurantDashboard)