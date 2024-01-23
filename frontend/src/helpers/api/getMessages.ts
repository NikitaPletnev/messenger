import {BASE_URL, GET_MESSAGES} from "../../configs/apiConfig";

export const getMessages = (channelId: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "GET",
        headers,
    };
    return fetch(`${BASE_URL}${GET_MESSAGES}/${channelId}`, options);
};
