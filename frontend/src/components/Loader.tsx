import {Box, styled} from "@mui/material";
import {palette} from "../configs/palette";

export const Loader= styled(Box)({
    height: "2px",
    background: palette.dark.yellow,
    position: "absolute",
    top: "70px",
    left: "14px",
    borderRadius: "0 0 100% 100%",
    width: "20%",
    boxShadow: "0 30px 75px 6px" + palette.dark.yellow,
    animation: "load .7s infinite",
    "@keyframes load":{
        "0%":{
            left: "14px"
        },
        "50%":{
            left: "calc(80% - 14px)"
        },
        "100%":{
            left: "14px"
        }
    }
});
