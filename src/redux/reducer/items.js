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
                count: 0,
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_ITEMS_REJECTED':
            return {
                count: 0,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'GET_ITEMS_FULFILLED':
            return {
                count: action.payload.data.data.items.length,
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