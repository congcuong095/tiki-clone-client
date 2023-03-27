import { filterTitle, filterTypeOfList } from "../Enum/enum";
import Filter from "./Filter";
interface filterObj {
    title: filterTitle;
    typeOfList: filterTypeOfList;
    listOption: any[];
}

function Sidebar() {
    const obj: filterObj = {
        title: filterTitle.childList,
        typeOfList: filterTypeOfList.childlist,
        listOption: [],
    };
    return (
        <>
            <Filter data={obj} />
        </>
    );
}

export default Sidebar;
