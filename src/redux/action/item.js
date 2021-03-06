import { APP_URL, Get, Post, Patch, Delete } from '../../helper/config';
import qs from 'qs';

const url = APP_URL.concat('/item')

export const getItems = (params = {}) => {
    let par = ''
    if (typeof params === 'string') {
        par = params
    } else {
        par = qs.stringify(params)
    }
    return {
        type: 'GET_ITEMS',
        payload: Get(url.concat('?' + par))
    }
}

export const getCount = () => {
    return {
        type: 'GET_ITEM_COUNT',
        payload: Get(APP_URL.concat('/count/item'))
    }
}

export const getItem = (id) => {
    return {
        type: 'GET_ITEM',
        payload: Get(url.concat('/' + id))
    }
}

export const postItem = (data) => {
    return {
        type: 'POST_ITEM',
        payload: Post(url, data)
    }
}

export const patchItem = (id, data) => {
    return {
        type: 'PATCH_ITEM',
        payload: Patch(url.concat('/' + id), data)
    }
}

export const patchItemImage = (id, data) => {
    return {
        type: 'PATCH_ITEM_IMAGE',
        payload: Patch(url.concat('/' + id + '/images'), data)
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: Delete(url.concat('/' + id))
    }
}