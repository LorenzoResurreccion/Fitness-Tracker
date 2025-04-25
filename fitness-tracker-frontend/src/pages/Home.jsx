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
        <p>This project was made using a React frontend and Spring Boot/MySQL backend</p>
        <p>Users will be able to login to existing accounts or register a new account</p>
        <p>This is a project I made for fun and to develop new skills, hope you enjoy!</p>
        <div style={{padding: '5rem'}}/>
        <div onClick={navigateLogin} style={{padding: '1rem'}}>Already have an acconnt? Login.</div>
        <div onClick={navigateRegister}>Don't have an account yet? Register.</div>
    </div>
}

export default Home;