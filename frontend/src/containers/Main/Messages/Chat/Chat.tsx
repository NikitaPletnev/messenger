import React from "react";
import {Box, styled} from "@mui/material";
import {useSelector} from "react-redux";
import {palette} from "../../../../configs/palette";
import {MessageInterface} from "../../../../interfaces/MessageInterface";
import {StoreInterface} from "../../../../interfaces/StoreInterface";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

interface ChatInterface {
    colorPuck: string[][]
    handleDelete(message: MessageInterface):void;
}

const ChatContainer = styled(Box)({
    maxHeight: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "20px 0 0",
    "&::-webkit-scrollbar": {
        background: "transparent",
        width: "0.5em",
    },
    "&::-webkit-scrollbar-thumb": {
        background: palette.light.blue,
        borderRadius: "8px",
    },
});

const Chat = ({handleDelete, colorPuck}: ChatInterface):JSX.Element => {
    
    const messages = useSelector((state: StoreInterface) => state.messages);
    
    const user = useSelector((state: StoreInterface) => state.user);
    
    return <ChatContainer>
        {messages.map((opt, index) => {
            return opt.author === user._id ? <MyMessage
                key={"chat_el-" + index}
                data={opt}
                handleDelete={handleDelete}
            /> : <TheirMessage
                key={"chat_el-" + index}
                data={opt}
                colorPuck={colorPuck}
            />;
        })}
    </ChatContainer>;
};


export default Chat;
