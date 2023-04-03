import Product from '@/src/components/Product/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { createContext, useEffect, useState } from 'react';
import { getData } from '@/src/Entity/axios';
import { useSelector } from 'react-redux';

export const DataContext = createContext({});

export default function Home() {
    const [dataRoot, setDataRoot] = useState<any>({});
    const [dataProduct, setDataProduct] = useState<any>({});
    const param = useSelector((state: any) => state.ParamReducer);

    useEffect(() => {
        getData(param).then((res) => {
            setDataRoot(res);
            setDataProduct(res);
        });
    }, [param]);

    return (
        <DataContext.Provider value={{ dataRoot, setDataProduct, dataProduct }}>
            <ProductLayout></ProductLayout>
        </DataContext.Provider>
    );
}
