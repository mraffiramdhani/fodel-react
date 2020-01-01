import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';

class AdminLayout extends Component {
    render() {
        return (
            <>
                <NavBar />
            </>
        )
    }
}

export default AdminLayout