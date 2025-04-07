import { useState } from "react"
import { Link } from "react-router-dom"

function Sidebar() {
    
    const [isCollapsed, setCollapsed] = useState(true)

    function toggleSidebar() {
        setCollapsed(!isCollapsed)
    }
    
    return <div className={`sidebar ${isCollapsed? 'collapsed': 'full'}`}>
        <div onClick={toggleSidebar}>Menu</div>
        
        <ul className="sidebar-content">
            <li >
                <Link to={'/dashboard'} className="nav_option">Dashboard </Link>
            </li>
            <li>
                <Link to={'/workouts'} className="nav_option">Workouts </Link>
            </li>
            <li>
                <Link to={'/activity'} className="nav_option">Activity</Link>
            </li>
            <li>
                <Link to={'/goals'} className="nav_option">Goals</Link>
            </li>
            <li>
                <Link to={'/meals'} className="nav_option">Meals</Link>
            </li>
        </ul>
    </div>
}
  
export default  Sidebar