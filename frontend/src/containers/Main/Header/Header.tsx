import {Box, styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import StyledTypography from "../../../components/DS/StyledTypography";
import {Loader} from "../../../components/Loader";
import {palette} from "../../../configs/palette";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import logo from "../../../assets/logo.png";
import UserMenu from "./UserMenu";

const HeaderContainer = styled("header")({
    height: "70px",
    width: "100%",
    padding: "5px 7.5%",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    "& *":{
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "20px",
    }
});

const Header = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    const loading = useSelector((state: StoreInterface) => state.loading);
    
    return (
        <HeaderContainer
            sx={{
                background: palette[theme].headingBg
            }}
        >
            <Box>
                <img alt={"Logo"} src={logo}/>
                <StyledTypography variant={"h4"}>Messenger</StyledTypography>
            </Box>
            <UserMenu/>
            {loading && <Loader/>}
        </HeaderContainer>
    );
};

export default Header;
