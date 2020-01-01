import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapse: false
        }
    }
    toogler = () => {
        this.setState({ isCollapse: !this.state.isCollapse })
    }
    render() {
        const { isCollapse } = this.state
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>React Live Coding</NavbarBrand>
                    <NavbarToggler onClick={() => this.toogler()} />
                    <Collapse isOpen={isCollapse} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact-us" className="nav-link">Contact Us</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar