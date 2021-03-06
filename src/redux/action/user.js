import { APP_URL, Get, Post, Patch, Delete } from '../../helper/config';
import qs from 'qs';

const url = APP_URL.concat('/user')

export const getUsers = (params = {}) => {
    let par
    if (typeof params === 'string') {
        par = params
    } else {
        par = qs.stringify(params)
    }
    return {
        type: 'GET_USERS',
        payload: Get(url.concat(`?${par}`))
    }
}

export const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: Get(url.concat('/' + id))
    }
}

export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: Post(url, data)
    }
}

export const patchUser = (id, data) => {
    return {
        type: 'PATCH_USER',
        payload: Patch(url.concat('/' + id), data)
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: Delete(url.concat('/' + id))
    }
}