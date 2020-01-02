import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import HeaderComponent from '../components/Header/HeaderComponent';
import '../assets/css/style.css';

class AdminLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: ""
        }
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    toogleSidebar = e => {
        e.preventDefault()
        this.setState({ isActive: this.state.isActive === "active" ? "" : "active" })
    }

    render() {
        const { isActive } = this.state
        return (
            <div className="wrapper">
                <nav id="sidebar" className={isActive}>
                    <div className="sidebar-header">
                        <img width="40" height="40" alt="fodel-react" src={require("../assets/images/fodel-logo.png")} />
                        <h3>Fodel React</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Navigation Menu</p>
                        <li className="active">
                            <a href="#"><i className="fa fa-dashboard"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div id="content">

                    <HeaderComponent />

                    {/* Content */}
                    <Switch>{this.getRoutes(routes)}</Switch>

                </div>
            </div >
        )
    }
}

export default AdminLayout