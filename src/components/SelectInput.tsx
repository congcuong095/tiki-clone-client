import { checkedIcon, checkIcon } from '../assets/svg/icon';
import Image from 'next/image';
import { useState } from 'react';
import images from '../assets/image';

function SelectInput({ content, image , title}: any) {
    const [check, setCheck] = useState(false);
    
    return (
        <label
            className="list-item-container mr-[2px] w-full items-start flex justify-start items-center cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                setCheck(!check);
            }}
        >
            <input type="checkbox" className="hidden" defaultValue=''/>
            <span className="list-item-box mr-[12px] inline-block">
                {check ? (
                    <div className="w-[16px] ">
                        {title == 'Giao hàng' ? <Image src={images.radioCheckedIcon} alt="" /> : checkedIcon}
                    </div>
                ) : (
                    <div className="w-[16px] ">
                        {title == 'Giao hàng' ? <Image src={images.radioIcon} alt="" /> : checkIcon}
                    </div>
                )}
            </span>
            <div className="list-item-content inline-flex items-center min-h-[16px] flex-1 flex-wrap gap-[4px]">
                {image && <Image src={image} alt="" className="list-item-img max-h-[10px] w-auto" />}
                <span className="list-item-content relative">{content}</span>
            </div>
        </label>
    );
}

export default SelectInput;
