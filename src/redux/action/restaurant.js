import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';
const { store } = storage()

const url = APP_URL.concat('/restaurant')
const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const getRestaurants = () => {
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(url, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const getRestaurant = (id) => {
    return {
        type: 'GET_RESTAURANT',
        payload: axios.get(url.concat('/' + id), header)
    }
}

export const postRestaurant = (data) => {
    return {
        type: 'POST_RESTAURANT',
        payload: axios.post(url, data, header)
    }
}

export const patchRestaurant = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT',
        payload: axios.patch(url.concat('/' + id), data, header)
    }
}

export const patchRestaurantLogo = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT_LOGO',
        payload: axios.patch(url.concat('/' + id + '/logo'), data, header)
    }
}

export const deleteRestaurant = (id) => {
    return {
        type: 'DELETE_RESTAURANT',
        payload: axios.delete(url.concat('/' + id), header)
    }
}