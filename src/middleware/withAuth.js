import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { APP_URL } from '../helper/config';
import axios from 'axios';

export default function withAuth(ComponentToProtect, UserPrivilege) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            const role = localStorage.getItem('role');
            
            if (role === UserPrivilege) {
                this.setState({ loading: false });
            } else {
                this.props.history.goBack()
            }
        }


        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return <ComponentToProtect {...this.props} />;
        }
    }
}