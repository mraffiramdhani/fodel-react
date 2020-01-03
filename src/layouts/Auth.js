// Initialize React
import React, { Component } from 'react';
// import { Container, Row } from 'reactstrap';
import { Route } from 'react-router-dom';
// Import login.css
import '../assets/css/login.css';

// import routes from '../routes';

class AuthLayout extends Component {
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
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-black">Login</button>
                                <button type="submit" className="btn btn-secondary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            // <>
            //     <Container className="mt--8 pb-5">
            //         <Row className="justify-content-center">
            //             <Switch>{this.getRoutes(routes)}</Switch>
            //         </Row>
            //     </Container>
            // </>
        )
    }
}

export default AuthLayout