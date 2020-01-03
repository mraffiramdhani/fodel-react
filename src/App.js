import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminLayout from './layouts/Admin';
import RestaurantLayout from './layouts/Restaurant';
import CustomerLayout from './layouts/Customer';
import AuthLayout from './layouts/Auth';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    <Route path="/restaurant" render={props => <RestaurantLayout {...props} />} />
                    <Route path="/customer" render={props => <CustomerLayout {...props} />} />
                    <Route path="/auth" render={props => <AuthLayout {...props} />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
