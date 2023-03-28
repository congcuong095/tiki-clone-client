// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import images from '@/src/assets/image';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'John Doe' });
}

interface childList {
    title: string;
    list: {
        id: number;
        content: string;
        link: string;
    }[];
}

export const childListData: childList = {
    title: 'Danh mục sản phẩm',
    list: [
        { id: 1, content: 'Xe máy', link: './' },
        { id: 2, content: 'Xe máy', link: './' },
        { id: 3, content: 'Xe máy', link: './' },
        { id: 4, content: 'Xe máy', link: './' },
        { id: 5, content: 'Xe máy', link: './' },
        { id: 6, content: 'Xe máy', link: './' },
    ],
};

interface services {
    title: string;
    list: {
        id: number;
        content: string;
        image: string;
    }[];
}

export const servicesData: services = {
    title: 'Dịch vụ',
    list: [
        { id: 1, content: 'Giao siêu tốc 2H', image: images.nowShip },
        { id: 2, content: 'Thưởng thêm Astra', image: images.astraSave },
        { id: 3, content: 'Trả góp 0%', image: '' },
    ],
};

export const price: number[] = [300000, 600000, 1000000, 2000000];

export interface selectData {
    title: string;
    list: {
        id: number;
        content: string;
        image?: string;
    }[];
}

export const selectColorData: selectData = {
    title: 'Màu sắc',
    list: [
        { id: 1, content: 'Đen' },
        { id: 2, content: 'Bạc' },
        { id: 3, content: 'Đỏ' },
        { id: 4, content: 'Vàng' },
        { id: 5, content: 'Xám' },
        { id: 6, content: 'Nâu' },
        { id: 7, content: 'Xanh lá' },
        { id: 8, content: 'Trắng' },
        { id: 9, content: 'Hồng' },
        { id: 10, content: 'Tím' },
    ],
};
export const selectBrandData: selectData = {
    title: 'Thương hiệu',
    list: [
        { id: 1, content: '2 bánh' },
        { id: 2, content: '3 bánh' },
        { id: 3, content: '4 bánh' },
        { id: 4, content: '5 bánh' },
        { id: 5, content: '6 bánh' },
        { id: 6, content: '7 bánh' },
        { id: 7, content: '8 bánh' },
        { id: 8, content: '9 bánh' },
        { id: 9, content: '10 bánh' },
        { id: 10, content: '11 bánh' },
    ],
};
