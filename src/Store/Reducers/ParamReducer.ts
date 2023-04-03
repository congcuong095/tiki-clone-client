import actionType from '../Actions/actionType';

const initState: any = {
    limit: 40,
    include: 'advertisement',
    aggregations: 2,
    category: 8594,
    page: 1,
    trackity_id: 'c6f19eee-d118-ea27-ead1-840849028e16',
    urlKey: 'o-to-xe-may-xe-dap',
};

export default function ParamReducer(state = initState, action: any) {
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

        default:
            return state;
    }
}
