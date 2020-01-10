import axios from 'axios';
import storage from '../store';

import { APP_URL } from '../../helper/config';

const { store } = storage()

const url = APP_URL.concat('/item')
const header = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }

export const getItems = () => {
    return {
        type: 'GET_ITEMS',
        payload: axios.get(url, { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } })
    }
}

export const getItem = (id) => {
    return {
        type: 'GET_ITEM',
        payload: axios.get(url.concat('/' + id), header)
    }
}

export const postItem = (data) => {
    return {
        type: 'POST_ITEM',
        payload: axios.post(url, data, header)
    }
}

export const patchItem = (id, data) => {
    return {
        type: 'PATCH_ITEM',
        payload: axios.patch(url.concat('/' + id), data, header)
    }
}

export const patchItemImage = (id, data) => {
    return {
        type: 'PATCH_ITEM_IMAGE',
        payload: axios.patch(url.concat('/' + id + '/images'), data, header)
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: axios.delete(url.concat('/' + id), header)
    }
}