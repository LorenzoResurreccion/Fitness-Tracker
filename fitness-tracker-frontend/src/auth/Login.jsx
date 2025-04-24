import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    function navigateRegister() {
        navigate("/register")
    }

    function handleSubmit(e) {
        e?.preventDefault()
    }

    return (<div style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1>Login</h1>
        <div style={{paddingBottom: '2rem'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email-innput" placeholder="example@gmail.com"  style={{width: '50%', justifySelf: 'center'}}/>
            </div>
            <div className="form-group" >
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="password" style={{width: '50%', justifySelf:  'center'}}/>
            </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </Form>
        </div>
        <div onClick={navigateRegister}>No account? Register</div>
    </div>)
}

export default Login;