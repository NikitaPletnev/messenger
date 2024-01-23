import {CHANNELS, LOADING, MESSAGES, SELECTED_CHANNEL, THEME, USER,} from "../actions/types/actionTypes";
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
    case LOADING:
        return Object.assign({
        }, state, {
            loading: action.loading,
        });
    case CHANNELS:
        return Object.assign({
        }, state, {
            channels: action.channels,
        });
    case SELECTED_CHANNEL:
        return Object.assign({
        }, state, {
            selectedChannel: action.selectedChannel,
        });
    case MESSAGES:
        return Object.assign({
        }, state, {
            messages: action.messages,
        });
    default:
        return state;
    }
};
