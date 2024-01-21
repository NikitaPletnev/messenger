import {Box, Button, IconButton, Menu, styled} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL_IMG} from "../../../configs/apiConfig";
import {palette} from "../../../configs/palette";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import LogoutIcon from "@mui/icons-material/Logout";
import {setChannels} from "../../../store/actions/setChannels";
import {setUser} from "../../../store/actions/setUser";

const UserMenuAvatar = styled(Box)({
    height: "100%",
    aspectRatio: "1/1",
    borderRadius: "100%",
});

const UserMenuContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
});

const UserMenuLogOutButton = styled(Button)({
    textTransform: "none",
    display: "flex",
    justifyContent: "start",
    gap: "10px",
    padding: 0
});

const UserMenu = ():JSX.Element => {
    
    const user = useSelector((state: StoreInterface) => state.user);
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const dispatch = useDispatch();
    
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    
    const handleClose = ():void => {
        setAnchorEl(null);
    };
    
    const handleLogOut = ():void => {
        dispatch(setUser(null));
        dispatch(setChannels([]));
    };
    
    return (
        <Box>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <UserMenuAvatar sx={{
                    background: (user.avatar ? `url(${BASE_URL_IMG+user.avatar}) no-repeat center` : palette[theme].textColor) + ` ${palette[theme].textColor}`,
                    backgroundSize: "cover",
                }}/>
            </IconButton>
            <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}
                sx={{
                    "& .MuiMenu-paper":{
                        background: palette[theme].dropdownBg,
                    },
                    "& ul":{
                        background: palette[theme].dropdownBg,
                    }
                }}
            >
                <UserMenuContainer
                    sx={{
                        color: palette[theme].textColor,
                    }}
                >
                    <span>Name:&nbsp;{user.username}</span>
                    {user.email && <span>Email:&nbsp;{user.email}</span>}
                    <span>Role:&nbsp;{user.role}</span>
                    <UserMenuLogOutButton
                        onClick={handleLogOut}
                        sx={{
                            color: palette[theme].textColor,
                        }}
                    >
                        <LogoutIcon htmlColor={"#FD405E"}/>
                    Log Out
                    </UserMenuLogOutButton>
                </UserMenuContainer>
            </Menu>
        </Box>
    );
};

export default UserMenu;
