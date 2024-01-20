import {Typography, TypographyProps} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";


const StyledTypography = ({children, ...props}: TypographyProps):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <Typography {...props}
        sx={{
            color: palette[theme].titleColor
        }}
    >
        {children}
    </Typography>;
};

export default StyledTypography;
