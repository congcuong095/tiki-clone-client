import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { useEffect, useState } from 'react';
import { getAPI } from './api/axios';

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
        <>
            <ProductLayout data={data} setData={setData}>
                <Product dataProp={data.data} setData={setData} />
            </ProductLayout>
        </>
    );
}
