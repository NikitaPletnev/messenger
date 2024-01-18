import {THEME, USER,} from "../actions/types/actionTypes";
import { initialState } from "../initialState";
// eslint-disable-next-line
export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
    case USER:
        return Object.assign({
        }, state, {
            user: action.user,
        });
    case THEME:
        return Object.assign({
        }, state, {
            theme: action.theme,
        });
    default:
        return state;
    }
};
