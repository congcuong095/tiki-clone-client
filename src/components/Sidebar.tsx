import { expandIcon, shortenIcon } from '../assets/svg/icon';
import FilterSelectInput from './FilterSidebar/FilterSelectInput';
import Button from './Button';
import { UnderSidebarArticle } from './Article';
import FilterRadioInput from './FilterSidebar/FilterRadioInput';
import { drawStarRating, filterData, handlePrice } from '../Helper/Helper';
import { useContext, useRef, useState } from 'react';
import SelectInput from './FilterSidebar/SelectInput';
import { DataContext } from '@/pages';
import { isNumberObject } from 'util/types';

function Sidebar() {
    const { dataRoot, setDataProduct } = useContext<any>(DataContext);
    const [displayService, setDisplayService] = useState(false);
    const [priceFrom, setPriceFrom] = useState('0');
    const [priceIndex, setPriceIndex] = useState(-1);
    const [priceTo, setPriceTo] = useState('0');
    const dataFilters = dataRoot.filters;

    const priceRef = useRef<HTMLDivElement>(null);

    let category;
    let service;
    let rating;
    let price: any;
    let arrSelect;
    let cross_border;
    if (dataFilters != undefined) {
        category = dataFilters.find((item: any) => item.query_name == 'category');
        service = dataFilters.filter((item: any) => item.type == 'service');
        rating = dataFilters.find((item: any) => item.query_name == 'rating');
        price = dataFilters.find((item: any) => item.query_name == 'price');
        arrSelect = dataFilters.filter((item: any) => item.multi_select == true);
        cross_border = dataFilters.find((item: any) => item.query_name == 'is_cross_border');
    }

    const handleFilterPrice = (e: any, maxPrice: any, minPrice: any, index: any) => {
        if (index != priceIndex) {
            priceRef.current?.querySelectorAll('span').forEach((item) => {
                item.style.color = 'var(--text-primary-color)';
                item.style.backgroundColor = 'rgb(238 ,238 ,238)';
                item.style.border = 'none';
            });
            e.target.style.color = 'rgb(11, 116, 229)';
            e.target.style.backgroundColor = '#f0f8ff';
            e.target.style.border = '1px solid #1a94ff';
            setDataProduct(
                filterData({
                    dataFil: dataRoot,
                    field: price.query_name,
                    _RangeMax: maxPrice,
                    _RangeMin: minPrice,
                }),
            );
        } else {
            e.target.style.color = 'var(--text-primary-color)';
            e.target.style.backgroundColor = 'rgb(238 ,238 ,238)';
            e.target.style.border = 'none';

            setDataProduct(dataRoot);
        }
    };

    const handleInputFrom = (value: string, maxPrice: number) => {
        let numb = Number(value);
        if (!Number.isNaN(numb)) {
            if (numb > maxPrice) {
                setPriceFrom(handlePrice(maxPrice));
            } else {
                setPriceFrom(handlePrice(numb));
            }
        }
    };
    const handleInputTo = (value: string, maxPrice: number) => {
        let numb = Number(value);
        if (!Number.isNaN(numb)) {
            if (numb > maxPrice) {
                setPriceTo(handlePrice(maxPrice));
            } else {
                setPriceTo(handlePrice(numb));
            }
        }
    };
    return (
        <>
            <div className="wrapper bg-[#ffffff] w-[200px] rounded-l-[4px]  overflow-hidden">
                {category && (
                    <div className="list px-[16px] pb-[12px]">
                        <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                            {category.display_name}
                        </h4>
                        <div className="list-main list-none">
                            {category.values.map((item: any) => {
                                return (
                                    <a
                                        href={`${item.url_path}`}
                                        key={item.query_value}
                                        className="text-[13px] pl-0 font-normal text-textPrimary pb-[12px] leading-[16px] flex items-center"
                                    >
                                        {item.display_value}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
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
                {service && (
                    <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                        <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                            Dịch vụ
                        </h4>
                        <div className="list-main list-none">
                            {service.map((item: any, index: number) => {
                                if (index >= 5) {
                                    return (
                                        <label
                                            style={displayService ? { display: 'flex' } : { display: 'none' }}
                                            key={item.query_name}
                                            className="flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                        >
                                            <SelectInput content={item.display_name} image={item.icon} />
                                        </label>
                                    );
                                }
                                return (
                                    <label
                                        key={item.query_name}
                                        className="flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                    >
                                        <SelectInput content={item.display_name} image={item.icon} />
                                    </label>
                                );
                            })}
                        </div>
                        {service.length > 5 && (
                            <div
                                className="toggle text-[13px] font-medium flex items-center leading-[16px] text-primaryColor cursor-pointer"
                                onClick={() => setDisplayService(!displayService)}
                            >
                                {displayService ? 'Thu gọn' : 'Xem thêm'}
                                {displayService ? shortenIcon : expandIcon}
                            </div>
                        )}
                    </div>
                )}
                {/* Đánh giá */}
                {rating && (
                    <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                        <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                            {rating.display_name}
                        </h4>
                        <div className="rating-list">
                            {rating.values.map((item: any) => {
                                return (
                                    <div
                                        key={item.query_value}
                                        className="rating-item  flex py-[5px] items-center cursor-pointer"
                                    >
                                        {drawStarRating(item.query_value)}

                                        <span className="rating-content ml-[3px] text-[14px] font-normal text-[#242424]">
                                            {item.display_value}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Giá */}
                {price && (
                    <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0] cursor-pointer">
                        <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                            {price.display_name + ' (Ko send API)'}
                        </h4>
                        <div className="list-main list-none" ref={priceRef}>
                            {price.values.map((item: any, index: any) => {
                                let maxPrice = item['query_value'].split(',')[1];
                                let minPrice = item['query_value'].split(',')[0];

                                return (
                                    <div className="list-item cursor-pointer" key={item.query_value}>
                                        <span
                                            onClick={(e) => {
                                                // e.preventDefault();
                                                setPriceIndex(index);
                                                handleFilterPrice(e, maxPrice, minPrice, index);
                                            }}
                                            className="bg-[#eeeeee] px-[12px] py-[4px] leading-[16px] inline-block relative text-textPrimary rounded-[12px] mb-[4px] text-[13px]"
                                        >
                                            {item.display_value}
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
                                    className="flex-1 w-[77px] h-[30px] px-[8px] bg-[#ffffff] rounded-[4px] text-left border border-solid border-[#b8b8b8] outline-none text-[13px]"
                                    value={priceFrom || '0'}
                                    onChange={(e) => {
                                        let convert = e.target.value.split('.').join('');
                                        handleInputFrom(convert, price.max);
                                    }}
                                />
                                <span className="w-[7px] h-[1px] text-[0] inline-block bg-[#9a9a9a] mx-[4px] align-middle">
                                    -
                                </span>
                                <input
                                    pattern="[0-9]*"
                                    placeholder="Giá đến"
                                    className="flex-1 w-[77px] h-[30px] px-[8px] bg-[#ffffff] rounded-[4px] text-left border border-solid border-[#b8b8b8] outline-none text-[13px]"
                                    value={priceTo || '0'}
                                    onChange={(e) => {
                                        let convert = e.target.value.split('.').join('');
                                        handleInputTo(convert, price.max);
                                    }}
                                />
                            </div>
                            <Button
                                className="price-range-title border-[1px] border-solid border-primaryColor px-[15px] py-[5px] w-full mt-[8px]  text-[13px] h-auto leading-none rounded-[8px] cursor-pointer"
                                onClick={(e: any) => {
                                    setDataProduct(
                                        filterData({
                                            dataFil: dataRoot,
                                            field: price.query_name,
                                            _RangeMin: Number(priceFrom.split('.').join('')),
                                            _RangeMax: Number(priceTo.split('.').join('')),
                                        }),
                                    );
                                }}
                            >
                                Áp dụng
                            </Button>
                        </div>
                    </div>
                )}
                {/* Select */}
                {arrSelect &&
                    arrSelect.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <FilterSelectInput data={item} />
                            </div>
                        );
                    })}
                {cross_border && <FilterRadioInput data={cross_border} />}
                <UnderSidebarArticle />
            </div>
        </>
    );
}

export default Sidebar;
