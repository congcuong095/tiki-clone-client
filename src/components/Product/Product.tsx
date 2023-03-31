import { DataContext } from '@/pages';
import React, { useContext } from 'react';
import { TopProductArticle } from '../Article';
import ProductItem from './ProductItem';

function Product() {
    const { dataProduct } = useContext<any>(DataContext);
    return (
        <>
            <div className="wrapper rounded-r-[4px] w-[calc(100%-208px)]">
                <div className="inner">
                    <div className="header">{/* <TopProductArticle/> */}</div>
                    <div className="main flex flex-wrap gap-[8px] bg-[transparent]">
                        {dataProduct.data &&
                            dataProduct.data.map((item: any, index: any) => {
                                if (index < 40) {
                                    return <ProductItem key={`${item.id + index}`} dataProduct={item} />;
                                }
                            })}
                    </div>
                    <div className="pagination"></div>
                </div>
            </div>
        </>
    );
}

export default Product;
