import { filterTitle, filterTypeOfList } from "./enum";

interface filterObj {
    title: filterTitle;
}

interface child {
    id: number;
    content: string;
    link: string;
}
interface filterChildList extends filterObj {
    listOption: Array<child>;
}

interface select {
    id: number;
    content: string;
}
interface filterSelect extends filterObj {
    listOption: Array<select>;
}

interface range {
    minPrice: number;
    maxPrice: number;
}
interface filterRange extends filterObj {
    Option: range;
}


