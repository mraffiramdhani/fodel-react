import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';

class AuthLayout extends Component {
    // componentDidMount() {
    //     document.body.classList.add("bg-default");
    // }
    // componentWillUnmount() {
    //     document.body.classList.remove("bg-default");
    // }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            } else {
                return null
            }
        })
    }

    render() {
        return (
            <>
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        <Switch>{this.getRoutes(routes)}</Switch>
                    </Row>
                </Container>
            </>
        )
    }
}

export default AuthLayout