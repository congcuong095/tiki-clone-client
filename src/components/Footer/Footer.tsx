import CategoryFooter from './CategoryFooter';
import InfomationFooter from './InformationFooter';

function Footer() {
    return (
        <>
            <div className="wrapper mt-[16px] text-[13px] leading-[16px] font-normal text-textSecondary bg-[#ffffff]">
                <InfomationFooter />
                <div className="separate content-[''] h-[1px] bg-[#ebebf0] w-[1240px] mx-auto"></div>
                <div className="address py-[16px]">
                    <div className="address-contain flex w-[1270px] px-[15px] mx-auto">
                        <div className="">
                            <p className="small-text block mb-[8px] text-textSecondary text-[13px] leading-[16px] mt-0">
                                Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10,
                                Thành phố Hồ Chí Minh
                            </p>
                            <p className="small-text block mb-[8px] text-textSecondary text-[13px] leading-[16px] mt-0">
                                Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực
                                tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
                            </p>
                            <p className="small-text block mb-[8px] text-textSecondary text-[13px] leading-[16px] mt-0">
                                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ
                                Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022
                            </p>
                            <p className="small-text block text-textSecondary text-[13px] leading-[16px] mt-0 mb-0 ">
                                © 2022 - Bản quyền của Công ty TNHH Ti Ki
                            </p>
                        </div>
                    </div>
                </div>
                <div className="separate content-[''] h-[1px] bg-[#ebebf0] w-[1240px] mx-auto"></div>
                <CategoryFooter />
            </div>
        </>
    );
}

export default Footer;
