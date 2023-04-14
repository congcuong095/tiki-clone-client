import actionType from '../Actions/actionType';

const initState: any = {
    limit: 40,
    category: 8594,
    page: 1,
    urlKey: 'o-to-xe-may-xe-dap',
};

export default function ParamReducer(state = { ...initState }, action: any) {
    switch (action.type) {
        case actionType.UPDATE_PARAM:
            return { ...state, ...action.payload };
        case actionType.REMOVE_PARAM:
            if (state) {
                action.payload.forEach((x: any) => delete state[x]);
            }
            return {
                ...state,
            };
        case actionType.RESET_PARAM:
            return initState;
        default:
            return state;
    }
}
