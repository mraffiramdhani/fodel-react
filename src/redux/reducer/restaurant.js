const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const restaurant = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESTAURANTS_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_RESTAURANTS_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_RESTAURANTS_FULFILLED':
            return {
                count: action.payload.data.data.restaurants.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'GET_RESTAURANT_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_RESTAURANT_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_RESTAURANT_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'POST_RESTAURANT_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'POST_RESTAURANT_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'POST_RESTAURANT_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'PATCH_RESTAURANT_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_RESTAURANT_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_RESTAURANT_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'PATCH_RESTAURANT_LOGO_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_RESTAURANT_LOGO_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_RESTAURANT_LOGO_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'DELETE_RESTAURANT_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'DELETE_RESTAURANT_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'DELETE_RESTAURANT_FULFILLED':
            return {
                count: 0,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default restaurant