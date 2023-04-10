import { DataContext } from '@/pages';
import images from '@/src/assets/image';
import { useContext } from 'react';
import Image from 'next/image';
import PaginationShort from './PaginationShort';
import PaginationLong from './PaginationLong';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateParam } from '@/src/Store/Actions';

function Pagination() {
    const dataProduct = useSelector((state: any) => state.ProductReducer).data;
    const dataPaging = dataProduct.paging;
    const param = useSelector((state: any) => state.ParamReducer);
    const dispatch = useDispatch();
    const handlePrevPage = () => {
        dispatch(
            UpdateParam({
                page: param.page - 1,
            }),
        );
    };

    const handleNextPage = () => {
        dispatch(
            UpdateParam({
                page: param.page + 1,
            }),
        );
    };

    return (
        <>
            <div className="wrapper text-center">
                <ul className="container p-0 mt-[77px] mb-[16px] flex gap-[16px] justify-center">
                    {/* prev btn */}
                    <li className="item list-none">
                        {dataPaging && dataPaging.current_page == 1 ? (
                            <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center flex items-center justify-center ">
                                <Image
                                    src={images.prevDisablePage}
                                    alt=""
                                    className="prev-btn w-[20px] last:h-[20px]"
                                    onClick={(e) => e.preventDefault()}
                                />
                            </div>
                        ) : (
                            <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center  hover:bg-[#c1e7ff]">
                                <Image
                                    src={images.nextActivePage}
                                    alt=""
                                    className="prev-btn w-[20px] h-[20px] rotate-[180deg]  hover:bg-[#c1e7ff]"
                                    onClick={() => handlePrevPage()}
                                />
                            </div>
                        )}
                    </li>
                    {dataPaging && dataPaging.last_page <= 5 ? (
                        <>
                            <PaginationShort />
                        </>
                    ) : (
                        <>
                            <PaginationLong />
                        </>
                    )}
                    {/* next btn */}
                    <li className="item list-none">
                        {dataPaging && dataPaging.current_page == dataPaging.last_page ? (
                            <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center flex items-center justify-center ">
                                <Image
                                    src={images.prevDisablePage}
                                    alt=""
                                    className="prev-btn w-[20px] last:h-[20px] rotate-[180deg]"
                                    onClick={(e) => e.preventDefault()}
                                />
                            </div>
                        ) : (
                            <div className="item-link font-normal text-[16px] leading-[36px] text-textSecondary no-underline rounded-[4px] w-[40px] h-[36px] text-center cursor-pointer flex items-center justify-center  hover:bg-[#c1e7ff]">
                                <Image
                                    src={images.nextActivePage}
                                    alt=""
                                    className="prev-btn w-[20px] h-[20px]   hover:bg-[#c1e7ff]"
                                    onClick={() => handleNextPage()}
                                />
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Pagination;
