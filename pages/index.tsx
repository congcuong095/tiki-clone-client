import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { getAPI } from './api/axios';

export const DataContext = createContext({});

export default function Home() {
    const [data, setData] = useState<any>({});
    const getData = () =>
        getAPI().then((res) => {
            if (res.status === 200) {
                setData(res.data);
            } else {
                console.log(res);
            }
        });
    useEffect(() => {
        getData();
    }, []);

    return (
        <DataContext.Provider value={{ data, setData }}>
            <ProductLayout>
                <Product />
            </ProductLayout>
        </DataContext.Provider>
    );
}
