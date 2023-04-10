import actionType from './actionType';

export const fetchProducts = (data: any) => {
    return {
        type: actionType.FETCH_PRODUCTS,
        products: data,
    };
};
