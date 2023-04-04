import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import images from '../../../assets/image';

function RadioInput({ content, image, idCheck, id, checkRadio }: any) {
    const [check, setCheck] = useState(checkRadio);
    useEffect(() => {
        setCheck(idCheck == id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCheck]);
    return (
        <label
            className="list-item-container mr-[2px] w-full items-start flex justify-start cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                setCheck(true);
            }}
        >
            <input type="radio" className="hidden" />
            <span className="list-item-box mr-[12px] inline-block">
                {check ? (
                    <div className="w-[16px] ">
                        <Image src={images.radioCheckedIcon} alt="" />
                    </div>
                ) : (
                    <div className="w-[16px] ">
                        <Image src={images.radioIcon} alt="" />
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

export default memo(RadioInput);
