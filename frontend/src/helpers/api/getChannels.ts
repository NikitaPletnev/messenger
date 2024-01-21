import {BASE_URL, GET_CHANNELS} from "../../configs/apiConfig";

export const getChannels = (userId: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
            id: userId
        })
    };
    return fetch(`${BASE_URL}${GET_CHANNELS}`, options);
};
