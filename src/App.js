import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from './layouts/Admin';
import RestaurantLayout from './layouts/Restaurant';
import AuthLayout from './layouts/Auth';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    <Route path="/restaurant" render={props => <RestaurantLayout {...props} />} />
                    <Route path="/auth" render={props => <AuthLayout {...props} />} />
                    <Redirect from="/" to="/auth/login" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
