import { expandIcon, shortenIcon } from '../../assets/svg/icon';
import FilterSelectInput from './FilterSidebar/FilterSelectInput';
import Button from '../Button';
import { UnderSidebarArticle } from '../Article';
import FilterRadioInput from './FilterSidebar/FilterRadioInput';
import { drawStarRating, filterData, convertPrice } from '../../Helper/Helper';
import { useContext, useEffect, useRef, useState } from 'react';
import SelectInput from './FilterSidebar/SelectInput';
import { DataContext } from '@/pages';
import PriceFilterSidebar from './PriceFilterSidebar';
import ServiceFilterSidebar from './ServiceFilterSidebar';
import RatingFilterSidebar from './RatingFilterSidebar';
import CategorySidebar from './CategorySidebar';

function Sidebar() {
    const { dataRoot } = useContext<any>(DataContext);
    const [dataFilters, setDataFilters] = useState<any>(dataRoot.filters && [...dataRoot.filters]);

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
    useEffect(() => {
        setDataFilters(dataRoot.filters);
    }, [dataRoot]);
    return (
        <>
            {dataFilters && (
                <div className="wrapper bg-[#ffffff] w-[200px] rounded-l-[4px]  overflow-hidden">
                    {/* category */}
                    {category && <CategorySidebar category={category} />}
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
                    {service && <ServiceFilterSidebar service={service} />}
                    {/* Đánh giá */}
                    {rating && <RatingFilterSidebar rating={rating} />}

                    {/* Giá */}
                    {price && <PriceFilterSidebar price={price} />}
                    {/* Select */}
                    {arrSelect &&
                        arrSelect.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <FilterSelectInput data={item} />
                                </div>
                            );
                        })}
                    {/* Ship */}
                    {cross_border && <FilterRadioInput data={cross_border} />}
                    <UnderSidebarArticle />
                </div>
            )}
        </>
    );
}

export default Sidebar;