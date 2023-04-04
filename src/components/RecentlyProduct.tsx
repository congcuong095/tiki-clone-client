function RecentlyProduct() {
    return (
        <>
            <div className="wrapper my-[16px] bg-[#ffffff] rounded-[4px]">
                <h2 className="title text-[#333333] text-[20px] font-normal leading-[32px] px-[16px] py-[8px] capitalize flex justify-between items-center m-0">
                    Sản phẩm đã xem
                </h2>
                <div className="list flex justify-center items-center bg-[#ffffff] rounded-[4px] overflow-hidden min-h-[293px]">
                    Không có sản phẩm nào
                </div>
            </div>
        </>
    );
}

export default RecentlyProduct;
