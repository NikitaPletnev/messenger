import { USER } from "./types/actionTypes";
import {UserInterface} from "../../interfaces/UserInterface";

export const setUser = (
    user: UserInterface | null
): { type: string; user: UserInterface | null} => {
    localStorage.setItem("user", JSON.stringify(user));
    return {
        type: USER,
        user,
    };
};
