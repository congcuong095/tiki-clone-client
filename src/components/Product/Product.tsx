import { DataContext } from '@/pages';
import React, { memo, useContext } from 'react';
import ProductItem from './ProductItem';
import { warningIcon } from '@/src/assets/svg/icon';
import Pagination from '../Pagination/Pagination';
import HeaderProduct from './HeaderProduct';

function Product() {
    const { dataProduct } = useContext<any>(DataContext);
    return (
        <>
            {dataProduct && (
                <div className="wrapper rounded-r-[4px] w-[calc(100%-208px)]">
                    <div className="inner">
                        <div className="header">
                            <HeaderProduct />
                        </div>
                        <div className="main flex flex-wrap gap-[8px] bg-[transparent]">
                            {dataProduct.data && dataProduct.data.length > 0 ? (
                                dataProduct.data.map((item: any, index: any) => {
                                    return <ProductItem key={`${item.id}${index}`} dataProduct={item} />;
                                })
                            ) : (
                                <>
                                    <div className="not-found bg-[#ffffff] w-full px-[24px] py-[16px] text-[15px] mb-[24px] ">
                                        <div className="not-found-main bg-[#fffffb] border border-solid border-[#fdd835] text-[#dfbd15] px-[24px] py-[16px] flex ">
                                            <div className="not-found-img w-[16px] h-[17px] mr-[12px] mt-[2px]">
                                                {warningIcon}
                                            </div>
                                            Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {dataProduct.data && (
                            <div className="pagination">
                                <Pagination />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(Product);
