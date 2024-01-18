import {UserInterface} from "./UserInterface";

export interface StoreInterface {
    user: UserInterface;
    theme: "light" | "dark";
}
