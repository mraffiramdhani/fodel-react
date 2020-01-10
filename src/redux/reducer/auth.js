const initialAuthState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const auth = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'LOGIN_REJECTED':
            return {
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'LOGIN_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }

        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'LOGOUT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }
        default:
            return state
    }
}

export default auth