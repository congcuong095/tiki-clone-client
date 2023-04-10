import { useEffect, useState } from 'react';
import images from '../assets/image';
import Button from './Button';
import Image from 'next/image';

function Search() {
    const [value, setValue] = useState('');

    useEffect(() => {}, [value]);
    return (
        <div className="search-wrapper w-full flex items-center relative border border-solid border-[#dddde3] rounded-[8px]">
            <Image src={images.searchIcon} alt="search-icon" className="search-icon w-[20px] h-[20px] ml-[18px]" />
            <input
                type="text"
                value={value}
                className="search-input border-0 px-[8px] font-normal text-[14px] leading-[150%] rounded-t-[8px] flex-1 outline-0"
                placeholder="Bạn tìm gì hôm nay"
                onChange={(e) => setValue(e.target.value)}
            />
            <Button className="search-btn hover:bg-[#0a68ff33] after:content-[''] after:block after:absolute after:t-[8px] after:left-0 after:h-[24px] after:border-l after:border-solid after:border-[#dddde3]">
                Tìm kiếm
            </Button>
        </div>
    );
}

export default Search;
