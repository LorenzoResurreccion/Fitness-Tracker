import {Form} from "react-bootstrap"


function WorkoutForm(props) {

    function handleSubmit(e) {
        e?.preventDefault()
        //get input values
        let category  = document.getElementById('category-input').value
        let name  = document.getElementById('name-input').value
        let duration = document.getElementById('duration-input').value
        let weight = document.getElementById('weight-input').value
        let date = document.getElementById('date-input').value
        let details = document.getElementById('details-input').value

        //check input data
        let warning = 'The following fields must not be empty:\n\n'
        let error = false
        if (!name) {
            error = true
            warning += 'name\n'
        }
        if (!duration) {
            error = true
            warning += 'duration\n'
        }
        if (!weight) {
            error = true
            warning += 'weight\n'
        }
        if (!date) {
            error = true
            warning += 'date\n'
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
                "category": category,
                "name": name,
                "duration": duration,
                "date": date,
                "weight": weight,
                "details":  details
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
        <h3>Post New Workout </h3>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control" id="category-input" aria-describedby="categrory-input"> 
                    <option value={'Legs'}>Legs</option>
                    <option value={'Arms'}>Arms</option>
                    <option value={'Back'}>Back</option>
                    <option value={'Core'}>Core</option>
                    <option value={'Shoulders'}>Shoulders</option>
                    <option value={'Cardio'}>Cardio</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="Exercise Name">Name of Exercise</label>
                <input type="text" className="form-control" id="name-input" placeholder="Name"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="duration"> Duration (minutes)</label>
                <input type="text" className="form-control" id="duration-input" placeholder="Duration"/>
            </div>
            <div className="form-group">
                <label htmlFor="Weight">Weight (lbs)</label>
                <input type="text" className="form-control" id="weight-input" placeholder="weight used"/>
            </div>
            <div className="form-group">
                <label htmlFor="Date">Date</label>
                <input type="date" className="form-control" id="date-input" placeholder="Date"/>
            </div>
            <div className="form-group">
                <label htmlFor="Details">Details (optional)</label>
                <input type="text" className="form-control" id="details-input" placeholder="3 sets x 10 reps"/>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Submit</button>
        </Form>
    </div>

}

export default WorkoutForm