import { createContext, useState } from "react";

const LoginStatusContext = createContext()

function LoginStatusProvider(props) {
    const [loginStatus, setLoginStatus] = useState(JSON.parse(sessionStorage.getItem('loginStatus')))

    return (<div>
        <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
            {props.children}
        </LoginStatusContext.Provider>
    </div>)
}

export {LoginStatusContext, LoginStatusProvider}