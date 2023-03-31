import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { createContext, useCallback, useEffect, useState } from 'react';
import { getAPI, getData } from './api/axios';

export const DataContext = createContext({});

export default function Home() {
    const [dataRoot, setDataRoot] = useState<any>({});
    const [dataProduct, setDataProduct] = useState<any>({});

    useEffect(() => {
        getData().then((res) => {
            setDataRoot(res);
            setDataProduct(res);
        });
    }, []);

    return (
        <DataContext.Provider value={{ dataRoot, setDataProduct, dataProduct }}>
            <ProductLayout>
                <Product />
            </ProductLayout>
        </DataContext.Provider>
    );
}
