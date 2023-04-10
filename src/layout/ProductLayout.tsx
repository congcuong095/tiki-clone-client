import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import { UnderHeaderArticle } from '../components/Article/Article';
import React from 'react';
import { nextIcon } from '../assets/svg/icon';
import Product from '../components/Product/Product';
import RecentlyProduct from '../components/RecentlyProduct';

function ProductLayout({ children }: any) {
    return (
        <div className=" bg-[#f5f5fa]">
            <Header />
            <UnderHeaderArticle />
            <div className="main ">
                <div className="category">
                    <div className="category-wrapper w-[1270px] px-[15px] mx-auto">
                        <div className="breadcrumb flex items-center">
                            <a
                                href="./"
                                className="breadcrumb-item relative flex justify-center items-center h-[40px] text-textSecondary text-[15px] leading-[20px] font-light whitespace-nowrap"
                            >
                                <span>Trang chủ</span>
                            </a>
                            <span className="icon-next inline-block align-middle bg-no-repeat ml-[5.5px] mr-[8.5px] mb-[4px]">
                                {nextIcon}
                            </span>
                            <a
                                href="./"
                                className="breadcrumb-item relative flex justify-center items-center h-[40px] text-textSecondary text-[15px] leading-[20px] font-light whitespace-nowrap"
                            >
                                <span>Ô Tô - Xe Máy - Xe Đạp</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container  w-[1270px] px-[15px] mx-[auto]">
                    <div className="container-view flex justify-between items-start w-full">
                        <Sidebar />
                        {children}
                    </div>
                    <RecentlyProduct />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductLayout;
