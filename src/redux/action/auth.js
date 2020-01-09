import axios from 'axios';
// import qs from 'qs';

import { APP_URL } from '../../helper/config';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(APP_URL.concat('/login'), data)
    }
}