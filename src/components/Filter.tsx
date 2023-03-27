import { filterTitle, filterTypeOfList } from "@/src/Enum/enum";
interface filterObj {
    title: filterTitle;
    typeOfList: filterTypeOfList;
    listOption: any[];
}


function Filter(props:any) {
    
    return (
        <>
            <div className="wrapper">
                <h4 className="title">{props.data.title}</h4>
                
            </div>
        </>
    );
}

export default Filter;
