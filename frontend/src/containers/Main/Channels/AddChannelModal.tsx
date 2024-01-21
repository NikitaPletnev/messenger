import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {AlertColor, Box, Button, IconButton, Modal, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import StyledAutocomplete from "../../../components/DS/StyledAutocomplete";
import StyledSnackBar from "../../../components/DS/StyledSnackBar";
import StyledTextField from "../../../components/DS/StyledTextField";
import StyledTypography from "../../../components/DS/StyledTypography";
import {Loader} from "../../../components/Loader";
import UploadButton from "../../../components/UploadButton";
import {palette} from "../../../configs/palette";
import {getAllUsers} from "../../../helpers/api/getAllUsres";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import CloseIcon from "@mui/icons-material/Close";
import {UserInterface} from "../../../interfaces/UserInterface";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

interface AddChannelModalInterface {
    open: boolean;
    onClose(e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void;
    handleSubmit(title: string, users: string, avatar?: File):void;
}

const AddChannelModalContainer = styled("form")({
    position: "relative",
    width: "60%",
    margin: "20% auto",
    borderRadius: "4px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
});

const AddChannelModalContainerTop = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
});

const ModalButtonsContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width: 768px)":{
        flexDirection: "column",
    },
});


const AddChannelModal = ({open, onClose, handleSubmit}: AddChannelModalInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [title, setTitle] = useState<string>("");
    const [selectedUsers, setSelectedUsers] = useState<UserInterface[]>([]);
    const [avatar, setAvatar] = useState<File>();
    
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    const [snackBar, setSnackBar] = useState<AlertColor | undefined>();
    const [snackBarText, setSnackBarText] = useState<string>("");
    
    useEffect(() => {
        if(open){
            getAllUsers().then((response) => {
                response.json().then((resource: {success: boolean, users: UserInterface[], message:string}) => {
                    if(resource.success){
                        setUsers(resource.users);
                        setLoading(false);
                    }else{
                        setSnackBar("error");
                        setSnackBarText(resource.message);
                    }
                });
            }).catch((e) => {
                setSnackBar("error");
                setSnackBarText(e.message);
            });
        }
    },[open]);
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        if(title && selectedUsers.length) {
            handleSubmit(title, selectedUsers.map((opt) => opt._id).join(","), avatar);
            setTitle("");
            setSelectedUsers([]);
        }
    };
    
    const renderCloseButton = ():React.ReactNode => {
        return (
            <IconButton onClick={onClose}>
                <CloseIcon htmlColor={palette[theme].blue}/>
            </IconButton>
        );
    };
    
    const renderModalButtons = ():React.ReactNode => {
        return (
            <ModalButtonsContainer>
                <Button
                    onClick={onClose}
                    sx={{
                        color: palette[theme].textColor,
                    }}
                >
                    Chancel
                    <KeyboardArrowLeftIcon htmlColor={"#FFFFFF"}/>
                </Button>
                <Button
                    disabled={!title || !selectedUsers.length}
                    onClick={onSubmit}
                    type={"submit"}
                    sx={{
                        color: "#FFFFFF",
                        background: palette.light.blue,
                        "&:hover":{
                            background: palette.light.blue,
                            opacity: 0.9
                        }
                    }}
                >
                    Create Channel
                </Button>
            </ModalButtonsContainer>
        );
    };
    
    
    return (
        <Modal open={open} onClose={onClose}>
            <AddChannelModalContainer
                onSubmit={onSubmit}
                sx={{
                    background: palette[theme].dropdownBg
                }}
            >
                <AddChannelModalContainerTop>
                    <i/>
                    <StyledTypography variant={"h5"}>
                    Add New Channel
                    </StyledTypography>
                    {renderCloseButton()}
                    {loading && <Loader/>}
                </AddChannelModalContainerTop>
                <StyledTextField placeholder="Channel Title" onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setTitle(e.target.value)}/>
                <StyledAutocomplete
                    disabled={!users.length}
                    multiple
                    renderInput={(params) => <StyledTextField {...params} placeholder={"Users"}/>}
                    getOptionLabel={(option) => option.username}
                    options={users}
                    onChange={(e, selectedOptions) => setSelectedUsers(selectedOptions)}
                />
                <UploadButton handleUpload={setAvatar} name={"Channel Picture"}>
                    <AddPhotoAlternateIcon htmlColor="#FFFFFF"/>
                    &nbsp;Upload Channel Picture
                </UploadButton>
                {renderModalButtons()}
                <StyledSnackBar
                    type={snackBar}
                    message={snackBarText}
                    handleClose={() => setSnackBar(undefined)}
                />
            </AddChannelModalContainer>
        </Modal>
    );
};

export default AddChannelModal;
