import {BASE_URL, CREATE_CHANNEL} from "../../configs/apiConfig";

export const createChannel = (creator: string, title: string ,users:string, avatar?: File): Promise<Response> => {
    const formData = new FormData();
    formData.append("creator", creator);
    formData.append("title", title);
    formData.append("users", users);
    if(avatar){
        formData.append("picture", avatar);
    }
    const options = {
        method: "POST",
        body: formData
    };
    return fetch(`${BASE_URL}${CREATE_CHANNEL}`, options);
};
