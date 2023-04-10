import { UpdateParam } from '@/src/Store/Actions';
import { useDispatch, useSelector } from 'react-redux';

function CategorySidebar() {
    const dataProduct = useSelector((state: any) => state.ProductReducer).data;
    const category = dataProduct.filters && dataProduct.filters.find((x: any) => x.query_name == 'category');
    const dispatch = useDispatch();

    const handleCategory = (query_name: any, url_key: any, query_value: number) => {
        const newParam = {
            [query_name]: query_value,
            urlKey: url_key,
        };

        dispatch(UpdateParam(newParam));
    };
    return (
        <>
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategory(category.query_name, item.url_key, item.query_value);
                                    }}
                                >
                                    {item.display_value}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default CategorySidebar;
