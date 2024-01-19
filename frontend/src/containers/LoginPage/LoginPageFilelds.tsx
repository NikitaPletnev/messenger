import {Box, Button, styled} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import StyledTextField from "../../components/StyledTextField";
import StyledTypography from "../../components/StyledTypography";
import UploadButton from "../../components/UploadButton";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface LoginPageFieldsInterface {
    handleSignIn(username: string, password: string):void;
}

const LoginPageFieldsContainer = styled(Box)({
    height: "100%",
    width: "40%",
    marginLeft: "55%",
    position: "relative",
    overflow: "hidden",
    "& p":{
        fontSize: "15px",
        lineHeight: "133%",
        fontHeight: 500,
    },
    "@media(max-width: 768px)":{
        width: "84%",
        marginLeft: "10%",
    },
});


const LoginPageTypesContainer = styled(Box)({
    height: "100%",
    width: "200%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    transition: "transform 1s cubic-bezier(.3,-0.46,0,1)",
    "&.toRegister":{
        transform: "translate(-50%, 0)",
    }
});

const LoginPageFieldsContainerItems = styled(Box)({
    position: "relative",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});

const ButtonsContainer = styled(Box)({
    position: "absolute",
    bottom: "20px",
    width: "calc(100% - 40px)",
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width: 768px)":{
        flexDirection: "column",
    },
});

const LoginPageFields = ({handleSignIn}: LoginPageFieldsInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [toRegister, setToRegister] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const onSignIn = ():void => {
        handleSignIn(userName, password);
    };
    
    const toggleScreen = ():void => {
        setToRegister(!toRegister);
    };
    
    const renderSignInButtons = ():React.ReactNode => {
        return (
            <ButtonsContainer>
                <Button
                    disabled={!userName.length || !password.length}
                    onClick={onSignIn}
                    sx={{
                        color: "#FFFFFF",
                        background: palette.light.blue,
                        "&:hover":{
                            background: palette.light.blue,
                            opacity: 0.9
                        }
                    }}
                >
                    Sign In!
                </Button>
                <Button
                    onClick={toggleScreen}
                    sx={{
                        color: palette[theme].textColor,
                    }}
                >
                    Register
                    <KeyboardArrowRightIcon htmlColor={"#FFFFFF"}/>
                </Button>
            </ButtonsContainer>
        );
    };
    
    const renderSignUpButtons = ():React.ReactNode => {
        return (
            <ButtonsContainer>
                <Button
                    onClick={toggleScreen}
                    sx={{
                        color: palette[theme].textColor,
                    }}
                >
                    <KeyboardArrowLeftIcon htmlColor={"#FFFFFF"}/>
                    Already Registered? Sign In!</Button>
                <Button
                    sx={{
                        color: "#FFFFFF",
                        background: palette.light.blue,
                        "&:hover":{
                            background: palette.light.blue,
                            opacity: 0.9
                        }
                    }}
                >
                    Register
                </Button>
            </ButtonsContainer>
        );
    };
    
    const renderSignInScreen = ():React.ReactNode => {
        return (
            <LoginPageFieldsContainerItems>
                <StyledTypography variant={"h4"}>Sign In!</StyledTypography>
                <StyledTextField placeholder={"Username"} type={"text"} onChange={(e) => setUserName(e.target.value)}/>
                <StyledTextField placeholder={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
                {renderSignInButtons()}
            </LoginPageFieldsContainerItems>
        );
    };
    
    const renderSignUpScreen = ():React.ReactNode => {
        return (
            <LoginPageFieldsContainerItems>
                <StyledTypography variant={"h4"}>Sign Up!</StyledTypography>
                <StyledTextField placeholder={"Username"} type={"text"} required={true} onChange={console.log}/>
                <StyledTextField placeholder={"Password"} type={"password"} required={true} onChange={console.log}/>
                <StyledTextField placeholder={"Email"} type={"text"} onChange={console.log}/>
                <UploadButton handleUpload={console.log} name={"avatar-login"}>
                    <AccountBoxIcon htmlColor={"#FFFFFF"}/>
                    &nbsp;Select Avatar!</UploadButton>
                {renderSignUpButtons()}
            </LoginPageFieldsContainerItems>
        );
    };
    
    return <LoginPageFieldsContainer
        sx={{
            background: palette[theme].mainBgRgba,
            backdropFilter: "blur(20px)"
        }}
    >
        <LoginPageTypesContainer
            className={toRegister ? "toRegister" : ""}
        >
            {renderSignInScreen()}
            {renderSignUpScreen()}
        </LoginPageTypesContainer>
    </LoginPageFieldsContainer>;
    
};

export default LoginPageFields;
