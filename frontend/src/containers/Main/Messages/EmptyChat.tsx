import styled from "@emotion/styled";
import {Box} from "@mui/material";
import React from  "react";
import {useSelector} from "react-redux";
import {OwlIcon1} from "../../../assets/OwlIcon1";
import {OwlIcon2} from "../../../assets/OwlIcon2";
import {OwlIcon3} from "../../../assets/OwlIcon3";
import {OwlIcon4} from "../../../assets/OwlIcon4";
import {OwlIcon5} from "../../../assets/OwlIcon5";
import StyledTypography from "../../../components/DS/StyledTypography";
import {palette} from "../../../configs/palette";
import {getRandomInt} from "../../../helpers/utils/getRandomInt";
import {StoreInterface} from "../../../interfaces/StoreInterface";

const EmptyChatContainer = styled(Box)({
    position: "relative",
    overflow: "hidden",
    display: "grid",
    "& svg g":{
        animation: "color 7s ease-in infinite",
        fill: palette.light.blue,
        "@keyframes color": {
            "0%": {
                fill: palette.light.blue
            },
            "25%": {
                fill: palette.light.yellow
            },
            "50%": {
                fill: palette.light.red
            },
            "75%": {
                fill: palette.light.headingBg
            },
            "100%": {
                fill: palette.light.blue
            }
        },
    }
});

const ElementIconContainer = styled(Box)({
    display: "inline-block",
    position: "relative",
    width: "5vh",
});

const IconContainer = styled(Box)({
    position: "absolute",
    top: "100vh",
    opacity: 1,
    "@keyframes move": {
        "0%": {
            opacity: 1,
            top: "100vh",
        },
        "25%":{
            transform: "rotate(20deg)",
        },
        "50%":{
            transform: "rotate(-20deg)",
        },
        "75%":{
            transform: "rotate(20deg)",
        },
        "100%": {
            top: 0,
            opacity: 0,
        }
    },
});

const EmptyChatTextContainer = styled(Box)({
    position: "absolute",
    top: "50%",
    width: "100%",
    textAlign: "center",
});

const EmptyChat = ():JSX.Element => {
    
    const quantity = 4;
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const owlsArr = [
        <OwlIcon1 key={"owl_icon_1"} color={palette[theme].blue}/>,
        <OwlIcon2 key={"owl_icon_2"} color={palette[theme].blue}/>,
        <OwlIcon3 key={"owl_icon_3"} color={palette[theme].blue}/>,
        <OwlIcon4 key={"owl_icon_4"} color={palette[theme].blue}/>,
        <OwlIcon5 key={"owl_icon_5"} color={palette[theme].blue}/>,
    ];
    
    const renderElements = ():React.ReactNode => {
        const arr = owlsArr;
        arr.sort(() => (Math.random() > .5) ? 1 : -1);
        return (<>
            {new Array(quantity).fill("").map((el, i) => <Box key={"owl_el_container-" + i}>
                {arr.map((opt, index) => <ElementIconContainer key={"owl_el-" + index}>
                    <IconContainer
                        sx={{
                            animation: `move 6s ${getRandomInt(100, 6000)}ms ease-out infinite`,
                        }}
                    >
                        {opt}
                    </IconContainer>
                </ElementIconContainer>
                )}
            </Box>
            )}
        </>);
    };
    
    
    return (
        <EmptyChatContainer
            sx={{
                background: `linear-gradient(20deg,${palette[theme].blue}, ${palette[theme].dropdownBg}, ${palette[theme].mainBg})`,
                gridTemplateColumns: new Array(quantity).fill("").map(() => "1fr").join(" "),
            }}
        >
            {renderElements()}
            <EmptyChatTextContainer>
                <StyledTypography variant={"h4"}>CHANNEL IS NOT SELECTED!</StyledTypography>
            </EmptyChatTextContainer>
        </EmptyChatContainer>
    );
};

export default EmptyChat;
