import {AlertColor, Button, styled} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StyledSnackBar from "../../../components/DS/StyledSnackBar";
import StyledTypography from "../../../components/DS/StyledTypography";
import {palette} from "../../../configs/palette";
import {createChannel} from "../../../helpers/api/createChannel";
import {ChannelInterface} from "../../../interfaces/ChannelInterface";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import AddIcon from "@mui/icons-material/Add";
import {setChannels} from "../../../store/actions/setChannels";
import {setSelectedChannel} from "../../../store/actions/setSelectdChannel";
import AddChannelModal from "./AddChannelModal";

const AddChannelElContainer = styled(Button)({
    height: "70px",
    width: "100%",
    borderRadius: 0,
    transition: "background-position .5s cubic-bezier(0,1.51,.73,.92)",
    display: "flex",
    justifyContent: "start",
    gap: "20px",
});

const AddChannelEl = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const user = useSelector((state: StoreInterface) => state.user);
    
    const channels = useSelector((state: StoreInterface) => state.channels);
    
    const dispatch = useDispatch();
    
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    const [snackBar, setSnackBar] = useState<AlertColor | undefined>();
    const [snackBarText, setSnackBarText] = useState<string>("");
    
    const handleOpenModal = ():void => {
        setOpenModal(true);
    };
    
    const handleCloseModal = (e:React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.stopPropagation();
        setOpenModal(false);
    };
    
    const handleAddChannel = (title: string, users: string, avatar?: File):void => {
        createChannel(user.username, title, users, avatar).then((response) => {
            response.json().then((resource: {success: boolean,channel: ChannelInterface, message:string}) => {
                if(resource.success){
                    dispatch(setChannels([...channels, resource.channel]));
                    dispatch(setSelectedChannel(resource.channel._id));
                    setOpenModal(false);
                    setSnackBar("success");
                    setSnackBarText("New Channel Created!");
                }else{
                    setSnackBar("error");
                    setSnackBarText(resource.message);
                }
            });
        }).catch((e) => {
            setSnackBar("error");
            setSnackBarText(e.message);
        });
    };
    
    const renderModal = ():React.ReactNode => {
        return (
            <AddChannelModal
                open={openModal}
                onClose={handleCloseModal}
                handleSubmit={handleAddChannel}
            />
        );
    };
    
    return (
        <AddChannelElContainer
            onClick={handleOpenModal}
            sx={{
                background: `linear-gradient(45deg,${palette[theme].blue}, ${palette[theme].dropdownBg}, ${palette[theme].mainBg})`,
                backgroundSize: "150% 100%",
                backgroundPosition: "80%",
                "&:hover":{
                    backgroundPosition: 0,
                },
            }}
        >
            <AddIcon fontSize="large"  htmlColor={palette[theme].blue}/>
            <StyledTypography>Create New Channel</StyledTypography>
            {renderModal()}
            <StyledSnackBar
                type={snackBar}
                message={snackBarText}
                handleClose={() => setSnackBar(undefined)}
            />
        </AddChannelElContainer>
    );
};

export default AddChannelEl;
