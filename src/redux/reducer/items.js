const initialState = {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEMS_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_ITEMS_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_ITEMS_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.items.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'GET_RESTAURANT_ITEMS_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_RESTAURANT_ITEMS_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_RESTAURANT_ITEMS_FULFILLED':
            return {
                ...state,
                count: action.payload.data.data.items.length,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'GET_ITEM_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_ITEM_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_ITEM_FULFILLED':
            return {
                ...state,
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'POST_ITEM_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'POST_ITEM_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'POST_ITEM_FULFILLED':
            return {
                ...state,
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'POST_ITEM_BY_ADMIN_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'POST_ITEM_BY_ADMIN_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'POST_ITEM_BY_ADMIN_FULFILLED':
            return {
                ...state,
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'PATCH_ITEM_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_ITEM_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_ITEM_FULFILLED':
            return {
                ...state,
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'PATCH_ITEM_IMAGE_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PATCH_ITEM_IMAGE_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'PATCH_ITEM_IMAGE_FULFILLED':
            return {
                ...state,
                count: 1,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        case 'DELETE_ITEM_PENDING':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'DELETE_ITEM_REJECTED':
            return {
                ...state,
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'DELETE_ITEM_FULFILLED':
            return {
                ...state,
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

export default item