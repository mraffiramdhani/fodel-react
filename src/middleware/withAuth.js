import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { APP_URL } from '../helper/config';
import axios from 'axios';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            const token = localStorage.getItem('token')
            axios.post(APP_URL.concat('/check-token'), { token })
                .then(res => {
                    if (res.success === true) {
                        this.setState({ loading: false });
                    } else {
                        this.setState({ loading: false, redirect: true });
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true });
                });
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