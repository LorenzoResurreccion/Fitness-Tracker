function WorkoutItem(props) {

    let date = props.date
    let index = date.indexOf('T')
    date = date.slice(0, index)

    return (<div className="HistoryItem">
      <h4> {props.name} - {props.category}</h4>   
      <p/>
      <h5>Weight: {props.weight} lbs - Details:  {props.details}</h5>
      <h5>{props.duration} min</h5>
      <h6>{date}</h6> 
    </div>)
     
}
  
export default WorkoutItem