import {ChannelInterface} from "../../interfaces/ChannelInterface";
import {CHANNELS} from "./types/actionTypes";

export const setChannels = (
    channels: ChannelInterface[] | null
): { type: string; channels: ChannelInterface[] | null} => {
    localStorage.setItem("channels", JSON.stringify(channels));
    return {
        type: CHANNELS,
        channels,
    };
};
