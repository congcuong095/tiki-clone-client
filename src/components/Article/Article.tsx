import Image from 'next/image';
import images from '../../assets/image';

export function UnderHeaderArticle() {
    return (
        <>
            <div className="wrapper bg-[#FFE880] relative z-[1] flex flex-row justify-center items-center px-[16px] py-[8px] gap-[4px] bg-white border-t border-b border-solid border-[#ebebf0]">
                <a href="./" className="link flex justify-center items-center">
                    <Image src={images.freeshipIcon} alt="" className="object-contain w-[81px] h-[12px] mb-[4px]" />
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
export function UnderSidebarArticle() {
    return (
        <>
            <div className="padding-top h-[8px] bg-backgroundSecondary"></div>
            <div className="main bg-backgroundSecondary">
                <a
                    href="./"
                    className="main-link w-full pt-[200%] relative cursor-pointer rounded-[8px] bg-[#ffffff] block overflow-hidden"
                >
                    <div className="container absolute inset-0 flex flex-col">
                        <div className="image relative h-[calc(100%-215px)]">
                            <div className="image-bg bg-cover bg-no-repeat  w-full h-full bg-center blur-[50px]">
                                {images.articleSidebar && (
                                    <Image
                                        src={images.articleSidebar}
                                        alt=""
                                        className="image-img block w-full h-full "
                                    />
                                )}
                            </div>
                            {images.articleSidebar && (
                                <Image
                                    src={images.articleSidebar}
                                    alt=""
                                    priority={true}
                                    className="image-img block w-[122px] h-[122px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[4px] border border-solid border-[#ebebf0]"
                                />
                            )}
                        </div>
                        <div className="content p-[16px] relative z-[2] bg-[#ffffff] rounded-b-[8px] flex-1 text-center flex flex-col">
                            <div className="content-header text-[18px] leading-[27px] font-medium text-textPrimary overflow-hidden">
                                OSTsome - Công Nghệ Chính Hãng
                            </div>
                            <div className="content-fund mt-[17px] text-[13px] leading-[18px] text-textSecondary shrink-0">
                                Tài trợ bởi
                            </div>
                            <div className="content-brand text-[13px] leading-[18px] text-[#27272a] overflow-hidden">
                                OST store
                            </div>
                            <div className="content-action mt-auto">
                                <div className="content-action-content mb-[8px] text-[14px] leading-[20px] font-medium text-primaryColor text-center">
                                    Giảm giá 20K
                                </div>
                                <div className="content-action-btn py-[5.5px] px-[12px] inline-flex items-center justify-center bg-primaryColor rounded-[4px] text-[14px] leading-[20px] font-medium text-[#ffffff]">
                                    Xem thêm
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
