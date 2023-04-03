import { DataContext } from '@/pages';
import { UpdateParam } from '@/src/Store/Actions';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import images from '@/src/assets/image';

function PaginationLong() {
    const { dataProduct } = useContext<any>(DataContext);
    const dataPaging = dataProduct.paging;
    const dispatch = useDispatch();
    const handleChoosePage = (selectPage: number) => {
        dispatch(
            UpdateParam({
                page: selectPage,
            }),
        );
    };
    const drawPage = (from: any, to: any) => {
        let arrPage = [];
        for (let i: number = from; i <= to; i++) {
            if (dataPaging.current_page == i) {
                const liCompActive = (
                    <>
                        <li className="item list-none" onClick={() => handleChoosePage(i)}>
                            <div className="item-link font-medium text-[16px] leading-[36px] text-[#ffffff] no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center bg-[#0b74e5] hover:bg-[#c1e7ff]">
                                {i}
                            </div>
                        </li>
                    </>
                );
                arrPage.push(liCompActive);
            } else {
                const liComp = (
                    <>
                        <li className="item list-none" onClick={() => handleChoosePage(i)}>
                            <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center  hover:bg-[#c1e7ff]">
                                {i}
                            </div>
                        </li>
                    </>
                );
                arrPage.push(liComp);
            }
        }
        return arrPage;
    };
    const handlePageNumber = () => {
        if (dataPaging.last_page > 5) {
            let arrPage: JSX.Element[] = [];
            const ThreeDot = (
                <>
                    <li className="item list-none">
                        <div className="item-link font-medium text-[16px] leading-[36px] text-[#ffffff] no-underline rounded-[4px] w-[40px] h-[36px] text-center flex items-center justify-center">
                            <Image src={images.threeDot} alt="" className="prev-btn w-[20px] last:h-[20px] " />
                        </div>
                    </li>
                </>
            );
            const liCompLast = (
                <>
                    <li className="item list-none" onClick={() => handleChoosePage(dataPaging.last_page)}>
                        <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center  hover:bg-[#c1e7ff]">
                            {dataPaging.last_page}
                        </div>
                    </li>
                </>
            );
            const liCompFirst = (
                <>
                    <li className="item list-none" onClick={() => handleChoosePage(1)}>
                        <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center  hover:bg-[#c1e7ff]">
                            {1}
                        </div>
                    </li>
                </>
            );

            if (dataPaging.current_page <= 3) {
                arrPage = drawPage(1, 5);
                arrPage.push(ThreeDot);
                arrPage.push(liCompLast);
            } else if (dataPaging.current_page >= dataPaging.last_page - 2) {
                arrPage = drawPage(dataPaging.last_page - 4, dataPaging.last_page);
                arrPage.unshift(ThreeDot);
                arrPage.unshift(liCompFirst);
            } else if (dataPaging.current_page == 4) {
                arrPage = drawPage(2, 6);
                arrPage.unshift(liCompFirst);
                arrPage.push(ThreeDot);
                arrPage.push(liCompLast);
            } else if (dataPaging.current_page == dataPaging.last_page - 3) {
                arrPage = drawPage(dataPaging.last_page - 5, dataPaging.last_page - 1);
                arrPage.unshift(ThreeDot);
                arrPage.unshift(liCompFirst);
                arrPage.push(liCompLast);
            } else {
                arrPage = drawPage(dataPaging.current_page - 2, dataPaging.current_page + 2);
                arrPage.unshift(ThreeDot);
                arrPage.unshift(liCompFirst);
                arrPage.push(ThreeDot);
                arrPage.push(liCompLast);
            }

            return arrPage;
        } else {
            return [];
        }
    };
    return (
        <>
            {handlePageNumber().map((item: any, index: any) => {
                return <div key={index}>{item}</div>;
            })}
        </>
    );
}

export default PaginationLong;
