import actionType from './actionType';

export const fetchSearch = (data: any) => {
    return {
        type: actionType.FETCH_SEARCH,
        data: data,
    };
};
