import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';

const { store } = storage()

const url = APP_URL.concat('/category')
const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(url, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const getCategory = (id) => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(url.concat('/' + id), header)
    }
}

export const postCategory = (data) => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post(url, data, header)
    }
}

export const patchCategory = (id, data) => {
    return {
        type: 'PATCH_CATEGORY',
        payload: axios.patch(url.concat('/' + id), data, header)
    }
}

export const deleteCategory = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(url.concat('/' + id), header)
    }
}