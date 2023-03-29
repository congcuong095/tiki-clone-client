import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [dataGet, setDataGet] = useState({});
    useEffect(() => {
        fetch(
            'https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=c6f19eee-d118-ea27-ead1-840849028e16&category=8594&page=1&urlKey=o-to-xe-may-xe-dap',
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setDataGet(data)});
    });
    return (
        <>
            <ProductLayout>
                <Product data={dataGet} />
            </ProductLayout>
        </>
    );
}
