import { DataContext } from '@/pages';
import { convertPrice, filterData } from '@/src/Helper/Helper';
import { useContext, useRef, useState } from 'react';
import Button from '../Button';
import { useSelector } from 'react-redux';

function PriceFilterSidebar() {
    const { dataProduct, setDataProduct } = useContext<any>(DataContext);
    const price = dataProduct.filters && dataProduct.filters.find((x: any) => x.query_name == 'price');
    const dataRoot = useSelector((state: any) => state.ProductReducer).data;
    const [priceFrom, setPriceFrom] = useState('0');
    const [priceTo, setPriceTo] = useState('0');
    const [priceIndex, setPriceIndex] = useState(-1);
    const priceRef = useRef<HTMLDivElement>(null);

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
        } else if (index == priceIndex) {
            e.target.style.color = 'var(--text-primary-color)';
            e.target.style.backgroundColor = 'rgb(238 ,238 ,238)';
            e.target.style.border = 'none';
            setPriceIndex(-1);
            setDataProduct(dataRoot);
        }
        setPriceFrom('0');
        setPriceTo('0');
    };

    const handleInputFrom = (value: string, maxPrice: number) => {
        let numb = Number(value);
        if (!Number.isNaN(numb)) {
            if (numb > maxPrice) {
                setPriceFrom(convertPrice(maxPrice));
            } else {
                setPriceFrom(convertPrice(numb));
            }
        }
    };
    const handleInputTo = (value: string, maxPrice: number) => {
        let numb = Number(value);
        if (!Number.isNaN(numb)) {
            if (numb > maxPrice) {
                setPriceTo(convertPrice(maxPrice));
            } else {
                setPriceTo(convertPrice(numb));
            }
        }
    };

    const convertPriceRange = () => {
        priceRef.current?.querySelectorAll('span').forEach((item) => {
            item.style.color = 'var(--text-primary-color)';
            item.style.backgroundColor = 'rgb(238 ,238 ,238)';
            item.style.border = 'none';
        });
        setDataProduct(
            filterData({
                dataFil: dataRoot,
                field: price.query_name,
                _RangeMin: Number(priceFrom.split('.').join('')),
                _RangeMax: Number(priceTo.split('.').join('')),
            }),
        );
    };

    return (
        <>
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
                                            setPriceIndex(index);
                                            handleFilterPrice(e, maxPrice, minPrice, index);
                                        }}
                                        className="bg-[#eeeeee] px-[12px] py-[4px] leading-[16px] inline-block relative text-textPrimary rounded-[12px] mb-[4px] text-[12px]"
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
                            onClick={() => {
                                convertPriceRange();
                            }}
                        >
                            Áp dụng
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PriceFilterSidebar;
