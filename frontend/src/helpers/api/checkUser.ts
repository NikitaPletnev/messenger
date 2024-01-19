import {BASE_URL, CHECK_USER} from "../../configs/apiConfig";

export const checkUser = (username: string, password: string): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
            username,
            password
        })
    };
    return fetch(`${BASE_URL}${CHECK_USER}`, options);
};
