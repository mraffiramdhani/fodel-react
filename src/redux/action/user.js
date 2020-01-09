import axios from 'axios';
import storage from '../store';
import { APP_URL } from '../../helper/config';

const { store } = storage()

const url = APP_URL.concat('/user')

export const getUsers = () => {
    return {
        type: 'GET_USERS',
        payload: axios.get(url, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}