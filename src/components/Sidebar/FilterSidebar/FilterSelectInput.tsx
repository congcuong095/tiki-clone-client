import { memo, useEffect, useState } from 'react';
import { expandIcon, shortenIcon } from '../../../assets/svg/icon';
import SelectInput from './SelectInput';
import { useDispatch } from 'react-redux';
import { RemoveParam, UpdateParam } from '@/src/Store/Actions';

function FilterSelectInput({ data }: any) {
    const [display, setDisplay] = useState(false);
    const [categorySelect, setCategorySelect] = useState<any>();

    const dispatch = useDispatch();

    const handleFilter = (select: boolean, query_value: any) => {
        if (categorySelect == undefined) {
            setCategorySelect([query_value]);
        }
        if (categorySelect != undefined && !select) {
            setCategorySelect((prev: any) => [...prev, query_value]);
        }
        if (categorySelect != undefined && select) {
            setCategorySelect(categorySelect.filter((x: any) => x != query_value));
        }
    };

    useEffect(() => {
        if (categorySelect == undefined || categorySelect.length == 0) {
            const removeParam = [data.query_name];
            dispatch(RemoveParam(removeParam));
        } else {
            dispatch(
                UpdateParam({
                    [data.query_name]: categorySelect.join(),
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySelect]);

    return (
        <>
            <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                    {data.display_name}
                </h4>
                <div className="list-main list-none">
                    {data.values.map((item: any, index: any) => {
                        if (index > data.collapsed) {
                            return (
                                <label
                                    style={display ? { display: 'flex' } : { display: 'none' }}
                                    key={item.query_value}
                                    className=" flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                    onClick={() => handleFilter(item.selected, item.query_value)}
                                >
                                    <SelectInput
                                        content={item.display_value}
                                        image={item.image}
                                        selected={item.selected}
                                    />
                                </label>
                            );
                        }
                        return (
                            <label
                                key={item.query_value}
                                className=" flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                onClick={() => handleFilter(item.selected, item.query_value)}
                            >
                                <SelectInput content={item.display_value} image={item.image} selected={item.selected} />
                            </label>
                        );
                    })}
                </div>
                {data.values.length > 5 && (
                    <div
                        className="toggle text-[13px] font-medium flex items-center leading-[16px] text-primaryColor cursor-pointer"
                        onClick={() => setDisplay(!display)}
                    >
                        {display ? 'Thu gọn' : 'Xem thêm'}
                        {display ? shortenIcon : expandIcon}
                    </div>
                )}
            </div>
        </>
    );
}

export default memo(FilterSelectInput);
