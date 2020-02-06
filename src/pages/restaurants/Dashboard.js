import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../../redux/action/item';

const RestaurantDashboard = (props) => {

    const [isFetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getItems())
            setFetched(!props.item.isLoading)
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
                                <span style={styles.counter}>{props.item.data.count}</span>
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