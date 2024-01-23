import {Box, Button, styled} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import StyledTextField from "../../components/DS/StyledTextField";
import StyledTypography from "../../components/DS/StyledTypography";
import UploadButton from "../../components/UploadButton";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface LoginPageFieldsInterface {
    handleSignIn(username: string, password: string):void;
    handleSignUp(username: string, password: string, email?: string, avatar?: File):void
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
        fontWeight: 500,
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

const LoginPageFieldsContainerItems = styled("form")({
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

const LoginPageFields = ({handleSignIn, handleSignUp}: LoginPageFieldsInterface):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const [toRegister, setToRegister] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [avatar, setAvatar] = useState<File>();
    
    const onSignIn = (e: React.FormEvent<HTMLFormElement> |  React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        if(userName.length && password.length) {
            handleSignIn(userName, password);
        }
    };
    
    const onSignUp = (e: React.FormEvent<HTMLFormElement> |  React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        if(userName.length && password.length) {
            handleSignUp(userName, password, email, avatar);
        }
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
                    disabled={!userName.length || !password.length}
                    onClick={onSignUp}
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
                    Register
                </Button>
            </ButtonsContainer>
        );
    };
    
    const renderSignInScreen = ():React.ReactNode => {
        return (
            <LoginPageFieldsContainerItems onSubmit={onSignIn}>
                <StyledTypography variant={"h4"}>Sign In!</StyledTypography>
                <StyledTextField placeholder={"Username"} type={"text"} required={true} value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <StyledTextField placeholder={"Password"} type={"password"} required={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
                {renderSignInButtons()}
            </LoginPageFieldsContainerItems>
        );
    };
    
    const renderSignUpScreen = ():React.ReactNode => {
        return (
            <LoginPageFieldsContainerItems onSubmit={onSignIn}>
                <StyledTypography variant={"h4"}>Sign Up!</StyledTypography>
                <StyledTextField placeholder={"Username"} type={"text"} required={true} value={userName}  onChange={(e) => setUserName(e.target.value)}/>
                <StyledTextField placeholder={"Password"} type={"password"} required={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <StyledTextField placeholder={"Email"} type={"text"} onChange={(e) => setEmail(e.target.value)}/>
                <UploadButton handleUpload={setAvatar} name={"avatar-login"}>
                    <AccountBoxIcon htmlColor={"#FFFFFF"}/>
                    &nbsp;{avatar ? "Image Selected" : "Select Avatar!"}</UploadButton>
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
