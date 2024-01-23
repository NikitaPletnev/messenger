import {Dialog, DialogProps} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";

export const StyledDialog = ({...props}: DialogProps):JSX.Element => {
    const theme = useSelector((state: StoreInterface) => state.theme);
    return <Dialog
        {...props}
        sx={{
            "& .MuiDialog-container":{
                justifyContent: "start",
            }
        }}
        PaperProps={{
            sx:{
                height: "100%",
                margin: 0,
                display: "grid",
                background: palette[theme].dropdownBg
            }
        }}
    />;
};

export default StyledDialog;
