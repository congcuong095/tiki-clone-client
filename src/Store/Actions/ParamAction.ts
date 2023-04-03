import actionType from './actionType';

export const UpdateParam = (newParam: any) => {
    return {
        type: actionType.UPDATE_PARAM,
        payload: newParam,
    };
};

export const RemoveParam = (remove: any) => {
    return {
        type: actionType.REMOVE_PARAM,
        payload: remove,
    };
};

export const ResetParam = () => {
    return {
        type: actionType.RESET_PARAM,
    };
};
