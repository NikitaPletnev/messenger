import {Box, IconButton, styled} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import StyledTypography from "../../../components/DS/StyledTypography";
import {BASE_URL_IMG} from "../../../configs/apiConfig";
import {palette} from "../../../configs/palette";
import {ChannelInterface} from "../../../interfaces/ChannelInterface";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface ChannelElInterface {
    data: ChannelInterface;
    handleSelect(id: string):void;
    handleDelete(id: string):void;
}

const ChannelElContainer = styled(Box)({
    position: "relative",
    height: "100px",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: 0,
    transition: "background-position .3s cubic-bezier(0,1.51,.73,.92)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
    textAlign: "start",
});

const ChannelElContainerUnderText = styled("p")({
    margin: "2px",
    fontSize: "12px",
    lineHeight: "133%",
    fontHeight: 600,
});

const DeleteButton = styled(IconButton)({
    position: "absolute",
    right: "-100px",
    transition: "right .3s cubic-bezier(0,2.03,.27,1.09)",
    "&.visible":{
        right: "20px",
    }
});

const ChannelEl = ({data, handleSelect, handleDelete}: ChannelElInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [deleteButton, setDeleteButton] = useState<boolean>(false);
    
    const onDelete = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement> ):void => {
        e.stopPropagation();
        handleDelete(data._id);
    };
    
    return (
        <ChannelElContainer
            onMouseOver={() => setDeleteButton(true)}
            onMouseOut={() => setDeleteButton(false)}
            onClick={() => handleSelect(data._id)}
            sx={{
                backgroundImage: `linear-gradient(45deg, transparent, ${palette[theme].blue}), url(${BASE_URL_IMG+data.avatar})`,
                backgroundSize: "150% 100% , cover",
                backgroundPosition: "100% 0, 0 0",
                "&:hover":{
                    backgroundPosition: "20% 0, 0 10%",
                },
                borderBottom: "2px solid" + palette[theme].borderColor
            }}
        >
            <MarkAsUnreadIcon fontSize="large"  htmlColor={palette[theme].blue}/>
            <Box>
                <StyledTypography variant={"h6"}
                    style={{
                        textShadow: "1px 1px 5px " + palette[theme].mainBg,
                    }}
                >{data.title}</StyledTypography>
                <ChannelElContainerUnderText
                    sx={{
                        color: palette[theme].textColor,
                        textShadow: `1px 1px 2px ${palette[theme].mainBg}, -1px -1px 2px ${palette[theme].mainBg}, 1px -1px 2px ${palette[theme].mainBg}, -1px 1px 2px ${palette[theme].mainBg}`,
                    }}
                >Created By:&nbsp;{data.creator}</ChannelElContainerUnderText>
                <ChannelElContainerUnderText
                    sx={{
                        color: palette[theme].textColor,
                        textShadow: `1px 1px 2px ${palette[theme].mainBg}, -1px -1px 2px ${palette[theme].mainBg}, 1px -1px 2px ${palette[theme].mainBg}, -1px 1px 2px ${palette[theme].mainBg}`,
                    }}
                >For&nbsp;{data.users.split(",").length}&nbsp;users</ChannelElContainerUnderText>
            </Box>
            <DeleteButton
                onClick={onDelete}
                className={deleteButton ? "visible" : ""}>
                <DeleteOutlineOutlinedIcon htmlColor={palette.dark.red}/>
            </DeleteButton>
        </ChannelElContainer>
    );
};

export default ChannelEl;
