import {AlertColor, Box, IconButton, styled} from "@mui/material";
import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StyledSnackBar from "../../../components/DS/StyledSnackBar";
import StyledTextField from "../../../components/DS/StyledTextField";
import {deleteMessage} from "../../../helpers/api/deleteMessage";
import {sendMessage} from "../../../helpers/api/sendMessage";
import {getRandomColor} from "../../../helpers/utils/getRandomColor";
import {MessageInterface} from "../../../interfaces/MessageInterface";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import {setLoading} from "../../../store/actions/setLoading";
import {setMessages} from "../../../store/actions/setMessages";
import Chat from "./Chat/Chat";
import EmptyChat from "./EmptyChat";
import {palette} from "../../../configs/palette";
import SendIcon from "@mui/icons-material/Send";

const MessagesContainer = styled(Box)({
    position: "relative",
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
    
    const user = useSelector((state: StoreInterface) => state.user);
    
    const messages = useSelector((state: StoreInterface) => state.messages);
    
    const colorPuck = useMemo(() => {
        return  Array.from(new Set(messages.map((opt) => opt.authorName))).map((opt) => [opt, getRandomColor()]);
    },[messages[0]]);
    
    const dispatch = useDispatch();
    
    const [text, setText] = useState<string>("");
    
    const [snackBar, setSnackBar] = useState<AlertColor | undefined>();
    const [snackBarText, setSnackBarText] = useState<string>("");
    
    useEffect(() => {
        if(text){
            setText("");
        }
    },[selectedChannel]);
    
    const handleSend = (e:React.KeyboardEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        e.stopPropagation();
        if(text) {
            sendMessage(selectedChannel, user._id, user.username, text).then((response) => {
                response.json().then((resource: { success: boolean, Messages: MessageInterface, message: string }) => {
                    if (resource.success) {
                        dispatch(setMessages([...messages, resource.Messages]));
                        setText("");
                    } else {
                        setSnackBar("error");
                        setSnackBarText(resource.message);
                    }
                    dispatch(setLoading(false));
                });
            }).catch((e) => {
                setSnackBar("error");
                setSnackBarText(e.message);
            });
        }
    };
    
    const handleDeleteMessage = (messageFrom: MessageInterface):void => {
        deleteMessage(messageFrom._id).then((response) => {
            response.json().then((resource: { success: boolean, Messages: MessageInterface, message: string }) => {
                if (resource.success) {
                    dispatch(setMessages([...messages.filter((opt) => opt._id !== messageFrom._id)]));
                    setText("");
                } else {
                    setSnackBar("error");
                    setSnackBarText(resource.message);
                }
                dispatch(setLoading(false));
            });
        }).catch((e) => {
            setSnackBar("error");
            setSnackBarText(e.message);
        });
    };
    
    const renderButton = ():React.ReactNode => {
        return (
            <IconButton className={text ? "active" : ""} type="submit" disabled={!text} onClick={handleSend}>
                <SendIcon htmlColor={palette[theme].blue}/>
            </IconButton>
        );
    };
    
    const renderMessagesEls = ():React.ReactNode => {
        
        return (
            <Chat
                handleDelete={handleDeleteMessage}
                colorPuck={colorPuck}
            />
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
                    multiline={true}
                    rows={5}
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setText(e.target.value)}
                />
                {renderButton()}
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
            <StyledSnackBar
                type={snackBar}
                message={snackBarText}
                handleClose={() => setSnackBar(undefined)}
            />
        </>
    );
};

export default Messages;
