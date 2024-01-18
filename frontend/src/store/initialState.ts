import { StoreInterface } from "../interfaces/StoreInterface";

export const initialState: StoreInterface = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null,
    theme: (localStorage.getItem("theme") ? (localStorage.getItem("theme") || "light") : "light") as "light" | "dark"
};
