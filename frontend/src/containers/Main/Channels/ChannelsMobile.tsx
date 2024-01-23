import {Box,IconButton, Slide, styled} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import React, {useState} from "react";
import ListIcon from "@mui/icons-material/List";
import {useSelector} from "react-redux";
import StyledDialog from "../../../components/DS/StyledDialog";
import {palette} from "../../../configs/palette";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import Channels from "./Channels";

const ChannelsMobileContainer = styled(Box)({
    position: "absolute",
});

const ChannelsMobileContainerIconButton = styled(IconButton)({
    position: "absolute",
    height: "fit-content",
    width: "fit-content",
    top: 0,
    left: 0,
    zIndex: 1,
});

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        // eslint-disable-next-line
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});


const ChannelsMobile = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [open, setOpen] = useState<boolean>(false);
    
    const handleClose = ():void => {
        setOpen(false);
    };
    
    const handleOpen = ():void => {
        setOpen(true);
    };
    
    
    return <ChannelsMobileContainer>
        <ChannelsMobileContainerIconButton onClick={handleOpen}>
            <ListIcon htmlColor={palette[theme].textColor}/>
        </ChannelsMobileContainerIconButton>
        <StyledDialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
        >
            <Channels/>
        </StyledDialog>
    </ChannelsMobileContainer>;
};

export default ChannelsMobile;
