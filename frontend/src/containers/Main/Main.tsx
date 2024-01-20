import {styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";
import Header from "./Header/Header";

const MainContainer = styled("main")({
    height: "100%",
    width: "100%",
    position: "absolute",
    transition: "background .3s ease",
    "& *":{
        transition: "background .3s ease"
    }
});

const Main = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <MainContainer
        sx={{
            background: palette[theme].mainBg
        }}
    >
        <Header/>
    </MainContainer>;
};

export default Main;
