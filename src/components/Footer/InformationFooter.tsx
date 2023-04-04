import Image from 'next/image';
import LinkFooter from './LinkFooter';
import images from '@/src/assets/image';
import {
    BoCongThuongIcon,
    atmIcon,
    facebookIcon,
    installmentIcon,
    jcbIcon,
    masterCardIcon,
    mocaIcon,
    momoIcon,
    paymentIcon,
    tikiNowIcon,
    tikiPaymentIcon,
    viettelPayIcon,
    visaIcon,
    vnpayIcon,
    youtubeIcon,
    zaloChatIcon,
    zaloIcon,
} from '@/src/assets/svg/icon';

function InfomationFooter() {
    return (
        <>
            <div className="wrapper py-[16px]">
                <div className="container flex justify-between w-[1270px] px-[15px] mx-auto">
                    <div className="block w-[226px]">
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                            Hỗ trợ khách hàng
                        </h4>
                        <p className="hotline mb-[8px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            Hotline:
                            <a href="./" className=" text-textPrimary font-medium no-underline hover:underline">
                                1900-6035
                            </a>
                            <span className="block mb-[8px] text-textSecondary">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <LinkFooter content={'Các câu hỏi thường gặp'} />
                        <LinkFooter content={'Gửi yêu cầu hỗ trợ'} />
                        <LinkFooter content={'Hướng dẫn đặt hàng'} />
                        <LinkFooter content={'Phương thức vận chuyển'} />
                        <LinkFooter content={'Chính sách đổi trả'} />
                        <LinkFooter content={'Hướng dẫn trả góp'} />
                        <LinkFooter content={'Chính sách hàng nhập khẩu'} />
                        <p className="hotline mb-[8px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            Báo lỗi bảo mật:{' '}
                            <a href="./" className=" text-textSecondary no-underline hover:underline">
                                hotro@tiki.vn
                            </a>
                        </p>
                        <p className="hotline mb-[8px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            Hỗ trợ khách hàng:{' '}
                            <a href="./" className=" text-textSecondary no-underline hover:underline">
                                security@tiki.vn
                            </a>
                        </p>
                    </div>
                    <div className="block w-[226px]">
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                            Về Tiki
                        </h4>
                        <LinkFooter content={'Giới thiệu Tiki'} />
                        <LinkFooter content={'Tiki Blog'} />
                        <LinkFooter content={'Tuyển dụng'} />
                        <LinkFooter content={'Chính sách bảo mật thanh toán'} />
                        <LinkFooter content={'Chính sách bảo mật thông tin cá nhân'} />
                        <LinkFooter content={'Chính sách giải quyết khiếu nại'} />
                        <LinkFooter content={'Điều khoản sử dụng'} />
                        <LinkFooter content={'Giới thiệu Tiki Xu'} />
                        <LinkFooter content={'Gửi Astra nhận Xu mua sắm thả ga'} />
                        <LinkFooter content={'Tiếp thị liên kết cùng Tiki'} />
                        <LinkFooter content={'Bán hàng doanh nghiệp'} />
                        <LinkFooter content={'Điều kiện vận chuyển'} />
                    </div>
                    <div className="block w-[226px]">
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                            Hợp tác và liên kết
                        </h4>
                        <LinkFooter content={'Quy chế hoạt động Sàn GDTMĐT'} />
                        <LinkFooter content={'Bán hàng cùng Tiki'} />
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-[24px]">
                            Chứng nhận bởi
                        </h4>
                        <div className="w-[226px] flex items-center flex-wrap gap-[8px]">
                            <a href="./" className="h-[32px]">
                                <Image src={images.boCongThuong} alt="" className="w-[32px] h-[32px]" />
                            </a>
                            <a href="./" className="h-[32px]">
                                {BoCongThuongIcon}
                            </a>
                        </div>
                    </div>
                    <div className="block w-[226px]">
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                            Phương thức thanh toán
                        </h4>
                        <p className="payment mb-[12px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {tikiPaymentIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {visaIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {masterCardIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {jcbIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {atmIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {momoIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {zaloIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {mocaIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {viettelPayIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {vnpayIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {paymentIcon}
                            </span>
                            <span className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat">
                                {installmentIcon}
                            </span>
                        </p>
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-[24px]">
                            Dịch vụ giao hàng
                        </h4>
                        <p className="payment mb-[12px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            <a href="./">{tikiNowIcon}</a>
                        </p>
                    </div>
                    <div className="block w-[226px]">
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                            Kết nối với chúng tôi
                        </h4>
                        <p className="payment mb-[12px] text-[13px] leading-[16px] text-textSecondary mt-0">
                            <a
                                href="./"
                                className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat"
                            >
                                {facebookIcon}
                            </a>
                            <a
                                href="./"
                                className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat"
                            >
                                {youtubeIcon}
                            </a>
                            <a
                                href="./"
                                className=" inline-block mr-[8px] mb-[8px] align-middle w-[32px] h-[32px] bg-no-repeat"
                            >
                                {zaloChatIcon}
                            </a>
                        </p>
                        <h4 className="title text-[16px] leading-[24px] font-medium text-textPrimary mb-[12px] mt-[24px]">
                            Tải ứng dụng trên điện thoại
                        </h4>
                        <div className="flex w-[226px] items-center flex-wrap gap-[8px]">
                            <Image src={images.qrcode} alt="" className="w-[80px] h-[80px]" />
                            <div className="flex flex-col justify-between items-center h-[80px]">
                                <a href="./" className="h-[36px]">
                                    <Image src={images.appstore} alt="" className="w-[122px] h-auto" />
                                </a>
                                <a href="./" className="h-[36px]">
                                    <Image src={images.playstore} alt="" className="w-[122px] h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfomationFooter;
