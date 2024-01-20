import {AlertColor, Box, styled} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StyledSnackBar from "../../components/DS/StyledSnackBar";
import {palette} from "../../configs/palette";
import {checkUser} from "../../helpers/api/checkUser";
import {registerUser} from "../../helpers/api/registerUser";
import {StoreInterface} from "../../interfaces/StoreInterface";
import loginBackground from "../../assets/loginBackground.png";
import {UserInterface} from "../../interfaces/UserInterface";
import {setUser} from "../../store/actions/setUser";
import LoginPageFields from "./LoginPageFilelds";

const LoginPageContainer = styled("main")({
    height: "100%",
    width: "100%",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    transition: "background .3s ease",
});

const LoginPageItemContainer = styled(Box)({
    height: "50%",
    width: "78%",
    borderRadius: "16px",
    "@media(max-width: 768px)":{
        height: "90%",
        width: "90%"
    }
});

const LoginPage = ():JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    const dispatch = useDispatch();
    
    const [snackBar, setSnackBar] = useState<AlertColor | undefined>();
    const [snackBarText, setSnackBarText] = useState<string>("");
    
    const handleSignIn = (username: string, password: string):void => {
        checkUser(username, password).then((response) => {
            response.json().then((resource: {success: boolean, users: UserInterface[], message:string}) => {
                if(resource.success){
                    setSnackBar("success");
                    setSnackBarText("Welcome " + resource?.users[0].username + " !");
                    dispatch(setUser(resource?.users[0]));
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
    
    const handleSignUp = (username: string, password: string, email?: string, avatar?: File):void => {
        registerUser(username, password, "user", email, avatar).then((response) => {
            response.json().then((resource: {success: boolean, user: UserInterface, message:string}) => {
                if(resource.success){
                    setSnackBar("success");
                    setSnackBarText("Welcome " + resource?.user.username + " !");
                    dispatch(setUser(resource?.user));
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
    
    return <LoginPageContainer sx={{
        background: palette[theme].mainBg
    }}>
        <LoginPageItemContainer
            sx={{
                background: `url(${loginBackground}) no-repeat center`
            }}
        >
            <LoginPageFields handleSignIn={handleSignIn} handleSignUp={handleSignUp}/>
        </LoginPageItemContainer>
        <StyledSnackBar
            type={snackBar}
            message={snackBarText}
            handleClose={() => setSnackBar(undefined)}
        />
    </LoginPageContainer>;
};

export default LoginPage;
