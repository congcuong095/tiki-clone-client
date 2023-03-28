import { selectData } from '@/pages/api/hello';
import { useState } from 'react';
import { checkedIcon, checkIcon, expandIcon, shortenIcon } from '../assets/svg/icon';

function Filter({ ...props }) {
    const data: selectData = props.data;
    const [display, setDisplay] = useState(false);
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
                                    style={display ? { display: 'flex' } : { display: 'none' }}
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
                                            <span className="list-item-content relative">{item.content}</span>
                                        </div>
                                    </label>
                                </label>
                            );
                        }
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
                                        <span className="list-item-content relative">{item.content}</span>
                                    </div>
                                </label>
                            </label>
                        );
                    })}
                </div>
                <div
                    className="toggle text-[13px] font-medium flex items-center leading-[16px] text-primaryColor cursor-pointer"
                    onClick={() => setDisplay(!display)}
                >
                    {display ? 'Thu gọn' : 'Xem thêm'}
                    {display ? shortenIcon : expandIcon}
                </div>
            </div>
        </>
    );
}

export default Filter;
