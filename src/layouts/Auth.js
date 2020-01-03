import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/Login';
import RegisterPage from '../pages/auth/Register';

const AuthLayout = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginPage} />
                <Route exact path="/auth/register" component={RegisterPage} />
            </Switch>
        </div>
    )
}

export default AuthLayout