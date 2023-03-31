import Product from '@/src/components/Product/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { createContext, useEffect, useState } from 'react';
import { getData, Params } from './api/axios';

export const DataContext = createContext({});

const initParam: Params = {
    baseUrl: 'https://tiki.vn/api/personalish/v1/blocks/listings',
    method: 'get',
    param: {
        limit: 40,
        include: 'advertisement',
        aggregations: 2,
        category: 8594,
        page: 1,
        trackity_id: 'c6f19eee-d118-ea27-ead1-840849028e16',
        urlKey: 'o-to-xe-may-xe-dap',
    },
};

export default function Home() {
    const [dataRoot, setDataRoot] = useState<any>({});
    const [dataProduct, setDataProduct] = useState<any>({});
    const [param, setParam] = useState<Params>(initParam);

    useEffect(() => {
        getData(param).then((res) => {
            setDataRoot(res);
            setDataProduct(res);
        });
    }, [param]);

    return (
        <DataContext.Provider value={{ dataRoot, setDataProduct, dataProduct, param, setParam }}>
            <ProductLayout>
                <Product />
            </ProductLayout>
        </DataContext.Provider>
    );
}
