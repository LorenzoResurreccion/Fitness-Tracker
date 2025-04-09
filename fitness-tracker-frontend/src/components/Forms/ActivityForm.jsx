import {Form} from "react-bootstrap"


function ActivityForm(props) {

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
        fetch(props.url, {
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
            if (res.status === 201) {
                props.refresh()
                alert("Successfully Posted!")
            } else {
                alert("An Error Occurred, please try again!")
            }
        })
    }
    


    return <div style={{ flex: 1, padding: '10px' }}>
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

}

export default ActivityForm