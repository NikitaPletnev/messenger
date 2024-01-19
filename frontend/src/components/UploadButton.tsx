import {Box, Button, styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../configs/palette";
import {StoreInterface} from "../interfaces/StoreInterface";

interface UploadButtonInterface {
    children: React.ReactNode;
    name: string;
    handleUpload(file: File):void;
}

const UploadButtonInput = styled("input")({
    display: "none",
});

const UploadButtonEl = styled(Button)({
    textTransform: "none"
});


const UploadButton = ({children,name,handleUpload}: UploadButtonInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const onUpload = (e: React.ChangeEvent<HTMLInputElement>):void => {
        if(e.target.files && e.target.files[0]){
            handleUpload(e.target.files[0]);
        }
    };
    
    const handleClick = ():void => {
        const el = document.getElementById(name);
        if(el){
            el.click();
        }
    };
    
    return (
        <Box>
            <UploadButtonInput
                onChange={onUpload}
                type="file"
                id={name}
                name={name}
                accept="image/*"
                multiple={false}
            />
            <UploadButtonEl
                onClick={handleClick}
                sx={{
                    color: palette[theme].textColor,
                    background: palette.light.blue,
                    "&:hover":{
                        background: palette.light.blue,
                        opacity: 0.9
                    }
                }}
            >
                {children}
            </UploadButtonEl>
        </Box>
    );
};

export default UploadButton;
