function ActivityItem(props) {

    let date = props.date
    let index = date.indexOf('T')
    date = date.slice(0, index)

    function deleteItem(e) {
      e?.preventDefault()
      fetch(props.url, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              'id': props.id
          })
      })
      .then(res => {
          if (res.status === 200) {
              props.refresh()
              alert("Successfully Deleted!")
          } else {
              alert("An Error Occurred, please try again!")
          }
      })
    }


    return (<div className="HistoryItem">
      <h4> {props.steps} steps - {props.distance} km</h4>   
      <p/>
      <h5>Calories: {props.caloriesBurned}</h5>
      <h6>{date}</h6> 
      <div style={{textAlign: 'right'}}>
        <button onClick={(e) => deleteItem(e)}className="btn btn-danger">Delete</button>
      </div>
    </div>)
     
}
  
export default ActivityItem
  