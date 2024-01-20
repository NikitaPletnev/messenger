import {BASE_URL, CREATE} from "../../configs/apiConfig";

export const registerUser = (username: string, password: string ,role:string, email?: string, avatar?: File): Promise<Response> => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email || "");
    formData.append("role", role);
    if(avatar){
        formData.append("picture", avatar);
    }
    const options = {
        method: "POST",
        body: formData
    };
    return fetch(`${BASE_URL}${CREATE}`, options);
};
