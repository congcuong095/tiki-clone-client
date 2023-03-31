import { checkedIcon, checkIcon } from '../../assets/svg/icon';
import Image from 'next/image';
import { useState } from 'react';

function SelectInput({ content, image }: any) {
    const [check, setCheck] = useState(false);

    return (
        <label
            className="list-item-container mr-[2px] w-full  flex justify-start items-center cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                setCheck(!check);
            }}
        >
            <input type="checkbox" className="hidden" defaultValue="" />
            <span className="list-item-box mr-[12px] inline-block">
                {check ? <div className="w-[16px] ">{checkedIcon}</div> : <div className="w-[16px] ">{checkIcon}</div>}
            </span>
            <div className="list-item-content inline-flex items-center min-h-[16px] flex-1 flex-wrap gap-[4px]">
                {image && (
                    <Image
                        src={image}
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="list-item-img max-h-[10px] w-auto"
                    />
                )}
                <span className="list-item-content relative">{content}</span>
            </div>
        </label>
    );
}

export default SelectInput;
