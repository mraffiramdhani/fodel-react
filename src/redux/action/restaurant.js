import { APP_URL, Get, Post, Patch, Delete } from '../../helper/config';

const url = APP_URL.concat('/restaurant')

export const getRestaurants = () => {
    return {
        type: 'GET_RESTAURANTS',
        payload: Get(url)
    }
}

export const getRestaurant = (id) => {
    return {
        type: 'GET_RESTAURANT',
        payload: Get(url.concat('/' + id))
    }
}

export const postRestaurant = (data) => {
    return {
        type: 'POST_RESTAURANT',
        payload: Post(url, data)
    }
}

export const patchRestaurant = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT',
        payload: Patch(url.concat('/' + id), data)
    }
}

export const patchRestaurantLogo = (id, data) => {
    return {
        type: 'PATCH_RESTAURANT_LOGO',
        payload: Patch(url.concat('/' + id + '/logo'), data)
    }
}

export const deleteRestaurant = (id) => {
    return {
        type: 'DELETE_RESTAURANT',
        payload: Delete(url.concat('/' + id))
    }
}