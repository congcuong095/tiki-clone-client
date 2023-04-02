import { fetchProductsError, fetchProductsPending, fetchProductsSuccess } from '../Store/Actions';
import { getData } from './axios';

function fetchProducts(param: any) {
    return (dispatch: any) => {
        dispatch(fetchProductsPending());
        getData(param)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchProductsSuccess(res.products));
                return res.products;
            })
            .catch((error) => {
                dispatch(fetchProductsError(error));
            });
    };
}

export default fetchProducts;
