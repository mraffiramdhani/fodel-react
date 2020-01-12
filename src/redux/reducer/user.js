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
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_USERS_REJECTED':
            return {
                count: 0,
                data: [],
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

        case 'GET_USER_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_USER_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_USER_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'POST_USER_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'POST_USER_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'POST_USER_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }

        case 'PATCH_USER_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_USER_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_USER_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }

        case 'DELETE_USER_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'DELETE_USER_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'DELETE_USER_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success
            }
        default:
            return state
    }
}

export default user