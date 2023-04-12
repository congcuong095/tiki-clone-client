import Product from '@/src/components/Product/Product';
import ProductLayout from '@/src/Layout/ProductLayout';
import { createContext, useEffect, useState } from 'react';
import { getAPIFake, getAPIProduct } from '@/src/Entity/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/src/Store/Actions';

export const DataContext = createContext({});

export default function Home() {
    const [dataProduct, setDataProduct] = useState<any>({});
    const param = useSelector((state: any) => state.ParamReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getAPIFake().then((res) => console.log(res));
        getAPIProduct(param).then((res) => {
            setDataProduct(res.data);
            console.log(new Date());
            dispatch(fetchProducts(res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);
    return (
        <DataContext.Provider value={{ setDataProduct, dataProduct }}>
            <ProductLayout>
                <Product />
            </ProductLayout>
        </DataContext.Provider>
    );
}
