import Image from 'next/image';
import { goldStar } from '../../assets/svg/icon';
import { convertPrice } from '../../Helper/Helper';
import { memo } from 'react';
import images from '@/src/assets/image';

function ProductItem({ dataProduct }: any) {
    const badges_new = dataProduct.badges_new;
    const handleAstra = (value: any) => {
        let str;
        let arr;
        if (value) {
            str = value.text;
            arr = str.split('<br/>');
        }
        return arr.map((item: any, index: any) => {
            if (index < arr.length) {
                return (
                    <div key={index}>
                        {item}
                        <br />
                    </div>
                );
            }
            return <div key={index}>{item}</div>;
        });
    };

    return (
        <>
            {dataProduct && (
                <div className="wrap w-[20%] max-w-[200px]">
                    <div>
                        <a
                            href="./"
                            className="product h-full no-underline flex relative cursor-pointer rounded-[4px] overflow-hidden bg-[#ffffff]
                            hover:z-[1] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]
                        "
                        >
                            <div>
                                <span className="product-main flex text-textPrimary no-underline flex-col justify-between">
                                    <div className="thumbnail shrink-0 w-[200px] h-[200px] text-center relative">
                                        <div className=" absolute z-[2]"></div>
                                        {badges_new && badges_new.find((x: any) => x.code === 'trusted_store') && (
                                            <Image
                                                src={images.trusted}
                                                alt=""
                                                className=" top-0 left-0 block absolute z-[2] w-[54px] h-[14px]"
                                            />
                                        )}
                                        {badges_new && badges_new.find((x: any) => x.code === 'official_store') && (
                                            <Image
                                                src={images.official}
                                                alt=""
                                                className=" top-0 left-0 block absolute z-[2] w-[68px] h-[14px]"
                                            />
                                        )}
                                        {dataProduct.advertisement && (
                                            <p className="fund bg-[#ebebf0] leading-[16px] inline-block px-[4px] text-[13px] m-0 absolute top-[4px] right-[4px] z-[1] rounded-[2px] text-textPrimary">
                                                Tài trợ
                                            </p>
                                        )}
                                        <div className="image w-full h-full pt-[100%] relative">
                                            <Image
                                                src={dataProduct.thumbnail_url}
                                                alt={dataProduct.name || ''}
                                                width="280"
                                                height="280"
                                                sizes="100vw"
                                                priority
                                                className=" absolute top-0 left-0 w-full h-auto object-contain"
                                            />
                                        </div>
                                        {badges_new && badges_new.find((x: any) => x.code === 'asa_reward_badge') && (
                                            <div className="badge-astra flex flex-row items-center absolute bottom-0 left-0">
                                                <div className="group-astra flex flex-row items-center gap-[2px] pr-[8px] rounded-tr-[12px]">
                                                    <Image
                                                        src={images.astraBonus}
                                                        alt=""
                                                        className=" w-[53px] h-[20px]"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="info py-[8px] mx-[12px] border-b border-solid border-[#ebebf0] min-h-[122px]">
                                        <div className="name overflow-hidden mt-[6px] min-h-[32px]">
                                            <h3 className="font-normal text-[13px] leading-[16px] text-textPrimary m-0 break-words line-clamp-2 ">
                                                {dataProduct.name && dataProduct.name}
                                            </h3>
                                        </div>
                                        <div className="rating mb-[6px] flex items-center text-[13px] leading-[16px] h-[16px]">
                                            {dataProduct.rating_average > 0 && (
                                                <div className="full-rating relative flex">
                                                    <span className=" font-normal text-[13px] leading-[16px] text-textSecondary">
                                                        {dataProduct.rating_average}
                                                    </span>
                                                    {goldStar}
                                                </div>
                                            )}
                                            {dataProduct['quantity_sold'] && (
                                                <>
                                                    <div className="w-[1px] h-[10px] bg-[#ebebf0] ml-[2px] mr-[4px]"></div>
                                                    <div className="sold line-clamp-1 overflow-hidden max-h-[16px] break-all text-textSecondary">
                                                        {dataProduct['quantity_sold'].text}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {dataProduct.discount_rate == 0 ? (
                                            <div className="price-discount text-left text-[16px] leading-[24px] font-medium text-textPrimary  m-0 flex items-center">
                                                {dataProduct.price && convertPrice(dataProduct.price)}{' '}
                                                <sup className="top-[-0.5em]"> ₫</sup>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="price-discount text-left text-[16px] leading-[24px] font-medium text-[#ff424e] m-0 flex items-center">
                                                    <div>
                                                        {dataProduct.price && convertPrice(dataProduct.price)}{' '}
                                                        <sup className="top-[-0.5em]"> ₫</sup>
                                                    </div>
                                                    <div className="discount px-[2px] leading-[16px] text-[13px] font-medium ml-[4px] text-[#ff424e] mt-[3px]">
                                                        -{dataProduct.discount_rate}%
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <div className="badge-under-price text-textSecondary font-normal text-[11px] leading-[12px] min-h-[24px]">
                                            {badges_new &&
                                                badges_new.find((x: any) => x.type == 'asa_reward_html') != null &&
                                                handleAstra(badges_new.find((x: any) => x.type == 'asa_reward_html'))}
                                        </div>
                                        <div className="badge-under-rating flex gap-[4px] flex-wrap mt-[6px] min-h-[17px]">
                                            {badges_new &&
                                                badges_new.find((x: any) => x.type == 'under_rating_text') != null &&
                                                badges_new.map((x: any) => {
                                                    if (x.type == 'under_rating_text') {
                                                        return (
                                                            <div
                                                                key={x.code}
                                                                className="item px-[4px] py-[2px] border-[0.5px] border-solid border-primaryColor rounded-[2px] font-normal text-[11px] leading-[12px] text-primaryColor"
                                                            >
                                                                <span>{x.text}</span>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                        </div>
                                    </div>
                                    <div className="delivery flex px-[12px] py-[8px] gap-[4px]">
                                        <span className=" font-normal text-[13px] leading-[16px] text-textSecondary">
                                            {dataProduct.shippable == true &&
                                            badges_new &&
                                            badges_new.find((x: any) => x.type == 'delivery_info_badge') != null
                                                ? badges_new.find((x: any) => x.type == 'delivery_info_badge').text
                                                : 'Nhận hàng tại cửa hàng'}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(ProductItem);
