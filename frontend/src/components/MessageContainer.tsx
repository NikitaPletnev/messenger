import {Box, styled} from "@mui/material";

export const MessageContainer = styled(Box)({
    position: "relative",
    padding: "10px",
    borderRadius: "4px",
    boxSizing: "border-box",
    maxWidth: "70%",
    marginBottom: "10px",
    marginLeft: "30px",
    "&:after":{
        position: "absolute",
        content: "' '",
        bottom: "-31px",
        left: "-14px",
        height: "40px",
        width: "40px",
        background: "inherit",
        transform: "rotateY(180deg)",
        clipPath: "polygon(64% 10%, 67% 31%, 76% 56%, 100% 100%, 62% 86%, 38% 71%, 14% 45%, 0 11%)"
    },
    "&.my":{
        marginLeft: "auto",
        marginRight: "30px",
        "&:after":{
            position: "absolute",
            content: "' '",
            bottom: "-31px",
            right: "-14px",
            left: "auto",
            height: "40px",
            width: "40px",
            transform: "rotateY(0deg)",
            clipPath: "polygon(64% 10%, 67% 31%, 76% 56%, 100% 100%, 62% 86%, 38% 71%, 14% 45%, 0 11%)"
        }
    }
});
