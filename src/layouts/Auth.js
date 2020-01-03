import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/Login';

import '../assets/css/login.css';

const AuthLayout = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginPage} />
            </Switch>
        </div>
    )
}

export default AuthLayout