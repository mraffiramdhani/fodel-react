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
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_RESTAURANTS_REJECTED':
            return {
                ...state,
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
        default:
            return state
    }
}

export default restaurant