import Image from 'next/image';
import images from '@/src/assets/image';
import Search from './Search';

function Header() {
    interface suggestLink {
        name: string;
        link: string;
    }
    const suggestLinkList: suggestLink[] = [];
    for (let i: number = 0; i < 8; i++) {
        const suggestLink = {
            name: 'Xe đạp' + i,
            link: './',
        };
        suggestLinkList.push(suggestLink);
    }
    return (
        <>
            <div className="wrapper relative py-[8px] bg-[#ffffff]">
                <div className="container max-w-[1280px] px-[24px] mx-auto tracking-normal">
                    <div className="main flex h-auto relative z-[2] items-center">
                        <div className="main-left flex items-center flex-1">
                            <div className="logo mr-[48px] basis-[unset] flex items-start shrink-0">
                                <a href="./" className="logo-link w-[57px] h-[40px] block">
                                    <Image src={images.logo} alt="Tiki" className="logo-img w-full h-full" />
                                </a>
                            </div>
                            <div className="search flex-1">
                                <Search />
                            </div>
                        </div>
                        <div className="main-right flex items-center content-end ml-[48px]">
                            <div className="home-btn hover:bg-[#27272a1f] flex items-center justify-center px-[16px] py-[8px] cursor-pointer relative rounded-[8px]">
                                <Image
                                    src={images.homeIcon}
                                    alt="Trang chủ"
                                    className="home-btn-img w-[24px] h-[24px] mr-[4px] rounded-[50%]"
                                />
                                <a
                                    href=""
                                    className="home-btn-link font-normal text-[14px] leading-[150%] text-textSecondary"
                                >
                                    Trang chủ
                                </a>
                            </div>
                            <div className="astra-btn hover:bg-[#27272a1f] flex items-center justify-center px-[16px] py-[8px] cursor-pointer relative rounded-[8px]">
                                <Image
                                    src={images.astraIcon}
                                    alt="Astra"
                                    className="astra-btn-img w-[24px] h-[24px] mr-[4px] rounded-[50%]"
                                />
                                <a
                                    href=""
                                    className="astra-btn-link font-normal text-[14px] leading-[150%] text-textSecondary"
                                >
                                    Astra
                                </a>
                            </div>
                            <div className="account-btn hover:bg-[#27272a1f] flex items-center justify-center px-[16px] py-[8px] cursor-pointer relative rounded-[8px]">
                                <Image
                                    src={images.accountIcon}
                                    alt="Tài khoản"
                                    className="account-btn-img w-[24px] h-[24px] mr-[4px] rounded-[50%]"
                                />
                                <a
                                    href=""
                                    className="account-btn-link font-normal text-[14px] leading-[150%] text-textSecondary"
                                >
                                    Tài khoản
                                </a>
                            </div>
                            <div className="cart-btn relative block">
                                <div
                                    className="cart-btn-wrapper hover:bg-[#0a68ff33] ml-[24px] relative p-0 flex items-center justify-center cursor-pointer rounded-[8px]
                                before:content-[''] before:block before:h-[20px] before:absolute before:left-[-12px] before:border before:border-solid before:border-[#ebebf0]"
                                >
                                    <div className="cart-btn-container  relative flex w-[40px] h-[40px] items-center justify-center">
                                        <Image
                                            src={images.cartIcon}
                                            alt="Giỏ hàng"
                                            className=" cart-btn-img mr-0 rounded-0 w-[24px] h-[24px]"
                                        />
                                        <span className="cart-btn-count text-backgroundPrimary bg-[#ff424f] h-[16px] right-0 top-[-4px] rounded-[8px] inline-block text-center font-bold text-[10px] leading-[150%] absolute px-[4px] py-[0.5px]">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom relative flex justify-between z-[1]">
                        <div className="suggest flex h-[24px] w-[712px] ml-[105px] mt-[8px] items-start flex-wrap overflow-hidden">
                            {suggestLinkList.map((item) => {
                                return (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        className="suggest-link hover:opacity-[0.95] block font-normal text-[14px] leading-[150%] text-textSecondary mr-[12px] whitespace-nowrap"
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>
                        <div className="location max-w-[348px] basis-[348px] mt-[8px]">
                            <div className="location-wrapper flex items-center cursor-pointer justify-end">
                                <Image
                                    src={images.locationIcon}
                                    alt="Location"
                                    className="w-[20px] h-[20px] mr-[4px]"
                                />
                                <h4 className="loaction-title whitespace-nowrap m-0 block text-textSecondary font-normal text-[14px] leading-[150%] pr-[4px]">
                                    Giao đến
                                </h4>
                                <div className="loaction-address underline font-medium text-[14px] leading-[150%] whitespace-nowrap overflow-hidden text-ellipsis text-[#27272a]">
                                    Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
