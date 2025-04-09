import { useEffect, useState } from "react"
import { Container} from "react-bootstrap"
import ActivityItem from "../components/HistoryItems/ActivityItem"
import ActivityForm from "../components/Forms/ActivityForm"


function Activity() {
    const ACTIVITY_API_URL = 'http://localhost:8080/api/activity'

    const [history, setHistory] = useState()
    //pull history from api
    function refreshHistory() {
        fetch(ACTIVITY_API_URL, {
        })
        .then(res => res.json())
        .then(json => {
            
            //sort enttries based on date
            json = Object.values(json).sort((a,b) => {
                return (Date.parse(a.date) - Date.parse(b.date)) * -1
            })
            setHistory(json)
        })
    }
    useEffect(refreshHistory, [])

    return <div>
        <Container style={{width: 'auto', display: 'flex'}}>
            <ActivityForm refresh={refreshHistory} url={ACTIVITY_API_URL}/>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Recent Activity</h3>
                <div className="historyLog" style={{overflowY:'auto'}}>
                    {
                        history ? (history).map(entry => {
                            return <ActivityItem key={entry.id} {...entry} refresh={refreshHistory} url={ACTIVITY_API_URL}/>
                        }) : <p>No History.</p>
                    }
                </div>
            </div>
        </Container>
    </div>
}
  
export default  Activity