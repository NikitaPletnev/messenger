import {BASE_URL, GET_USERS} from "../../configs/apiConfig";

export const getAllUsers = (): Promise<Response> => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: "GET",
        headers,
    };
    return fetch(`${BASE_URL}${GET_USERS}`, options);
};
