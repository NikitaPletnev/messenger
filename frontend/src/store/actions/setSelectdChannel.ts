import {SELECTED_CHANNEL} from "./types/actionTypes";

export const setSelectedChannel = (
    selectedChannel: string
): { type: string; selectedChannel: string} => {
    return {
        type: SELECTED_CHANNEL,
        selectedChannel,
    };
};
