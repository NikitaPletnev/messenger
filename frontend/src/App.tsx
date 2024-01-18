import React from "react";
import "./App.css";
import {useSelector} from "react-redux";
import ThemeSwitchButton from "./components/ThemeSwitchButton";
import LoginPage from "./containers/LoginPage/LoginPage";
import Main from "./containers/Main/Main";
import {StoreInterface} from "./interfaces/StoreInterface";

function App() {
    const user = useSelector((state: StoreInterface) => state.user);
    return (
        <>
            {(user) ? (
                <Main/>
            ):(
                <LoginPage/>
            )}
            <ThemeSwitchButton/>
        </>
    );
}

export default App;
