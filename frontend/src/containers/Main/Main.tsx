import {Box, styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";
import Channels from "./Channels/Channels";
import Header from "./Header/Header";
import Messages from "./Messages/Messages";

const MainContainer = styled("main")({
    height: "100%",
    width: "100%",
    position: "absolute",
    transition: "background .3s ease",
    "& *":{
        transition: "background .3s ease"
    }
});

const MainMessengerContainer = styled(Box)({
    display: "grid",
    height: "calc(100% - 70px)",
    gridTemplateColumns: "1fr 2fr",
    padding: "0 10%",
});

const Main = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <MainContainer
        sx={{
            background: palette[theme].mainBg
        }}
    >
        <Header/>
        <MainMessengerContainer>
            <Channels/>
            <Messages/>
        </MainMessengerContainer>
    </MainContainer>;
};

export default Main;
