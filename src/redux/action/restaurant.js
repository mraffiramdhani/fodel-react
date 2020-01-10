import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';
const { store } = storage()

const url = APP_URL.concat('/restaurant')

export const getRestaurants = () => {
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(url, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const getRestaurant = (id) => {
    return {
        type: 'GET_RESTAURANT',
        payload: axios.get(url.concat('/' + id), { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const postRestaurant = (data) => {
    return {
        type: 'POST_RESTAURANT',
        payload: axios.post(url, data, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const patchRestaurant = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT',
        payload: axios.patch(url.concat('/' + id), data, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const patchRestaurantLogo = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT_LOGO',
        payload: axios.patch(url.concat('/' + id + '/logo'), data, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const deleteRestaurant = (id) => {
    return {
        type: 'DELETE_RESTAURANT',
        payload: axios.delete(url.concat('/' + id), { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}