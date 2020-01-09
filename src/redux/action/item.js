import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';

const { store } = storage()

const url = APP_URL.concat('/item')
const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const getItems = () => {
    return {
        type: 'GET_ITEMS',
        payload: axios.get(url, header)
    }
}