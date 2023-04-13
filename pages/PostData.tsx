import { postAPIFake } from '@/src/Helper/axios';
import { useState } from 'react';

export default function PostData() {
    const [checkCrossBorder, setCheckCrossBorder] = useState<any>([]);
    const [checkColor, setCheckColor] = useState<any>([]);
    const [checkBrand, setCheckBrand] = useState<any>([]);
    const [checkSeller, setCheckSeller] = useState<any>([]);
    const [checkCategory, setCheckCategory] = useState<any>([]);
    const [product, setProduct] = useState<any>('');

    const handlePost = async () => {
        let convertProduct = JSON.parse(product);

        convertProduct.advertisement != null
            ? (convertProduct.advertisement = true)
            : (convertProduct.advertisement = false);

        let data = {
            ...convertProduct,

            category: checkCategory,
            color: checkColor,
            brand: checkBrand,
            sellerBy: checkSeller,
            crossBorder: checkCrossBorder,
        };
        console.log(data);
        await postAPIFake(data).then((res) => console.log(res));
    };

    return (
        <>
            <div className=" p-[20px] columns-5">
                <div className=" col-span-2 h-[300px] overflow-scroll ">
                    <div>Category</div>
                    {category.map((item, index) => {
                        return (
                            <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    onChange={() => setCheckCategory((prev: any) => [...prev, item._id.$oid])}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                >
                                    {`"${item.display_value}"` +
                                        ' lv' +
                                        item.level_category +
                                        ' ' +
                                        item.parentCategory?.$oid}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <div className=" col-span-2 h-[300px] overflow-scroll ">
                    <div>Color</div>
                    {color.map((item, index) => {
                        return (
                            <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    onChange={() => setCheckColor((prev: any) => [...prev, item._id.$oid])}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                >
                                    {item.display_value}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className=" col-span-2 h-[300px] overflow-scroll ">
                    <div>Seller</div>
                    {seller.map((item, index) => {
                        return (
                            <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    onChange={() => setCheckSeller((prev: any) => [...prev, item._id.$oid])}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                >
                                    {item.display_value}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className=" col-span-2 h-[300px] overflow-scroll ">
                    <div>Brand</div>
                    {brand.map((item, index) => {
                        return (
                            <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    onChange={() => setCheckBrand((prev: any) => [...prev, item._id.$oid])}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                >
                                    {item.display_value}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className=" col-span-2 h-[300px] overflow-scroll">
                    <div>Cross Border</div>
                    {crossBorder.map((item, index) => {
                        return (
                            <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    onChange={() => setCheckCrossBorder((prev: any) => [...prev, item._id.$oid])}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="checkboxDefault"
                                >
                                    {item.display_value}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=" p-[20px] flex">
                <div>
                    <div>Product data</div>
                    <textarea
                        name="productData"
                        id=""
                        cols={30}
                        rows={10}
                        className=" border border-solid"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className=" ml-[50px] cursor-pointer w-[92px] h-[38px] p-[4px]  bg-transparent text-primaryColor font-normal text-[14px]  leading-[150%] outline-0
                                         flex items-center justify-center relative border-solid border-primaryColor border"
                    onClick={() => handlePost()}
                >
                    Post
                </button>
            </div>
        </>
    );
}

const crossBorder = [
    {
        _id: {
            $oid: '643613cd853d830ba565af48',
        },
        display_value: 'Hàng nội địa',
        query_value: '0',
    },
    {
        _id: {
            $oid: '643613cd853d830ba565af49',
        },
        display_value: 'Hàng quốc tế',
        query_value: '1',
    },
];

const color = [
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea4',
        },
        display_value: 'Đen',
        query_value: 'Đen',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea5',
        },
        display_value: 'Bạc',
        query_value: 'Bạc',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea6',
        },
        display_value: 'Xanh dương',
        query_value: 'Xanh dương',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea7',
        },
        display_value: 'Đỏ',
        query_value: 'Đỏ',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eaa',
        },
        display_value: 'Nâu',
        query_value: 'Nâu',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eab',
        },
        display_value: 'Xanh lá',
        query_value: 'Xanh lá',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eac',
        },
        display_value: 'Trắng',
        query_value: 'Trắng',
        createdAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ead',
        },
        display_value: 'Kem',
        query_value: 'Kem',
        createdAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eae',
        },
        display_value: 'Cam',
        query_value: 'Cam',
        createdAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eaf',
        },
        display_value: 'Hồng',
        query_value: 'Hồng',
        createdAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0eb0',
        },
        display_value: 'Tím',
        query_value: 'Tím',
        createdAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.883Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea8',
        },
        display_value: 'Vàng',
        query_value: 'Vàng',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358ab6c969971e5fff0ea9',
        },
        display_value: 'Xám',
        query_value: 'Xám',
        createdAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:28:38.882Z',
        },
        __v: 0,
    },
];

const seller = [
    {
        _id: {
            $oid: '64358b08c296d09328535564',
        },
        display_value: 'TLG GOLD',
        query_value: '126349',
        createdAt: {
            $date: '2023-04-11T16:30:00.227Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.227Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535565',
        },
        display_value: 'Chăm sóc xế yêu',
        query_value: '7702',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535566',
        },
        display_value: 'Trung Đức Việt Nam',
        query_value: '10130',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535567',
        },
        display_value: 'NANO PRO',
        query_value: '116752',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556a',
        },
        display_value: 'ChanChan Auto',
        query_value: '269567',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556b',
        },
        display_value: 'Shin Decal 1',
        query_value: '183570',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556c',
        },
        display_value: 'Phụ kiện đồ chơi xe ô tô',
        query_value: '253713',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556d',
        },
        display_value: 'phukienxenet',
        query_value: '132513',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556e',
        },
        display_value: 'Bộ Dây Vòi Tưới Cây Rửa Xe',
        query_value: '193166',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853556f',
        },
        display_value: 'Xedep247',
        query_value: '65512',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535570',
        },
        display_value: 'DODAVIET88',
        query_value: '312670',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535571',
        },
        display_value: 'Vòi Xịt Rửa Xe Tưới Cây',
        query_value: '172774',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535568',
        },
        display_value: 'Phụ Tùng Đồ Chơi Xe Hơi DIQ',
        query_value: '326084',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535573',
        },
        display_value: 'Phụ kiện oto 2car',
        query_value: '141367',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535574',
        },
        display_value: 'PHỤ KIỆN ĐỒ CHƠI XE GNG',
        query_value: '133720',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535575',
        },
        display_value: 'DODAVIET99',
        query_value: '311550',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535576',
        },
        display_value: 'SHINDECAL',
        query_value: '112094',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535569',
        },
        display_value: 'Phụ Kiện ÔTô Hà Nội 024',
        query_value: '28530',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535578',
        },
        display_value: 'TLG Đồ Da Thành Long',
        query_value: '87241',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535579',
        },
        display_value: 'otoalovn',
        query_value: '236058',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557a',
        },
        display_value: 'Thế Giới Phụ Kiện 84',
        query_value: '256358',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557b',
        },
        display_value: 'TAPLO XE HƠI',
        query_value: '306960',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557c',
        },
        display_value: 'ĐỒ DA VIỆT 8888',
        query_value: '321299',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557d',
        },
        display_value: 'Tân Thành Phụ Tùng',
        query_value: '137438',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557e',
        },
        display_value: 'Tem Xe Đẹp',
        query_value: '201865',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535572',
        },
        display_value: 'THU DECAL TEM XE MÁY',
        query_value: '239209',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535580',
        },
        display_value: 'TỔNG KHO TIỆN ÍCH HN',
        query_value: '196585',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535581',
        },
        display_value: 'Kilometre Zero',
        query_value: '5466',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d09328535577',
        },
        display_value: 'AZDECAL',
        query_value: '205754',
        createdAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.228Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358b08c296d0932853557f',
        },
        display_value: 'Gia dụng uy tín',
        query_value: '119091',
        createdAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:30:00.229Z',
        },
        __v: 0,
    },
];

const brand = [
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9b6',
        },
        display_value: 'Macsim',
        query_value: '4642605',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9b7',
        },
        display_value: 'SKF',
        query_value: '282619',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9b8',
        },
        display_value: 'Giant',
        query_value: '112365',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9b9',
        },
        display_value: 'Yamaha',
        query_value: '153444',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9bc',
        },
        display_value: 'Green Networks Group',
        query_value: '777059',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9bd',
        },
        display_value: 'RFK cùng bạn vượt thời gian',
        query_value: '7354857',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9be',
        },
        display_value: 'Bosch',
        query_value: '25229',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9bf',
        },
        display_value: '3M',
        query_value: '63747',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c0',
        },
        display_value: 'SRT',
        query_value: '699097',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c1',
        },
        display_value: 'BANDO',
        query_value: '195471',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c2',
        },
        display_value: 'Sparco',
        query_value: '261009',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c3',
        },
        display_value: 'Royal',
        query_value: '27561',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9ba',
        },
        display_value: 'AZDECAL',
        query_value: '5069237',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c5',
        },
        display_value: 'Mitsuboshi',
        query_value: '201795',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c6',
        },
        display_value: 'Sonax',
        query_value: '181191',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c7',
        },
        display_value: 'Baseus',
        query_value: '21651',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9bb',
        },
        display_value: 'UP',
        query_value: '187541',
        createdAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.664Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c9',
        },
        display_value: 'Soft99',
        query_value: '145594',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9ca',
        },
        display_value: 'Honda',
        query_value: '152855',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9cb',
        },
        display_value: 'Cind',
        query_value: '149055',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9cc',
        },
        display_value: 'Liqui Moly',
        query_value: '154039',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9cd',
        },
        display_value: 'Wurth',
        query_value: '157557',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9ce',
        },
        display_value: 'Mai Lee',
        query_value: '408443',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9cf',
        },
        display_value: 'Ekokemika',
        query_value: '239433',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9d0',
        },
        display_value: 'AREON',
        query_value: '185213',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9d1',
        },
        display_value: 'Denki',
        query_value: '4734315',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c4',
        },
        display_value: 'KATA',
        query_value: '287637',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9d3',
        },
        display_value: 'Medicar',
        query_value: '4970183',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9c8',
        },
        display_value: 'GIVI',
        query_value: '152290',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358a634d151c2ceca5b9d2',
        },
        display_value: 'LS2',
        query_value: '156637',
        createdAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        updatedAt: {
            $date: '2023-04-11T16:27:15.665Z',
        },
        __v: 0,
    },
];

const category = [
    {
        _id: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        query_value: 8597,
        display_value: 'Xe máy',
        url_key: 'xe-may',
        url_path: '/xe-may/c8597',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997af',
        },
        query_value: 6070,
        display_value: 'Xe điện',
        url_key: 'xe-dien',
        url_path: '/xe-dien/c6070',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        query_value: 8431,
        display_value: 'Xe đạp',
        url_key: 'xe-dap',
        url_path: '/xe-dap/c8431',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997b1',
        },
        query_value: 8435,
        display_value: 'Xe Scooter',
        url_key: 'xe-scooter',
        url_path: '/xe-scooter/c8435',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997b4',
        },
        query_value: 17208,
        display_value: 'Dịch vụ, lắp đặt',
        url_key: 'dich-vu-lap-dat',
        url_path: '/dich-vu-lap-dat/c17208',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        query_value: 8595,
        display_value: 'Ô tô',
        url_key: 'o-to',
        url_path: '/o-to/c8595',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        query_value: 24832,
        display_value: 'Phụ kiện - Chăm sóc xe',
        url_key: 'phu-kien-cham-soc-xe',
        url_path: '/phu-kien-cham-soc-xe/c24832',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 1,
        parentCategory: {
            $oid: '6436d0125052219f9a55fba2',
        },
        createdAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.532Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf1',
        },
        query_value: 11878,
        display_value: 'Xe tay ga',
        url_key: 'xe-tay-ga',
        url_path: '/xe-tay-ga/c11878',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf2',
        },
        query_value: 11882,
        display_value: 'Xe số',
        url_key: 'xe-so',
        url_path: '/xe-so/c11882',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf3',
        },
        query_value: 11884,
        display_value: 'Xe côn tay',
        url_key: 'xe-con-tay',
        url_path: '/xe-con-tay/c11884',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.005Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf4',
        },
        query_value: 11888,
        display_value: 'Xe mô tô',
        url_key: 'xe-mo-to',
        url_path: '/xe-mo-to/c11888',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf7',
        },
        query_value: 37598,
        display_value: 'Phiếu mua xe máy',
        url_key: 'phieu-mua-xe-may',
        url_path: '/phieu-mua-xe-may/c37598',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf5',
        },
        query_value: 13100,
        display_value: 'Xe 50cc',
        url_key: 'xe-50cc',
        url_path: '/xe-50cc/c13100',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435804e10143837fde16bf6',
        },
        query_value: 37596,
        display_value: 'Phiếu mua xe mô tô',
        url_key: 'phieu-mua-xe-mo-to',
        url_path: '/phieu-mua-xe-mo-to/c37596',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997ae',
        },
        createdAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:44:15.006Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358155b613ae388b5f223f',
        },
        query_value: 6072,
        display_value: 'Xe máy điện',
        url_key: 'xe-may-dien',
        url_path: '/xe-may-dien/c6072',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997af',
        },
        createdAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358155b613ae388b5f2240',
        },
        query_value: 6071,
        display_value: 'Xe đạp điện',
        url_key: 'xe-dap-dien',
        url_path: '/xe-dap-dien/c6071',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997af',
        },
        createdAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358155b613ae388b5f2241',
        },
        query_value: 11890,
        display_value: 'Xe thăng bằng',
        url_key: 'xe-thang-bang',
        url_path: '/xe-thang-bang/c11890',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997af',
        },
        createdAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '64358155b613ae388b5f2242',
        },
        query_value: 6073,
        display_value: 'Phụ kiện xe điện',
        url_key: 'phu-kien-xe-dien',
        url_path: '/phu-kien-xe-dien/c6073',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997af',
        },
        createdAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:48:37.864Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998ccf',
        },
        query_value: 11892,
        display_value: 'Xe đạp thể thao',
        url_key: 'xe-dap-the-thao',
        url_path: '/xe-dap-the-thao/c11892',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998cd0',
        },
        query_value: 11894,
        display_value: 'Xe đạp thông dụng',
        url_key: 'xe-dap-thong-dung',
        url_path: '/xe-dap-thong-dung/c11894',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998cd1',
        },
        query_value: 11898,
        display_value: 'Xe đạp đua',
        url_key: 'xe-dap-dua',
        url_path: '/xe-dap-dua/c11898',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998cd2',
        },
        query_value: 11896,
        display_value: 'Xe đạp thời trang',
        url_key: 'xe-dap-thoi-trang',
        url_path: '/xe-dap-thoi-trang/c11896',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998cd3',
        },
        query_value: 11900,
        display_value: 'Xe đạp gấp',
        url_key: 'xe-dap-gap',
        url_path: '/xe-dap-gap/c11900',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435818c6168de799f998cd4',
        },
        query_value: 11902,
        display_value: 'Xe đạp trẻ em',
        url_key: 'xe-dap-tre-em',
        url_path: '/xe-dap-tre-em/c11902',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b0',
        },
        createdAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:49:32.393Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a4575',
        },
        query_value: 37606,
        display_value: 'SUV',
        url_key: 'suv',
        url_path: '/suv/c37606',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a4576',
        },
        query_value: 37676,
        display_value: 'CUV',
        url_key: 'cuv',
        url_path: '/cuv/c37676',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a4577',
        },
        query_value: 37608,
        display_value: 'MPV',
        url_key: 'mpv',
        url_path: '/mpv/c37608',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a4578',
        },
        query_value: 37612,
        display_value: 'Bán tải',
        url_key: 'ban-tai',
        url_path: '/ban-tai/c37612',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a457b',
        },
        query_value: 37632,
        display_value: 'Phiếu mua xe ô tô dưới 200 triệu',
        url_key: 'phieu-mua-xe-o-to-duoi-200-trieu',
        url_path: '/phieu-mua-xe-o-to-duoi-200-trieu/c37632',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.881Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.881Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a457c',
        },
        query_value: 37634,
        display_value: 'Các dòng ô tô khác',
        url_key: 'cac-dong-o-to-khac',
        url_path: '/cac-dong-o-to-khac/c37634',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.881Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.881Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a4579',
        },
        query_value: 37622,
        display_value: 'Xe tải',
        url_key: 'xe-tai',
        url_path: '/xe-tai/c37622',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '643581f02f70a2d9545a457a',
        },
        query_value: 37630,
        display_value: 'Phiếu mua xe ô tô từ 200 triệu trở lên',
        url_key: 'phieu-mua-xe-o-to-tu-200-trieu-tro-len',
        url_path: '/phieu-mua-xe-o-to-tu-200-trieu-tro-len/c37630',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b2',
        },
        createdAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:51:12.880Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f8f',
        },
        query_value: 11906,
        display_value: 'Mũ bảo hiểm',
        url_key: 'mu-bao-hiem',
        url_path: '/mu-bao-hiem/c11906',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.317Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.317Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f90',
        },
        query_value: 6061,
        display_value: 'Phụ kiện xe máy',
        url_key: 'phu-kien-xe-may',
        url_path: '/phu-kien-xe-may/c6061',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f91',
        },
        query_value: 45476,
        display_value: 'Phụ tùng xe máy',
        url_key: 'phu-tung-xe-may',
        url_path: '/phu-tung-xe-may/c45476',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f92',
        },
        query_value: 45498,
        display_value: 'Chăm sóc xe máy',
        url_key: 'cham-soc-xe-may',
        url_path: '/cham-soc-xe-may/c45498',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f95',
        },
        query_value: 6045,
        display_value: 'Phụ kiện ô tô',
        url_key: 'phu-kien-o-to',
        url_path: '/phu-kien-o-to/c6045',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f96',
        },
        query_value: 45606,
        display_value: 'Máy rửa xe',
        url_key: 'may-rua-xe',
        url_path: '/may-rua-xe/c45606',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f97',
        },
        query_value: 6052,
        display_value: 'Phụ tùng ô tô',
        url_key: 'phu-tung-o-to',
        url_path: '/phu-tung-o-to/c6052',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f98',
        },
        query_value: 24362,
        display_value: 'Chăm sóc ô tô',
        url_key: 'cham-soc-o-to',
        url_path: '/cham-soc-o-to/c24362',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f93',
        },
        query_value: 45522,
        display_value: 'Đồ bảo hộ đi xe',
        url_key: 'do-bao-ho-di-xe',
        url_path: '/do-bao-ho-di-xe/c45522',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435822b553d552a67aa2f94',
        },
        query_value: 11904,
        display_value: 'Phụ kiện - Đồ nghề xe đạp',
        url_key: 'phu-kien-do-nghe-xe-dap',
        url_path: '/phu-kien-do-nghe-xe-dap/c11904',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b3',
        },
        createdAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:52:11.318Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435826634332be42f42a911',
        },
        query_value: 17224,
        display_value: 'Lắp đặt mâm lốp',
        url_key: 'lap-dat-mam-lop',
        url_path: '/lap-dat-mam-lop/c17224',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b4',
        },
        createdAt: {
            $date: '2023-04-11T15:53:10.753Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:53:10.753Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435826634332be42f42a912',
        },
        query_value: 17226,
        display_value: 'Lắp đặt phụ tùng, phụ kiện',
        url_key: 'lap-dat-phu-tung-phu-kien',
        url_path: '/lap-dat-phu-tung-phu-kien/c17226',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b4',
        },
        createdAt: {
            $date: '2023-04-11T15:53:10.753Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:53:10.753Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435826634332be42f42a913',
        },
        query_value: 23116,
        display_value: 'Dịch vụ sơn xe',
        url_key: 'dich-vu-son-xe',
        url_path: '/dich-vu-son-xe/c23116',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b4',
        },
        createdAt: {
            $date: '2023-04-11T15:53:10.754Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:53:10.754Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6435826634332be42f42a914',
        },
        query_value: 23118,
        display_value: 'Dịch vụ bảo trì, sửa chữa',
        url_key: 'dich-vu-bao-tri-sua-chua',
        url_path: '/dich-vu-bao-tri-sua-chua/c23118',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 2,
        parentCategory: {
            $oid: '64357e867fb7b7c8643997b4',
        },
        createdAt: {
            $date: '2023-04-11T15:53:10.754Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:53:10.754Z',
        },
        __v: 0,
    },
    {
        _id: {
            $oid: '6436d0125052219f9a55fba2',
        },
        query_value: 8594,
        display_value: 'Ô tô xe máy xe đạp',
        url_key: 'o-to-xe-may-xe-dap',
        url_path: '/o-to-xe-may-xe-dap/c8594',
        product: [],
        color: [],
        brand: [],
        sellerBy: [],
        level_category: 0,
        parentCategory: null,
        createdAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        updatedAt: {
            $date: '2023-04-11T15:36:38.531Z',
        },
        __v: 0,
    },
];
