import { checkedIcon, checkIcon } from '../../../assets/svg/icon';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

function SelectInput({ content, image, selected }: any) {
    const [check, setCheck] = useState(selected);
    useEffect(() => {
        setCheck(selected);
    }, [selected]);

    return (
        <label
            className="list-item-container mr-[2px] w-full  flex justify-start items-center cursor-pointer"
            onClick={() => {
                setCheck(!check);
            }}
        >
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

export default memo(SelectInput);
