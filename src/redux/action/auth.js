import { APP_URL, Get, Post } from '../../helper/config';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Post(APP_URL.concat('/login'), data)
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: Get(APP_URL.concat('/logout'))
    }
}