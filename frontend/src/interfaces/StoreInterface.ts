import {ChannelInterface} from "./ChannelInterface";
import {MessageInterface} from "./MessageInterface";
import {UserInterface} from "./UserInterface";

export interface StoreInterface {
    user: UserInterface;
    theme: "light" | "dark";
    loading: boolean;
    channels: ChannelInterface[];
    selectedChannel: string;
    messages: MessageInterface[];
}
