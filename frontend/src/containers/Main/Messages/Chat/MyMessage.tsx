import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {Box, IconButton, styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {DateText} from "../../../../components/DateText";
import {MessageContainer} from "../../../../components/MessageContainer";
import {palette} from "../../../../configs/palette";
import {dataFormatter} from "../../../../helpers/utils/dataFormatter";
import {MessageInterface} from "../../../../interfaces/MessageInterface";
import {StoreInterface} from "../../../../interfaces/StoreInterface";

interface MyMessageInterface {
    data: MessageInterface;
    handleDelete(message: MessageInterface):void;
}

const MyMessageButtonsBox = styled(Box)({
    display: "flex",
    justifyContent: "end"
});

const MyMessage = ({data,handleDelete}:MyMessageInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <MessageContainer
        className={"my"}
        sx={{
            color: palette[theme].textColor,
            backgroundImage: `linear-gradient(130deg, ${palette[theme].indigo} 20%, ${palette[theme].blue} 40%, ${palette[theme].messageBg} 80%)`,
            boxShadow: "0 0 25px 10px " + palette[theme].mainBg,
            "&:after":{
                background:palette[theme].messageBg,
            }
        }}
    >
        <MyMessageButtonsBox>
            <IconButton onClick={() => handleDelete(data)}>
                <DeleteOutlineOutlinedIcon fontSize={"small"} htmlColor={palette[theme].red}/>
            </IconButton>
        </MyMessageButtonsBox>
        <p>{data.content}</p>
        <DateText
            sx={{
                color: palette[theme].titleColor
            }}
        >{dataFormatter(data.dateTime)}</DateText>
    </MessageContainer>;
};

export default MyMessage;
