import { useEffect, useState } from "react"
import { Container} from "react-bootstrap"
import WorkoutItem from "../components/HistoryItems/WorkoutItem"
import WorkoutForm from "../components/Forms/WorkoutForm"

function Workouts() {
    const WORKOUTS_API_URL = 'http://localhost:8080/api/workout'
    const [history, setHistory] = useState()
 
    //pull history from api
    function refreshHistory() {
        fetch(WORKOUTS_API_URL, {
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
            <WorkoutForm refresh={refreshHistory} url={WORKOUTS_API_URL}/>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Recent Workouts</h3>
                <div className="historyLog" style={{overflowY:'auto'}}> {
                    history ? (history).map(entry => {
                        return <WorkoutItem key={entry.id} {...entry}/>
                    }) : <p>No History.</p>
                }</div>
            </div>
        </Container>
    </div>
}
  
export default Workouts