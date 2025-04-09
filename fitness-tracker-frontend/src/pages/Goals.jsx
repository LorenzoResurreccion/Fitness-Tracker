import { useState } from "react";
import { Container, Form } from "react-bootstrap";


function Goals() {
    
    const [history, setHistory] = useState()

    function handleSubmit(e) {
        e?.preventDefault()

        //get inputs

        //check inputs

        //post request to API
    }


    return <div>
        <Container style={{width: 'auto', display: 'flex'}}>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Post New Goal </h3>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="Title">Title</label>
                        <input type="text" className="form-control" id="title-input" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Details">Details</label>
                        <input type="text" className="form-control" id="details-input" placeholder="Details"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Start Date"> Start Date</label>
                        <input type="date" className="form-control" id="start-input" placeholder="Start Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="End Date"> Start Date</label>
                        <input type="date" className="form-control" id="end-input" placeholder="End Date"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Submit</button>
                    
                </Form>
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Goals</h3>
                <div className="historyLog" style={{overflowY:'auto'}}> {
                    history ? (history).map(entry => {
                        return <WorkoutItem key={entry.id} {...entry}/>
                    }) : <p>No History.</p>
                }</div>
            </div>
        </Container>
    </div>
}
  
export default Goals;