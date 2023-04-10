import Image from 'next/image';
import images from '../../assets/image';

export default function TopProductArticle() {
    return (
        <>
            <div className="wrapper mt-[12px] px-[15px]">
                <div className=" relative block box-border select-none touch-pan-y">
                    <Image
                        src={images.nextImage}
                        className="back-image block rotate-[180deg] cursor-pointer absolute top-[54.5px] opacity-[0.3] z-[1] duration-[0.2s] ease-in-out delay-[0] transition-[opacity] left-0 w-[32px] h-[56px]"
                        alt=""
                    />
                    <div className="list relative overflow-hidden block p-0 mx-[-6px] h-[165px]">
                        <div className="list-wrap w-[5070px] opacity-[1] translate-x-[-1014px] relative left-0 top-0 block mx-auto">
                            <div className="item w-[507px] block float-left h-full min-h-[1px] outline-none">
                                <div className=" mx-[6px]">
                                    <div>
                                        <a href="./" className=" block">
                                            <Image
                                                src={images.dealSlide}
                                                priority
                                                alt=""
                                                className=" block object-contain rounded-[8px] w-[495px] h-[165px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-[507px] block float-left h-full min-h-[1px] outline-none">
                                <div className=" mx-[6px]">
                                    <div>
                                        <a href="./" className=" block">
                                            <Image
                                                src={images.freeshipSlide}
                                                alt=""
                                                className=" block object-contain rounded-[8px] w-[495px] h-[165px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-[507px] block float-left h-full min-h-[1px] outline-none">
                                <div className=" mx-[6px]">
                                    <div>
                                        <a href="./" className=" block">
                                            <Image
                                                src={images.dealSlide}
                                                priority
                                                alt=""
                                                className=" block object-contain rounded-[8px] w-[495px] h-[165px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-[507px] block float-left h-full min-h-[1px] outline-none">
                                <div className=" mx-[6px]">
                                    <div>
                                        <a href="./" className=" block">
                                            <Image
                                                src={images.freeshipSlide}
                                                alt=""
                                                className=" block object-contain rounded-[8px] w-[495px] h-[165px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-[507px] block float-left h-full min-h-[1px] outline-none">
                                <div className=" mx-[6px]">
                                    <div>
                                        <a href="./" className=" block">
                                            <Image
                                                src={images.dealSlide}
                                                priority
                                                alt=""
                                                className=" block object-contain rounded-[8px] w-[495px] h-[165px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={images.nextImage}
                        className="next-image block cursor-pointer absolute top-[54.5px] opacity-[0.3] z-[1] duration-[0.2s] ease-in-out delay-[0] transition-[opacity] right-0 w-[32px] h-[56px]"
                        alt=""
                    />
                    <ul className="list-dot w-full list-none items-center justify-center mt-[16px] p-0 flex">
                        <li>
                            <div className=" relative mx-[2px]">
                                <div className=" bg-[#0000001a] w-[16px] h-[2px] rounded-[4px] cursor-pointer"></div>
                                <div className=" absolute top-[-5px] w-[16px] h-[2px] rounded-[4px] cursor-pointer"></div>
                            </div>
                        </li>
                        <li>
                            <div className=" relative mx-[2px]">
                                <div className=" bg-[#0a68ff] w-[24px] h-[2px] rounded-[4px] cursor-pointer"></div>
                                <div className=" absolute top-[-5px] w-[24px] h-[2px] rounded-[4px] cursor-pointer"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
