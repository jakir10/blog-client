import { FILTER_POSTDATE, FILTER_UPDATE_DATE } from "../actionType/filterActionType";

export const filterPostDate = (data) => {
    return {
        type: FILTER_POSTDATE,
        payload: data,
    };
};
export const filterUpdateDate = (data) => {
    return {
        type: FILTER_UPDATE_DATE,
        payload: data,
    };
};
export const filterClear = (data) => {
    return {
        type: FILTER_UPDATE_DATE,
        payload: data,
    };
};
