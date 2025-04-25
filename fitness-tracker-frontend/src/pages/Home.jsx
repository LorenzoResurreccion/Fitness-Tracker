import { memo } from "react";
import { useNavigate } from "react-router-dom";



function  Home() {
    const navigate = useNavigate()



    function navigateLogin() {
        navigate("/login")
    }

    function navigateRegister() {
        navigate("/register")
    }

    return<div style={{justifyContent: 'center', textAlign: 'center'}}>
        <h1>Welcome to my Fitness Tracker App!</h1>
        <br/>
        <p>This project was made using a React frontend and Spring Boot/MySQL backend</p>
        <p>Users will be able to login to existing accounts or register a new account</p>
        <p>This is a project I made for fun and to develop new skills, hope you enjoy!</p>
        <br/>
        <div style={{padding: '1rem'}}>Already have an account? <a onClick={navigateLogin}>Login</a></div>
        <div>Don't have an account yet? <a onClick={navigateRegister}>Register</a></div>
    </div>
}

export default memo(Home);