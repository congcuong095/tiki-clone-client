import { childListData, price, selectBrandData, selectColorData, servicesData } from '@/pages/api/hello';
import { checkedIcon, checkIcon, goldStar, grayStar } from '../assets/svg/icon';
import Image from 'next/image';
import { filterTitle, filterTypeOfList } from '../Entity/enum';

import Filter from './Filter';
import Button from './Button';

function Sidebar() {
    const handlePrice = (price: number): string => {
        let newPrice: string = '';
        while (price % 1000 == 0) {
            price = price / 1000;
            newPrice += '.000';
        }
        return (newPrice = price + newPrice);
    };
    return (
        <>
            <div className="wrapper bg-[#ffffff] w-[200px] round-t-[4px] rounded-b-[4px] overflow-hidden">
                <div className="list px-[16px] pb-[12px]">
                    <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                        {childListData.title}
                    </h4>
                    <div className="list-main list-none">
                        {childListData.list.map((item) => {
                            return (
                                <a
                                    href={item.link}
                                    key={item.id}
                                    className="list-item text-[13px] pl-0 font-normal text-textPrimary pb-[12px] leading-[16px] flex items-center"
                                >
                                    {item.content}
                                </a>
                            );
                        })}
                    </div>
                </div>
                {/* Địa chỉ */}
                <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                    <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                        Địa chỉ nhận hàng
                    </h4>
                    <div className="list-main underline text-[13px] leading-[16px] font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-[4px]">
                        Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
                    </div>
                    <div className="list-change text-primaryColor text-[13px] leading-[16px] font-medium cursor-pointer">
                        Đổi địa chỉ
                    </div>
                </div>
                {/* Dich vu */}
                <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                    <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                        {servicesData.title}
                    </h4>
                    <div className="list-main list-none">
                        {servicesData.list.map((item) => {
                            return (
                                <label
                                    key={item.id}
                                    className="list-item  flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                >
                                    <label className="list-item-container mr-[2px] w-full items-start flex justify-start items-center">
                                        <input type="checkbox" className="hidden" />
                                        <span className="list-item-box mr-[12px] inline-block">
                                            <div className="w-[16px] ">{checkIcon}</div>
                                            <div className="hidden w-[16px] ">{checkedIcon}</div>
                                        </span>
                                        <div className="list-item-content inline-flex items-center min-h-[16px] flex-1 flex-wrap gap-[4px]">
                                            <Image
                                                src={item.image}
                                                alt=""
                                                className="list-item-img max-h-[10px] w-auto"
                                            />
                                            <span className="list-item-content relative">{item.content}</span>
                                        </div>
                                    </label>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Đánh giá */}
                <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                    <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                        Đánh giá
                    </h4>
                    <div className="rating-list">
                        <div className="rating-item  flex py-[5px] items-center">
                            <p className="rating-star text-[12px] flex items-center m-0">
                                {goldStar}
                                {goldStar}
                                {goldStar}
                                {goldStar}
                                {goldStar}
                            </p>
                            <span className="rating-content ml-[3px] text-[14px] font-normal text-[#242424]">
                                từ 5 sao
                            </span>
                        </div>
                        <div className="rating-item  flex py-[5px] items-center">
                            <p className="rating-star text-[12px] flex items-center m-0">
                                {goldStar}
                                {goldStar}
                                {goldStar}
                                {goldStar}
                                {grayStar}
                            </p>
                            <span className="rating-content ml-[3px] text-[14px] font-normal text-[#242424]">
                                từ 4 sao
                            </span>
                        </div>
                        <div className="rating-item  flex py-[5px] items-center">
                            <p className="rating-star text-[12px] flex items-center m-0">
                                {goldStar}
                                {goldStar}
                                {goldStar}
                                {grayStar}
                                {grayStar}
                            </p>
                            <span className="rating-content ml-[3px] text-[14px] font-normal text-[#242424]">
                                từ 3 sao
                            </span>
                        </div>
                    </div>
                </div>

                {/* Giá */}
                <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0] cursor-pointer">
                    <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                        Giá
                    </h4>
                    <div className="list-main list-none">
                        {price.map((item, index) => {
                            if (item == price[0]) {
                                return (
                                    <div className="list-item cursor-pointer" key={item}>
                                        <span className="bg-[#eeeeee] px-[12px] py-[4px] leading-[16px] inline-block relative text-textPrimary rounded-[12px] mb-[4px] text-[13px]">
                                            Dưới {handlePrice(item)}
                                        </span>
                                    </div>
                                );
                            }

                            if (item == price[price.length - 1]) {
                                return (
                                    <div className="list-item cursor-pointer" key={item}>
                                        <span className="bg-[#eeeeee] px-[12px] py-[4px] leading-[16px] inline-block relative text-textPrimary rounded-[12px] mb-[4px] text-[13px]">
                                            Trên {handlePrice(item)}
                                        </span>
                                    </div>
                                );
                            }

                            return (
                                <div className="list-item cursor-pointer" key={item}>
                                    <span className="bg-[#eeeeee] px-[12px] py-[4px] leading-[16px] inline-block relative text-textPrimary rounded-[12px] mb-[4px] text-[13px]">
                                        {handlePrice(item)} -&gt; {handlePrice(price[index + 1])}{' '}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="price-range">
                        <div className="price-range-title text-textPrimary text-[13px] pb-[8px] mt-4px]">
                            Chọn khoảng giá
                        </div>
                        <div className="price-range-input flex items-center">
                            <input
                                pattern="[0-9]*"
                                placeholder="Giá từ"
                                value="0"
                                className="flex-1 w-[77px] h-[30px] px-[8px] bg-[#ffffff] rounded-[4px] text-left border border-solid border-[#b8b8b8] outline-none text-[13px]"
                            />
                            <span className="w-[7px] h-[1px] text-[0] inline-block bg-[#9a9a9a] mx-[4px] align-middle">
                                -
                            </span>
                            <input
                                pattern="[0-9]*"
                                placeholder="Giá đến"
                                value="0"
                                className="flex-1 w-[77px] h-[30px] px-[8px] bg-[#ffffff] rounded-[4px] text-left border border-solid border-[#b8b8b8] outline-none text-[13px]"
                            />
                        </div>
                        <Button className="price-range-title border-[1px] border-solid border-primaryColor px-[15px] py-[5px] w-full mt-[8px] rounded-[4px] text-[13px] h-auto leading-none rounded-tr-[4px] rounded-br-[4px]">
                            Áp dụng
                        </Button>
                    </div>
                </div>
                <Filter data={selectColorData} />
                <Filter data={selectBrandData} />
            </div>
        </>
    );
}

export default Sidebar;
