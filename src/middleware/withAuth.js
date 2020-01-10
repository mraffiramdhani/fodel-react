import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { APP_URL } from '../helper/config';
import axios from 'axios';
import storage from '../redux/store';

const { store } = storage()

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
            const token = localStorage.getItem('token')
            axios.post(APP_URL.concat('/check-token'), { token })
                .then(res => {
                    if (res.data.success === true) {
                        if (res.data.data.role === UserPrivilege) {
                            this.setState({ loading: false });
                        } else {
                            this.props.history.goBack()
                        }
                    } else {
                        this.setState({ loading: false, redirect: true });
                    }
                })
                .catch(err => {
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