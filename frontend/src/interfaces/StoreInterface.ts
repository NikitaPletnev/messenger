import {ChannelInterface} from "./ChannelInterface";
import {UserInterface} from "./UserInterface";

export interface StoreInterface {
    user: UserInterface;
    theme: "light" | "dark";
    loading: boolean;
    channels: ChannelInterface[];
}
