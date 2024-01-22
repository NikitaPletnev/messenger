import {AlertColor, Box, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StyledSnackBar from "../../../components/DS/StyledSnackBar";
import StyledTypography from "../../../components/DS/StyledTypography";
import {palette} from "../../../configs/palette";
import {deleteChannel} from "../../../helpers/api/deleteChannel";
import {getChannels} from "../../../helpers/api/getChannels";
import {ChannelInterface} from "../../../interfaces/ChannelInterface";
import {StoreInterface} from "../../../interfaces/StoreInterface";
import {setChannels} from "../../../store/actions/setChannels";
import {setLoading} from "../../../store/actions/setLoading";
import {setSelectedChannel} from "../../../store/actions/setSelectdChannel";
import AddChannelEl from "./AddChannelEl";
import ChannelEl from "./ChannelEl";

const ChannelsContainer = styled(Box)({
    maxHeight: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "20px 0 0",
    "&::-webkit-scrollbar": {
        background: "transparent",
        width: "0.5em",
    },
    "&::-webkit-scrollbar-thumb": {
        background: palette.light.blue,
        borderRadius: "8px",
    },
    "& h5":{
        textAlign: "center",
        paddingBottom: "10px",
    }
});

const ChannelsItems = styled(Box)({
    maxHeight: "calc(100% - 115px)",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
        background: "transparent",
        width: "0.5em",
    },
    "&::-webkit-scrollbar-thumb": {
        background: palette.light.backgroundColorScroll,
        borderRadius: "8px",
    },
});

const Channels = ():JSX.Element => {
    
    const user = useSelector((state: StoreInterface) => state.user);
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const channels = useSelector((state: StoreInterface) => state.channels);
    
    const selectedChannel = useSelector((state: StoreInterface) => state.selectedChannel);
    
    const dispatch = useDispatch();
    
    const [snackBar, setSnackBar] = useState<AlertColor | undefined>();
    const [snackBarText, setSnackBarText] = useState<string>("");
    
    useEffect(() => {
        if(!channels.length){
            getChannels(user._id).then((response) => {
                response.json().then((resource: {success: boolean,channels: ChannelInterface[], message:string}) => {
                    if(resource.success){
                        dispatch(setChannels(resource.channels));
                    }else{
                        setSnackBar("error");
                        setSnackBarText(resource.message);
                    }
                    dispatch(setLoading(false));
                });
            }).catch((e) => {
                setSnackBar("error");
                setSnackBarText(e.message);
            });
        }
    },[]);
    
    const handleDeleteChannel = (id: string):void => {
        deleteChannel(id).then((response) => {
            response.json().then((resource: {success: boolean,channel: ChannelInterface, message:string}) => {
                if(resource.success){
                    dispatch(setChannels([...channels.filter((opt) => opt._id !== id)]));
                    setSnackBar("success");
                    setSnackBarText("Channel Successfully deleted!");
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
    
    const handleSelectChannel = (id: string):void => {
        if(selectedChannel === id){
            dispatch(setSelectedChannel(""));
        }else{
            dispatch(setSelectedChannel(id));
        }
    };
    
    const renderChannels = ():React.ReactNode => {
        return (
            <>
                <AddChannelEl/>
                <ChannelsItems>
                    {channels.map((opt, index) => {
                        return <ChannelEl data={opt} key={"channel_" + index} handleSelect={handleSelectChannel} handleDelete={handleDeleteChannel}/>;
                    })}
                </ChannelsItems>
            </>
        );
    };
    
    
    return (
        <ChannelsContainer
            sx={{
                border: "1px solid" + palette[theme].borderColor
            }}
        >
            <StyledTypography variant={"h5"}
                style={{
                    borderBottom: "1px solid" + " " + palette[theme].borderColor
                }}
            >Channels</StyledTypography>
            {renderChannels()}
            <StyledSnackBar
                type={snackBar}
                message={snackBarText}
                handleClose={() => setSnackBar(undefined)}
            />
        </ChannelsContainer>
    );
};

export default Channels;
