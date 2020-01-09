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
        default:
            return state
    }
}

export default auth