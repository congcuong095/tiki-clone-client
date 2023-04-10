import { UpdateParam } from '@/src/Store/Actions';
import { useDispatch, useSelector } from 'react-redux';

function PaginationShort() {
    const dataProduct = useSelector((state: any) => state.ProductReducer).data;
    const dataPaging = dataProduct.paging;
    const dispatch = useDispatch();
    const handleChoosePage = (selectPage: number) => {
        dispatch(
            UpdateParam({
                page: selectPage,
            }),
        );
    };
    const handlePageNumber = () => {
        if (dataPaging.last_page <= 5) {
            let arrPage = [];

            for (let i: number = 1; i <= dataPaging.last_page; i++) {
                if (dataPaging.current_page == i) {
                    const liCompActive = (
                        <>
                            <li className="item list-none" onClick={() => handleChoosePage(i)}>
                                <div className="item-link font-medium text-[16px] leading-[36px] text-[#ffffff] no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center bg-[#0b74e5]  hover:bg-[#c1e7ff]">
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

export default PaginationShort;
