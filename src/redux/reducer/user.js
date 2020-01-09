const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_USERS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_USERS_FULFILLED':
            return {
                count: action.payload.data.data.users.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default user