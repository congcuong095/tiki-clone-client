function CategoryFooter() {
    const fakeLink = (): string[] => {
        let arr: string[] = [];
        for (let i: number = 0; i <= 11; i++) {
            let aComp = `Thời Trang Cho Mẹ Và Bé ${i}`;
            arr.push(aComp);
        }
        return arr;
    };
    return (
        <>
            <div className=" w-[1270px] px-[15px] mx-auto">
                <div className=" pt-[16px]">
                    <div className=" text-[16px] leaading-[24px] font-medium text-textPrimary mb-[12px] mt-0">
                        Danh Mục Sản Phẩm
                    </div>
                    <div className=" grid grid-cols-5 gap-x-[20px]">
                        <div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className=" mb-[16px]">
                                <div className=" text-[14px] leading-[20px] font-medium text-textPrimary mb-[4px] mt-0">
                                    <a href="./" className=" text-textSecondary no-underline hover:underline">
                                        Đồ Chơi - Mẹ & Bé
                                    </a>
                                </div>
                                <p className=" mb-0 text-[13px] leading-[16px] text-textSecondary">
                                    {fakeLink().map((item: string, index: number) => {
                                        if (index == fakeLink().length) {
                                            return (
                                                <span key={index}>
                                                    <a
                                                        href="./"
                                                        className=" text-textSecondary no-underline hover:underline"
                                                    >
                                                        {item}
                                                    </a>
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={index}>
                                                <a
                                                    href="./"
                                                    className=" text-textSecondary no-underline hover:underline"
                                                >
                                                    {item}
                                                </a>
                                                &nbsp;/&nbsp;
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryFooter;
