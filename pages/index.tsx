import Product from '@/src/components/Product/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { createContext, useEffect, useState } from 'react';
import { getAPIProduct } from '@/src/Helper/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/src/Store/Actions';

export const DataContext = createContext({});

export default function Home() {
    const [dataProduct, setDataProduct] = useState<any>({});
    const param = useSelector((state: any) => state.ParamReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getAPIProduct(param).then((res) => {
            setDataProduct(res.data);
            dispatch(fetchProducts(res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);
    console.log(dataProduct);
    return (
        <DataContext.Provider value={{ setDataProduct, dataProduct }}>
            <ProductLayout>
                <Product />
            </ProductLayout>
        </DataContext.Provider>
    );
}
