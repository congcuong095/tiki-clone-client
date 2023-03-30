import { goldStar, grayStar } from '../assets/svg/icon';

export const handlePrice = (price: number): string => {
    let newPrice: string = '';
    while (price % 1000 == 0) {
        price = price / 1000;
        newPrice += '.000';
    }
    return (newPrice = price + newPrice);
};

export const drawStarRating = (numb: string) => {
    const count = Number(numb);
    const draw = (): any[] => {
        let arr: any[] = [];
        for (let i: number = 1; i <= 5; i++) {
            if (i <= count) {
                arr.push(goldStar);
            } else {
                arr.push(grayStar);
            }
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
    RadioOnly?: any;
    _RangeMin?: any;
    _RangeMax?: any;
    SelectContain?: any;
}

export const filterData = ({
    dataFil,
    field,
    RadioOnly,
    _RangeMin = dataFil.filters.find((item: any) => item.query_name == field).min,
    _RangeMax = dataFil.filters.find((item: any) => item.query_name == field).max,
    SelectContain,
}: propFilter) => {
    if (_RangeMax != undefined && _RangeMin != undefined) {
        dataFil.data = dataFil['data'].filter((xItem: any) => xItem[field] >= _RangeMin && xItem[field] <= _RangeMax);

        console.log(dataFil);
        return dataFil;
    }
    return dataFil;
};
