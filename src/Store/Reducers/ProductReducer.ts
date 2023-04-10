import actionType from '../Actions/actionType';

const initialState: any = {
    status: 0,
    data: {},
};

export function ProductReducer(state = initialState, action: any) {
    switch (action.type) {
        case actionType.FETCH_PRODUCTS:
            return {
                ...action.products,
            };
        default:
            return state;
    }
}

// export const getProducts = (state: any) => state.products;
// export const getProductsPending = (state: any) => state.pending;
// export const getProductsError = (state: any) => state.error;
