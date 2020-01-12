import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/Login';
import RegisterPage from '../pages/auth/Register';

const AuthLayout = () => {

    useEffect(() => {
        document.body.style = "background: linear-gradient(to right, #0062E6, #33AEFF)"
    }, [])

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