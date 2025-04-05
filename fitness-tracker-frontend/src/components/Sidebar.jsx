import { useState } from "react"

function Sidebar() {
    
    const [isCollapsed, setCollapsed] = useState(true)

    function toggleSidebar() {
        setCollapsed(!isCollapsed)
    }
    
    return <div className={`sidebar ${isCollapsed? 'collapsed': 'full'}`}>
        <div onClick={toggleSidebar}>Menu</div>
        <div className="sidebar-content">
            <p>Dashboard</p>
            <p>Workouts</p>
            <p>Activity</p>
            <p>Goals</p>
            <p>Meals</p>
            <p>Sign-out</p>
        </div>
    </div>
}
  
export default  Sidebar