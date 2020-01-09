import axios from 'axios';

import { APP_URL, USER_TOKEN } from '../../helper/config';

const url = APP_URL.concat('/category')

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(url, USER_TOKEN)
    }
}