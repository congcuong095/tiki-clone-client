import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Sidebar from '@/src/components/Sidebar';
import React from 'react';

function ProductLayout({ children }: any) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
}

export default ProductLayout;
