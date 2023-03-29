import React from 'react';
import { TopProductArticle } from './Article';
import ProductItem from './ProductItem';

function Product(data: any) {
    return (
        <>
            <div className="wrapper rounded-r-[4px] w-[calc(100%-208px)]">
                <div className="inner">
                    <div className="header">{/* <TopProductArticle/> */}</div>
                    <div className="main flex flex-wrap gap-[8px] bg-[transparent]">
                        {data.map((item: any) => {
                            return <ProductItem key={item.id} dataProduct={item} />;
                        })}
                    </div>
                    <div className="pagination"></div>
                </div>
            </div>
        </>
    );
}

export default Product;
