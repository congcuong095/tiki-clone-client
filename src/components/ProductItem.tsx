import Image from 'next/image';
import images from '../assets/image';
import { goldStar } from '../assets/svg/icon';

function ProductItem(dataProduct:any) {
    return (
        <>
            <div className="wrap w-[20%] max-w-[200px]">
                <div>
                    <a
                        href="./"
                        className="product h-full no-underline flex relative cursor-pointer rounded-[4px] overflow-hidden bg-[#ffffff]
                            hover:z-[1] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]
                        "
                    >
                        <div>
                            <span className="product-main flex text-textPrimary decoration-[none] flex-col justify-between">
                                <div className="thumbnail">
                                    <div className=" absolute z-[2]"></div>
                                    {dataProduct.advertisement && (
                                        <p className="fund bg-[#ebebf0] leading-[16px] inline-block px-[4px] text-[13px] m-0 absolute top-[4px] right-[4px] z-[1] rounded-[2px] text-textPrimary">
                                            Tài trợ
                                        </p>
                                    )}
                                    <div className="image w-full pt-[100%] relative">
                                        <Image
                                            src={dataProduct.thumbnail_url}
                                            alt=""
                                            className=" absolute top-0 left-0 w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="info py-[8px] mx-[12px] border-b border-solid border-[#ebebf0]">
                                    <div className="name overflow-hidden mt-[6px] min-h-[32px]">
                                        <h3 className="font-normal text-[13px] leading-[16px] text-textPrimary m-0 break-words line-clamp-2 ">
                                            {dataProduct.name}
                                        </h3>
                                    </div>
                                    <div className="rating mb-[6px] flex items-center text-[13px] leading-[16px]">
                                        <div className="full-rating relative flex">
                                            <span className=" font-normal text-[13px] leading-[16px] text-textSecondary">
                                                5
                                            </span>
                                            {goldStar}
                                        </div>
                                        <div className="w-[1px] h-[10px] bg-[#ebebf0] ml-[2px] mr-[4px]"></div>
                                        <div className="sold line-clamp-1 overflow-hidden max-h-[16px] break-all text-textSecondary">
                                            Đã bán 5
                                        </div>
                                    </div>
                                    <div className="price-discount text-left text-[16px] leading-[24px] font-medium text-textPrimary m-0 flex items-center">
                                        6.750.000 <sup className="top-[-0.5em]"> ₫</sup>
                                    </div>
                                    <div className="badge-under-price text-textSecondary font-normal text-[11px] leading-[12px] min-h-[24px]">
                                        Tặng tới 169 ASA (35k ₫) <br />≈ 0.5% hoàn tiền
                                    </div>
                                    <div className="badge-under-rating flex gap-[4px] flex-wrap mt-[6px] min-h-[17px]">
                                        <div className="item px-[4px] py-[2px] border-[0.5px] border-solid border-primaryColor rounded-[2px] font-normal text-[11px] leading-[12px] text-primaryColor">
                                            <span>Trả góp</span>
                                        </div>
                                        <div className="item px-[4px] py-[2px] border-[0.5px] border-solid border-primaryColor rounded-[2px] font-normal text-[11px] leading-[12px] text-primaryColor">
                                            <span>Nhiều màu</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery flex px-[12px] py-[8px] gap-[4px]">
                                    <span className=" font-normal text-[13px] leading-[16px] text-textSecondary">
                                        Giao thứ 7, ngày 01/04
                                    </span>
                                </div>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
