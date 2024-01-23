import {BASE_URL, MESSAGE_SEND} from "../../configs/apiConfig";

export const sendMessage = (channelId: string, author: string,authorName: string, content: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
            channelId,
            author,
            authorName,
            dateTime: new Date().getTime().toString(),
            content,
            edited: false,
        })
    };
    return fetch(`${BASE_URL}${MESSAGE_SEND}`, options);
};
