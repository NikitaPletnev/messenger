import {Box, Button, styled} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {palette} from "../configs/palette";
import {StoreInterface} from "../interfaces/StoreInterface";
import {setTheme} from "../store/actions/setTheme";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const ThemeSwitchButtonContainer = styled(Button)({
    height: "15vh",
    width: "15vh",
    borderRadius: "100%",
    position: "fixed",
    bottom: "-7.5vh",
    right: "-7.5vh",
    transform: "rotate(45deg)",
    transition: "transform .5s cubic-bezier(0,1.51,.73,.92)",
    "&.dark":{
        transform: "rotate(220deg)"
    }
    
});

const ThemeSwitchButtonIcons = styled(Box)({
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
});

const ThemeSwitchButton = ():JSX.Element => {
    const theme = useSelector((state: StoreInterface) => state.theme);
    const dispatch = useDispatch();
    
    const handleSwitch = ():void => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };
    
    return (
        <ThemeSwitchButtonContainer
            title={"Switch Theme"}
            className={theme}
            sx={{
                background: palette[theme].themeButtonColor,
                "&:hover":{
                    background: palette[theme].themeButtonColor,
                }
            }}
            onClick={handleSwitch}
        >
            <ThemeSwitchButtonIcons>
                <WbSunnyIcon htmlColor={palette[theme].yellow}/>
                <BedtimeIcon htmlColor={palette[theme].blue}/>
            </ThemeSwitchButtonIcons>
        </ThemeSwitchButtonContainer>
    );
};

export default ThemeSwitchButton;
