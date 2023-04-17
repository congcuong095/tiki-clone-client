import { DataContext } from '@/pages';
import { RemoveParam, ResetParam, UpdateParam } from '@/src/Store/Actions';
import images from '@/src/assets/image';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopProductArticle from '../Article/TopProductArticle';

function HeaderProduct() {
    const dataProduct = useSelector((state: any) => state.ProductReducer).data;
    const [categorySelect, setCategorySelect] = useState<any>();
    const [dataQueryName, setDataQueryName] = useState('');
    const dataSort = dataProduct && dataProduct.sort_options;
    const dataFilters = dataProduct && dataProduct.filters;
    function filterService(x: any) {
        return x.query_name == 'support_p2h_delivery' || x.query_name == 'seller_asa_cashback';
    }
    function filters(x: any) {
        return (
            x.query_name != 'category' &&
            x.query_name != 'support_p2h_delivery' &&
            x.query_name != 'seller_asa_cashback'
        );
    }
    const dataService = dataFilters && dataFilters.filter(filterService);
    const dataFilter = dataFilters && dataFilters.filter(filters);
    const dataPage = dataProduct && dataProduct.paging;
    const dispatch = useDispatch();

    const param = useSelector((state: any) => state.ParamReducer);

    const handleSort = (query_value: any) => {
        dispatch(
            UpdateParam({
                sort: query_value,
                page: 1,
            }),
        );
    };
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

    const handleService = (value: any, select: boolean) => {
        if (select) {
            const removeParam = [value];
            dispatch(RemoveParam(removeParam));
        } else {
            dispatch(
                UpdateParam({
                    [value]: 1,
                }),
            );
        }
    };

    const handleSortBottom = () => {
        let arr: JSX.Element[] = [];
        let liFunc = (content: any, selected: any, query_value: any, query_name: any) => {
            return (
                <p
                    key={content}
                    onClick={() => handleFilter(selected, query_value, query_name)}
                    className="filter-bottom-item bg-[#dbeeff] border border-solid border-[#1a94ff] cursor-pointer text-[#1a94ff] text-[13px] px-[12px] py-[10px] leading-[20px] relative rounded-[100px] flex mr-[10px] mb-0 h-[32px] items-center"
                >
                    {content}
                    <span className=" flex">
                        <Image src={images.closeIcon} alt="" className=" w-[18px] h-[18px] ml-[11px]" />
                    </span>
                </p>
            );
        };
        dataFilter &&
            dataFilter.forEach((item: any) => {
                if (item.query_name == 'support_installment') {
                    item.values.forEach((x: any) => {
                        if (x.selected) {
                            const li = liFunc(item.display_name, item.selected, item.query_value, item.query_name);
                            arr.push(li);
                        }
                    });
                } else {
                    item.values.forEach((x: any) => {
                        if (x.selected) {
                            const li = liFunc(x.display_value, x.selected, x.query_value, item.query_name);
                            arr.push(li);
                        }
                    });
                }
            });
        return arr;
    };

    const handleFilter = (select: boolean, query_value: any, data: any) => {
        if (categorySelect == undefined) {
            setCategorySelect([query_value]);
        }
        if (categorySelect != undefined && !select) {
            setCategorySelect((prev: any) => [...prev, query_value]);
        }
        if (categorySelect != undefined && select) {
            setCategorySelect(categorySelect.filter((x: any) => x != query_value));
        }

        setDataQueryName(data);
    };

    useEffect(() => {
        if (categorySelect == undefined || categorySelect.length == 0) {
            const removeParam = [dataQueryName];
            dispatch(RemoveParam(removeParam));
        } else {
            dispatch(
                UpdateParam({
                    [dataQueryName]: categorySelect.join(),
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySelect]);

    const handleResetSort = () => {
        dispatch(ResetParam());
        setCategorySelect([]);
        setDataQueryName('');
    };
    return (
        <>
            <div className="wrapper p-0 bg-[#ffffff]">
                <div className="title pt-[12px] pl-[16px]">
                    <h1 className=" inline font-normal text-textPrimary text-[20px]">Ô Tô - Xe Máy - Xe Đạp</h1>
                </div>
                <div className="article">
                    <TopProductArticle />
                </div>
                <div className="filter clear-both">
                    <div className="filter-top flex justify-between border-b border-solid border-[#f2f2f2] pt-[12px]">
                        <div className="sort mr-[10px]">
                            <div className="sort-list inline-block list-none p-0 m-0">
                                {dataSort &&
                                    dataSort.map((item: any) => {
                                        if (item.selected) {
                                            return (
                                                <a
                                                    onClick={(e) => e.preventDefault()}
                                                    key={item.query_value}
                                                    href="./"
                                                    className=" capitalize cursor-pointer font-medium not-italic leading-[20px] tracking-[normal] text-[#0b74e5] inline-block text-[14px] px-[16px] py-[12px] relative
                                    after:content-[''] after:block after:absolute after:border-b-[4px] after:border-solid after:border-[#0b74e5] after:rounded-[2px] after:w-[40px] after:left-[50%] after:translate-x-[-50%]
                                    "
                                                >
                                                    {item.display_value}
                                                </a>
                                            );
                                        }

                                        return (
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSort(item.query_value);
                                                }}
                                                key={item.query_value}
                                                href="./"
                                                className=" capitalize cursor-pointer font-normal not-italic leading-[20px] tracking-[normal] text-[#242424] inline-block text-[14px] px-[16px] py-[12px]
                                        hover:text-[#0b74e5] hover:font-medium hover:relative
                                        hover:after:content-[''] hover:after:block hover:after:absolute hover:after:border-b-[4px] hover:after:border-solid hover:after:border-[#0b74e5] hover:after:rounded-[2px] hover:after:w-[40px] hover:after:left-[50%] hover:after:translate-x-[-50%]
                                    "
                                            >
                                                {item.display_value}
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="page flex h-[36px] mt-[4px] mr-[16px] mb-[8px] items-center">
                            <div className="paging flex items-center gap-[5px]">
                                <span className="current text-[#0b74e5] font-normal text-[14px] leading-[20px]">
                                    {dataPage && dataPage.current_page}
                                </span>
                                /
                                <span className="last current text-textPrimary font-normal text-[14px] leading-[20px]">
                                    {dataPage && dataPage.last_page}
                                </span>
                            </div>
                            <div className="arrow flex items-center gap-0 ml-[12px]">
                                <div className="prev">
                                    {dataPage && dataPage.current_page == 1 ? (
                                        <Image
                                            src={images.prevDisablePage}
                                            alt=""
                                            className=" cursor-not-allowed pointer-events-none w-[22px] h-[22px]"
                                        />
                                    ) : (
                                        <Image
                                            src={images.nextActivePage}
                                            alt=""
                                            className=" cursor-pointer w-[22px] h-[22px] rotate-[180deg]"
                                            onClick={() => handlePrevPage()}
                                        />
                                    )}
                                </div>
                                <div className="next">
                                    {dataPage && dataPage.current_page == dataPage.last_page ? (
                                        <Image
                                            src={images.prevDisablePage}
                                            alt=""
                                            className=" cursor-not-allowed pointer-events-none rotate-[180deg] w-[22px] h-[22px]"
                                        />
                                    ) : (
                                        <Image
                                            src={images.nextActivePage}
                                            alt=""
                                            className=" cursor-pointer w-[22px] h-[22px]"
                                            onClick={() => handleNextPage()}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-bottom py-[12px] pl-[16px] mb-[8px] flex flex-wrap">
                        {dataService &&
                            dataService.map((item: any) => {
                                if (item.values[0].selected) {
                                    return (
                                        <p
                                            key={item.query_name}
                                            onClick={() => handleService(item.query_name, item.values[0].selected)}
                                            className="filter-bottom-item bg-[#dbeeff] border border-solid border-[#1a94ff] cursor-pointer text-[#1a94ff] text-[13px] px-[12px] py-[10px] leading-[20px] relative rounded-[100px] flex mr-[10px] mb-0 h-[32px] items-center"
                                        >
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className=" max-w-[100%] max-h-[12px] w-auto"
                                            />
                                        </p>
                                    );
                                }
                                return (
                                    <p
                                        key={item.query_name}
                                        onClick={() => handleService(item.query_name, item.values[0].selected)}
                                        className="filter-bottom-item bg-[#eeeeee] border border-solid border-[transparent]  cursor-pointer text-[#1a94ff] text-[13px] px-[12px] py-[10px] leading-[20px] relative rounded-[100px] flex mr-[10px] mb-0 h-[32px] items-center"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className=" max-w-[100%] max-h-[12px] w-auto"
                                        />
                                    </p>
                                );
                            })}

                        {handleSortBottom().map((item: any, index: any) => {
                            return <div key={index}>{item}</div>;
                        })}
                        {((handleSortBottom() && handleSortBottom().length > 0) ||
                            (dataService && dataService.some((x: any) => x.values[0].selected == true))) && (
                            <p
                                onClick={() => handleResetSort()}
                                className="filter-bottom-item bg-[#ffffff] border border-solid border-[transparent] cursor-pointer text-[#1a94ff] text-[13px] px-[12px] py-[10px] leading-[20px] relative rounded-[100px] flex mr-[10px] mb-0 h-[32px] items-center font-medium"
                            >
                                <span className=" text-[#1a94ff] flex">Xóa tất cả</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderProduct;
