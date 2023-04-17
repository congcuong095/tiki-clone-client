import FilterSelectInput from './FilterSidebar/FilterSelectInput';
import { UnderSidebarArticle } from '../Article/Article';
import FilterRadioInput from './FilterSidebar/FilterRadioInput';
import PriceFilterSidebar from './PriceFilterSidebar';
import ServiceFilterSidebar from './ServiceFilterSidebar';
import RatingFilterSidebar from './RatingFilterSidebar';
import CategorySidebar from './CategorySidebar';
import { useSelector } from 'react-redux';

function Sidebar() {
    const dataProduct = useSelector((state: any) => state.ProductReducer).data;
    const dataFilters = dataProduct && dataProduct.filters && dataProduct.filters.slice();

    let arrSelect;
    let cross_border;
    if (dataFilters != undefined) {
        arrSelect = dataFilters.filter((item: any) => item.multi_select == true);
        cross_border = dataFilters.find((item: any) => item.query_name == 'is_cross_border');
    }

    return (
        <>
            {dataFilters && (
                <div className="wrapper bg-[#ffffff] w-[200px] rounded-l-[4px]  overflow-hidden">
                    {/* category */}
                    <CategorySidebar />
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
                    <ServiceFilterSidebar />
                    {/* Đánh giá */}
                    <RatingFilterSidebar />

                    {/* Giá */}
                    <PriceFilterSidebar />
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
