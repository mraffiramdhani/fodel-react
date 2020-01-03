import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/auth/Login';
import RegisterPage from '../pages/auth/Register';

import '../assets/css/login.css';

const AuthLayout = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginPage} />
                <Route exact path="/auth/register" component={RegisterPage} />
                <Redirect from="/auth" to="/auth/login" />
            </Switch>
        </div>
    )
}

export default AuthLayout