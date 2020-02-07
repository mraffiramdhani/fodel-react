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
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }

        case 'REGISTER_PENDING':
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
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