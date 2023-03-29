import { selectData } from '@/pages/api/hello';
import { useState } from 'react';
import { expandIcon, shortenIcon } from '../assets/svg/icon';
import RadioInput from './RadioInput';

function FilterRadioInput({ ...props }) {
    const data: selectData = props.data;
    const [display, setDisplay] = useState(false);
    const [idCheck, setIdCheck] = useState(-1);
    
    return (
        <>
            <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
                <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                    {data.title}
                </h4>
                <div className="list-main list-none">
                    {data.list.map((item, index) => {
                        if (index >= 5) {
                            return (
                                <label
                                    key={item.id}
                                    className=" flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                    onClick={() => setIdCheck(item.id)}
                                >
                                    <RadioInput
                                        content={item.content}
                                        image={item.image}
                                        id={item.id}
                                        idCheck={idCheck}
                                    />
                                </label>
                            );
                        }
                        return (
                            <label
                                key={item.id}
                                className=" flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                onClick={() => setIdCheck(item.id)}
                            >
                                <RadioInput
                                    content={item.content}
                                    image={item.image}
                                    id={item.id}
                                    idCheck={idCheck}
                                />
                            </label>
                        );
                    })}
                </div>
                {data.list.length > 5 && (
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

export default FilterRadioInput;
