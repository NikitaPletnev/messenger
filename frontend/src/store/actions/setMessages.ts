import {MessageInterface} from "../../interfaces/MessageInterface";
import {MESSAGES} from "./types/actionTypes";

export const setMessages = (
    messages: MessageInterface[]
): { type: string; messages: MessageInterface[]} => {
    return {
        type: MESSAGES,
        messages,
    };
};

