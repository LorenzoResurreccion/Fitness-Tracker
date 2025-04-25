import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate()
    

    function navigateLogin() {
        navigate("/login")
    }

    function handleSubmit(e) {
        e?.preventDefault()
    }
    

    return (<div style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1>Register</h1>
        <div style={{paddingBottom: '2rem'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" aria-describedby="name-input" placeholder="First-name Last-name"  style={{width: '50%', justifySelf: 'center'}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email-innput" placeholder="example@gmail.com"  style={{width: '50%', justifySelf: 'center'}}/>
                </div>
                <div className="form-group" >
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="password" style={{width: '50%', justifySelf:  'center'}}/>
                </div>
                <div className="form-group" >
                    <label htmlFor="password-repeat">Re-enter Password</label>
                    <input type="password" className="form-control" id="password-repeat" placeholder="re-enter password" style={{width: '50%', justifySelf:  'center'}}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </Form>
        </div>
        <div onClick={navigateLogin}>Already have an account? Login.</div>
    </div>)
}

export default Register;