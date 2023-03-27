import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Sidebar from '@/src/components/Sidebar';
import { UnderHeaderArticle } from '../components/Article';
import React from 'react';

function ProductLayout({ children }: any) {
    return (
        <>
            <Header />
            <UnderHeaderArticle />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
}

export default ProductLayout;
