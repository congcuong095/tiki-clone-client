import { DataContext } from '@/pages';
import { drawStarRating } from '@/src/Helper/Helper';
import { RemoveParam, UpdateParam } from '@/src/Store/Actions';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

function RatingFilterSidebar() {
    const { dataProduct } = useContext<any>(DataContext);
    const rating = dataProduct.filters.find((x: any) => x.query_name == 'rating');
    const dispatch = useDispatch();

    const handleRating = (query_name: any, select: boolean, query_value: number) => {
        if (select) {
            // delete newParam['param'][query_name];
            const newParam = [query_name];

            dispatch(RemoveParam(newParam));
        } else {
            // newParam['param'][query_name] = query_value;

            dispatch(
                UpdateParam({
                    [query_name]: query_value,
                }),
            );
        }
    };

    return (
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
                            onClick={() => handleRating(rating.query_name, item.selected, item.query_value)}
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
    );
}

export default RatingFilterSidebar;
