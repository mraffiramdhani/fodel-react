import axios from 'axios';

import { APP_URL, USER_TOKEN } from '../../helper/config';

const url = APP_URL.concat('/restaurant')

export const getRestaurants = () => {
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(url, USER_TOKEN)
    }
}