import {Box, IconButton, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import StyledTextField from "../../../components/DS/StyledTextField";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import EmptyChat from "./EmptyChat";
import {palette} from "../../../configs/palette";
import SendIcon from "@mui/icons-material/Send";

const MessagesContainer = styled(Box)({
    maxHeight: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "20px 0 0",
    display: "grid",
    gridTemplateRows: "4fr 1fr",
    "&::-webkit-scrollbar": {
        background: "transparent",
        width: "0.5em",
    },
    "&::-webkit-scrollbar-thumb": {
        background: palette.light.blue,
        borderRadius: "8px",
    },
    "& h5":{
        textAlign: "center",
        paddingBottom: "10px",
    }
});

const TextContainer = styled("form")({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "0 10px 0 0",
    "& .active":{
        animation: "shadow .3s ease",
        boxShadow: "0px 0px 10px 5px" + palette.light.blue,
        "@keyframes shadow": {
            "0%":{
                boxShadow: "0px 0px 0px 0px" + palette.light.blue,
            },
            "100%":{
                boxShadow: "0px 0px 10px 5px" + palette.light.blue,
            }
        }
    }
});

const Messages = ():JSX.Element => {
    
    const selectedChannel = useSelector((state: StoreInterface) => state.selectedChannel);
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [text, setText] = useState<string>("");
    
    useEffect(() => {
        if(text){
            setText("");
        }
    },[selectedChannel]);
    
    const handleSend = (e:React.KeyboardEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        e.stopPropagation();
        if(text) {
            console.log(text);
        }
    };
    
    const renderMessagesEls = ():React.ReactNode => {
        return (
            <span>ELS</span>
        );
    };
    
    const renderTextField = ():React.ReactNode => {
        return (
            <TextContainer onKeyDownCapture={(e: React.KeyboardEvent<HTMLFormElement>) => {
                if(e.code === "Enter"){
                    handleSend(e);
                }
            }}>
                <StyledTextField
                    type={"text"}
                    placeholder={"Message to channel..."}
                    multiline={true} rows={5}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setText(e.target.value)}
                />
                <IconButton className={text ? "active" : ""} type="submit" disabled={!text} onClick={handleSend}>
                    <SendIcon htmlColor={palette[theme].blue}/>
                </IconButton>
            </TextContainer>
        );
    };
    
    const renderContent = ():React.ReactNode => {
        if(!selectedChannel){
            return <EmptyChat/>;
        }
        return (
            <MessagesContainer
                style={{
                    borderRight: "1px solid" + " " + palette[theme].borderColor
                }}
            >
                {renderMessagesEls()}
                {renderTextField()}
            </MessagesContainer>
        );
    };
    
    return (
        <>
            {renderContent()}
        </>
    );
};

export default Messages;
