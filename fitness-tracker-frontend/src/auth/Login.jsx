import { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginStatusContext from "../contexts/LoginStatusContext";
import { useContext } from "react";


function Login() {
    const navigate = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loginStatus, setLoginStatus] = useContext(LoginStatusContext)


    function navigateRegister() {
        navigate("/register")
    }

    function handleSubmit(e) {
        e?.preventDefault()

        //parse inputs
        if(emailRef.current.value == '' || passwordRef.current.value == ''){
            alert('You must enter both your email and your password')
        }

        //run post command for login api
        fetch('http://localhost:8080/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        })
        .then(res => {
            if(res.status == 200) {
                alert("Login Successful")

                //update login statuses
                //sessionStorage.setItem('loginStatus', JSON.stringify(true))
                //sessionStorage.setItem('email', JSON.stringify(emailRef.current.value))
               
                
                //save token and expire time
                res.json().then(json => {
                    console.log(json)
                })

                
                //navigate('/dashboard')
                
            }
            

        })

        
    }

    return (<div style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1>Login</h1>
        <div style={{paddingBottom: '2rem'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" className="form-control" id="email" aria-describedby="email-input" placeholder="example@gmail.com"  style={{width: '50%', justifySelf: 'center'}} ref={emailRef}/>
            </div>
            <div className="form-group" >
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" className="form-control" id="password" placeholder="password" style={{width: '50%', justifySelf:  'center'}} ref={passwordRef}/>
            </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </Form>
        </div>
        <div onClick={navigateRegister}>No account? Register.</div>
    </div>)
}

export default Login;