import axios from 'axios';
import storage from '../store';
import { APP_URL } from '../../helper/config';

const { store } = storage()

const url = APP_URL.concat('/user')
const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const getUsers = () => {
    return {
        type: 'GET_USERS',
        payload: axios.get(url, header)
    }
}

export const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: axios.get(url.concat('/' + id), header)
    }
}

export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: axios.post(url, data, header)
    }
}

export const patchUser = (id, data) => {
    return {
        type: 'PATCH_USER',
        payload: axios.patch(url.concat('/' + id), data, header)
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: axios.delete(url.concat('/' + id), header)
    }
}