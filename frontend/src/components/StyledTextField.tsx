import {styled, TextField, TextFieldProps} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../configs/palette";
import {StoreInterface} from "../interfaces/StoreInterface";

const StyledTextFieldEl = styled(TextField)({
    width: "100%",
    "& *":{
        borderRadius: "4px",
    },
    "&.Mui-focused":{
        borderColor: "silver"
    },
    "& input":{
        fontSize: ".8125rem",
        padding: ".47rem .75rem",
    },
    "&.MuiFormControl-root.MuiTextField-root":{
        background: "transparent",
    }
});

const StyledTextField = ({...props}: TextFieldProps):JSX.Element => {
    const theme = useSelector((state: StoreInterface) => state.theme);
    return <StyledTextFieldEl
        sx={{
          
            "& input":{
                color:  palette[theme].textColor,
                background: palette[theme].textFieldBackground,
            }
        }}
        variant="outlined" {...props}/>;
};

export default StyledTextField;
