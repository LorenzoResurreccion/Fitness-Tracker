import { useState } from "react";
import LoginStatusContext from "../contexts/LoginStatusContext";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";


function AppLayout(props) {
    const [loginStatus, setLoginStatus] = useState(JSON.parse(sessionStorage.getItem('loginStatus')))


    return (
        <div>
            
            {loginStatus ? <Sidebar/> : <></>}

            <div>
                <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
                    <Outlet/>
                </LoginStatusContext.Provider>
            </div>
        </div>
    )

}

export default AppLayout;