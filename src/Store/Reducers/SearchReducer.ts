import actionType from '../Actions/actionType';

const initialState: any = {
    status: 0,
    data: {},
};

export function SearchReducer(state = initialState, action: any) {
    switch (action.type) {
        case actionType.FETCH_SEARCH:
            return {
                ...action.data,
            };
        default:
            return state;
    }
}
