import Image from 'next/image';
import images from '@/src/assets/image';

export function UnderHeaderArticle() {
    return (
        <>
            <div className="wrapper bg-[#FFE880] relative z-[1] flex flex-row justify-center items-center px-[16px] py-[8px] gap-[4px] bg-white border-t border-b border-solid border-[#ebebf0]">
                <a href="./" className="link flex justify-center items-center">
                    <Image src={images.freeshipIcon} alt="" className="object-contain w-[81px] h-[12px]" />
                    <div className="title hover:opacity-[0.95] text-[#27272A] text-[14px] leading-[150%] pl-[4px]">
                        <strong>mọi đơn từ 149K. </strong>
                        Áp dụng cho cả TikiNOW 2h
                    </div>
                    <Image src={images.nextIcon} alt="" className=" ml-[4px] w-[7px] h-[11px]" />
                </a>
            </div>
        </>
    );
}
