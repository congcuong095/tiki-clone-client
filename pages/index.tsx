import Article from '@/src/components/Article';
import Product from '@/src/components/Product';
import ProductLayout from '@/src/layout/ProductLayout';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const productComponent = <Product/>
    return (
        <>
            <ProductLayout>
                <Article/>
                <Product/>
            </ProductLayout>
        </>
    );
}
