import { useContext} from "react";
import { Button } from "react-bootstrap";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import { useNavigate } from "react-router-dom";


function Settings(props) {

    const [loginStatus, setLoginStatus] = useContext(LoginStatusContext)
    const navigate = useNavigate()
    
    function logout() {
        //update contexts/delete storage
        setLoginStatus(false)
        navigate('/')
    }

    return(<div style={{justifyItems: 'center'}}>
        <h1>Settings</h1>
        <br/>
        <p>Page where various user settings can be present.</p>
        <p>Still thinkinng of what settinsg I might want to implement</p>
        <Button variant="danger" onClick={logout}>Logout</Button>
    </div>)

}

export default Settings;