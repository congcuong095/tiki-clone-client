import { goldStar, grayStar } from '../assets/svg/icon';

export const convertPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const drawStarRating = (numb: string) => {
    const count = Number(numb);
    const draw = (): any[] => {
        let arr: any[] = [];
        for (let i: number = 1; i <= 5; i++) {
            arr.push(i <= count ? goldStar : grayStar);
        }
        return arr;
    };
    return (
        <p className="rating-star text-[12px] flex items-center m-0">
            {draw().map((item, index) => {
                return <span key={index}>{item}</span>;
            })}
        </p>
    );
};

interface propFilter {
    dataFil: any;
    field?: any;
    ChooseOnly?: any;
    _RangeMin?: number;
    _RangeMax?: number;
    SelectContain?: any;
}

export const filterData = ({
    dataFil,
    field,
    ChooseOnly,
    _RangeMin = dataFil.filters.find((item: any) => item.query_name == field).min,
    _RangeMax = dataFil.filters.find((item: any) => item.query_name == field).max,
    SelectContain,
}: propFilter) => {
    let dataConvert = { ...dataFil };
    if (_RangeMax != undefined && _RangeMin != undefined) {
        dataConvert.data = dataFil['data'].filter(
            (xItem: any) => xItem[field] >= _RangeMin && xItem[field] <= _RangeMax,
        );
        return dataConvert;
    }
    if (ChooseOnly != undefined) {
        dataConvert.data = dataFil['data'].filter((xItem: any) => xItem[field].type == ChooseOnly);

        return dataConvert;
    }
    if (SelectContain != undefined) {
        dataConvert.data = dataFil['data'].filter((xItem: any) =>
            xItem[field].some((y: any) => y.type == SelectContain),
        );

        return dataConvert;
    }
    return dataConvert;
};
