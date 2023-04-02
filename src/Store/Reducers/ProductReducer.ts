import actionType from '../Actions/actionType';

const initialState = {
    pending: false,
    products: [],
    error: null,
};

export function ProductReducer(state = initialState, action: any) {
    switch (action.type) {
        case actionType.FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case actionType.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload,
            };
        case actionType.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        default:
            return state;
    }
}

// export const getProducts = (state: any) => state.products;
// export const getProductsPending = (state: any) => state.pending;
// export const getProductsError = (state: any) => state.error;
