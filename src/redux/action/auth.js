import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';

const { store } = storage()

const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(APP_URL.concat('/login'), data)
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: axios.get(APP_URL.concat('/logout'), header)
    }
}