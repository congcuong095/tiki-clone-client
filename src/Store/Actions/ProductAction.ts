import actionType from './actionType';

export const fetchProductsPending = () => {
    return {
        type: actionType.FETCH_PRODUCTS_PENDING,
    };
};

export const fetchProductsSuccess = (products: any) => {
    return {
        type: actionType.FETCH_PRODUCTS_SUCCESS,
        products: products,
    };
};

export const fetchProductsError = (error: any) => {
    return {
        type: actionType.FETCH_PRODUCTS_ERROR,
        error: error,
    };
};
