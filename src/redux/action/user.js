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

export const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: axios.get(url.concat('/' + id), { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: axios.post(url, data, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const patchUser = (id, data) => {
    return {
        type: 'PATCH_USER',
        payload: axios.patch(url.concat('/' + id), data, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: axios.delete(url.concat('/' + id), { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}