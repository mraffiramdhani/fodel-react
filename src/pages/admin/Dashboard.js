import React, { useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/action/user';
import { getRestaurants } from '../../redux/action/restaurant';
import { getCategories } from '../../redux/action/category';

const AdminDashboard = (props) => {

    useEffect(() => {
        props.dispatch(getUsers())
        props.dispatch(getRestaurants())
        props.dispatch(getCategories())
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
                <Col sm={12} md={4}>
                    <Card body outline color="warning" className="mt-3">
                        <span>
                            <i className="fa fa-users"></i> Users
                                </span>
                        {props.user.count > 0 && !props.user.isLoading &&
                            <span style={styles.counter}>
                                {props.user.count}
                            </span>
                        }
                        {props.user.isLoading &&
                            <div className="spinner-border text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        <Link to="/admin/user/index" style={styles.detail}>See Detail</Link>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card body outline color="success" className="mt-3">
                        <span>
                            <i className="fa fa-briefcase"></i> Restaurants
                                </span>
                        {props.restaurant.count > 0 && !props.restaurant.isLoading &&
                            <span style={styles.counter}>
                                {props.restaurant.count}
                            </span>
                        }
                        {props.restaurant.isLoading &&
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        <Link to="/admin/restaurant/index" style={styles.detail}>See Detail</Link>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card body outline color="primary" className="mt-3">
                        <span>
                            <i className="fa fa-list-alt"></i> Categories
                                </span>
                        {props.category.count > 0 && !props.category.isLoading &&
                            <span style={styles.counter}>
                                {props.category.count}
                            </span>
                        }
                        {props.category.isLoading &&
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        <Link to="/admin/category/index" style={styles.detail}>See Detail</Link>
                    </Card>
                </Col>
            </Row>
        </div >
    )

}

const mapStateToProps = state => {
    return {
        user: state.user,
        restaurant: state.restaurant,
        category: state.category
    }
}

export default connect(mapStateToProps)(AdminDashboard)