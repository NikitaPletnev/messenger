import {Alert, AlertColor, Snackbar, SnackbarOrigin} from "@mui/material";
import React from "react";

interface StyledSnackBarInterface {
    type: AlertColor | undefined;
    message: string;
    handleClose():void;
}

const StyledSnackBar = ({type, message, handleClose}: StyledSnackBarInterface):JSX.Element => {
    
    const anchorOrigin: SnackbarOrigin = window.innerWidth < 768 ? {
        vertical: "bottom", horizontal: "left"
    } : {
        vertical: "top", horizontal: "right"
    };

    return (
        <Snackbar
            open={!!type}
            onClose={handleClose}
            autoHideDuration={3000}
            key={"styled_snackbar"}
            anchorOrigin={anchorOrigin}
        >
            <Alert severity={type}
                sx={{
                    width: "100%"
                }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default StyledSnackBar;
