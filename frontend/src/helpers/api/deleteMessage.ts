import {BASE_URL, MESSAGE_SEND} from "../../configs/apiConfig";

export const deleteMessage = (messageId: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "DELETE",
        headers,
    };
    return fetch(`${BASE_URL}${MESSAGE_SEND}/${messageId}`, options);
};
