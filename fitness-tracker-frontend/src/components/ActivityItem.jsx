import { Container } from "react-bootstrap"

function ActivityItem(props) {

    let date = props.date
    let index = date.indexOf('T')
    date = date.slice(0, index)

    return (<div className="HistoryItem">
      <h4> {props.steps} steps - {props.distance} km</h4>   
      <p/>
      <h5>Calories: {props.caloriesBurned}</h5>
      <h6>{date}</h6> 
    </div>)
     
}
  
export default ActivityItem
  