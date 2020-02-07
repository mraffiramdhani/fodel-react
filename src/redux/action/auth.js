import { APP_URL, Get, Post } from '../../helper/config';

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: Post(APP_URL.concat('/login'), data)
  }
}

export const register = (data) => {
	return {
		type: 'REGISTER',
		payload: Post(APP_URL.concat('/restaurant/register'), data)
	}
}

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: Get(APP_URL.concat('/logout'))
  }
}