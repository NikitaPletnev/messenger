import {BASE_URL, CREATE_CHANNEL} from "../../configs/apiConfig";

export const deleteChannel = (channelId: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "DELETE",
        headers,
    };
    return fetch(`${BASE_URL}${CREATE_CHANNEL}/${channelId}`, options);
};
