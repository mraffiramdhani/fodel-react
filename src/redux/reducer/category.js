const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                count: action.payload.data.data.categories.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'GET_CATEGORY_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_CATEGORY_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_CATEGORY_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'POST_CATEGORY_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'POST_CATEGORY_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'POST_CATEGORY_FULFILLED':
            return {
                count: 0,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'PATCH_CATEGORY_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_CATEGORY_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_CATEGORY_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'DELETE_CATEGORY_PENDING':
            return {
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'DELETE_CATEGORY_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'DELETE_CATEGORY_FULFILLED':
            return {
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        default:
            return state
    }
}

export default category