import { useEffect, useState } from "react"
import { Container, Form } from "react-bootstrap"
import ActivityItem from "../components/ActivityItem"


function Activity() {
    const ACTIVITY_API_URL = 'http://localhost:8080/api/activity'

    const [history, setHistory] = useState()
    //pull history from api
    function refreshHistoy() {
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
    useEffect(refreshHistoy, [])

    //handle submission of new data to be logged
    function handleSubmit (e){
        e?.preventDefault()
        //get input data
        let steps = document.getElementById('steps-input').value
        let dist = document.getElementById('distance-input').value
        let cals = document.getElementById('Calories-input').value
        let date = document.getElementById('date-input').value

        //check input data
        let warning = 'The following fields must not be empty:\n\n'
        let error = false
        if (!steps) {
            error = true
            warning += 'steps\n'
        }
        if (!dist) {
            error = true
            warning += 'distance\n'
        }
        if (!cals) {
            error = true
            warning += 'Calories Burned\n'
        }
        if (!date) {
            error = true
            warning += 'Date\n'
        }


        if (error) {
            alert(warning)
            return
        }

        //perform post request
        fetch(ACTIVITY_API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "steps": steps,
                "distance": dist,
                "date": date,
                "caloriesBurned": cals
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 201) {
                refreshHistoy()
                alert("Successfully Posted!")
            } else {
                alert("An Error Occurred, please try again!")
            }
        })


    }
    
    return <div>
        <Container style={{width: 'auto', display: 'flex'}}>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Post New Activity</h3>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="steps">Steps</label>
                        <input type="text" className="form-control" id="steps-input" aria-describedby="steps-input" placeholder="Enter number of Steps"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="distance">Distance (km)</label>
                        <input type="text" className="form-control" id="distance-input" placeholder="Distance"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Calories">Calories Burned</label>
                        <input type="text" className="form-control" id="Calories-input" placeholder="Calories Burned"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Date">Date</label>
                        <input type="date" className="form-control" id="date-input" placeholder="Date"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit</button>
                </Form>
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Recent Activity</h3>
                <div className="historyLog" style={{overflowY:'auto'}}>
                    {
                        history ? (history).map(entry => {
                            return <ActivityItem key={entry.id} {...entry}/>
                        }) : <p>No History.</p>
                    }
                </div>
            </div>
        </Container>
    </div>
}
  
export default  Activity