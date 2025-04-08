import { useState } from "react"
import { Link } from "react-router-dom"

function Sidebar() {
    
    const [isCollapsed, setCollapsed] = useState(true)

    function toggleSidebar() {
        setCollapsed(!isCollapsed)
    }
    
    return <div className={`sidebar ${isCollapsed? 'collapsed': 'full'}`}>
        <div onClick={toggleSidebar} className="nav_option">
            <div className="nav_symb" style={{paddingLeft: '1rem'}}>Menu</div>
            <div className="nav_label">User</div>
        </div>
        
        <ul className="sidebar-content">
            <li >
                <Link to={'/dashboard'} className="nav_option">
                    <div className="nav_symb">D</div>
                    <div className="nav_label">Dashboard </div>
                </Link>
            </li>
            <li>
                <Link to={'/workouts'} className="nav_option">
                    <div className="nav_symb">W</div>
                    <div className="nav_label">Workouts</div>
                </Link>
            </li>
            <li>
                <Link to={'/activity'} className="nav_option">
                    <div className="nav_symb">A</div>
                    <div className="nav_label">Activity</div>
                </Link>
            </li>
            <li>
                <Link to={'/goals'} className="nav_option">
                    <div className="nav_symb">G</div>
                    <div className="nav_label">Goals</div>
                </Link>
            </li>
            <li>
                <Link to={'/meals'} className="nav_option">
                    <div className="nav_symb">M</div>
                    <div className="nav_label">Meals</div>
                </Link>
            </li>
        </ul>
    </div>
}
  
export default  Sidebar