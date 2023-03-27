
import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import React from 'react';


export default function Home() {
    return (
        <>
            <ProductLayout>
                <Product/>
            </ProductLayout>
        </>
    );
}
