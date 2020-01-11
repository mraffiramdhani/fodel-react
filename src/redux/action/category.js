import { APP_URL, Get, Post, Patch, Delete } from '../../helper/config';

const url = APP_URL.concat('/category')

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: Get(url)
    }
}

export const getCategory = (id) => {
    return {
        type: 'GET_CATEGORY',
        payload: Get(url.concat('/' + id))
    }
}

export const postCategory = (data) => {
    return {
        type: 'POST_CATEGORY',
        payload: Post(url, data)
    }
}

export const patchCategory = (id, data) => {
    return {
        type: 'PATCH_CATEGORY',
        payload: Patch(url.concat('/' + id), data)
    }
}

export const deleteCategory = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: Delete(url.concat('/' + id))
    }
}