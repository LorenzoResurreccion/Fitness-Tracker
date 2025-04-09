import { useState } from "react"
import { Container, Form } from "react-bootstrap"

function Meals() {
    
    const [history, setHistory] = useState()

    return <div>
        <Container style={{width: 'auto', display: 'flex'}}>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Add Meal </h3>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="Meal">Meal</label>
                        <select className="form-control" id="meal-input" aria-describedby="meal-input"> 
                            <option value={'Breakfast'}>Breakfast</option>
                            <option value={'Lunch'}>Lunch</option>
                            <option value={'Dinner'}>Dinner</option>
                            <option value={'Snack'}>Snack</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="food">Food</label>
                        <input type="text" className="form-control" id="food-input" placeholder="Food"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="calories">Calories</label>
                        <input type="text" className="form-control" id="calories-input" placeholder="calories"/>
                    </div>
                    <div>
                        <label htmlFor="Macros">Macros</label>
                        <div >
                            <div style={{display:'flex'}}>
                                <label htmlFor="protein" style={{flex: 0, padding: '5px', paddingLeft: '1.5rem'}}>Protein: </label>
                                <input type="text" className="form-control" id="protein-input" placeholder="Protein" style={{flex:1}}/>
                            </div>
                            <div style={{display:'flex'}}>
                                <label htmlFor="fats" style={{flex: 0, padding: '5px', paddingLeft: '1.5rem', paddingRight: '2.5rem'}}>Fats: </label>
                                <input type="text" className="form-control" id="fats-input" placeholder="Fats" style={{flex:1}}/>
                            </div>
                            <div style={{display:'flex'}}>
                                <label htmlFor="carbs" style={{flex: 0, padding: '5px', paddingLeft: '1.5rem', paddingRight: '1.25rem'}}>Carbs: </label>  
                                <input type="text" className="form-control" id="carbs-input" placeholder="Carbohydrates" style={{flex:1}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="Date">Date</label>
                        <input type="date" className="form-control" id="date-input" placeholder="Date"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Submit</button>
                    
                </Form>
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Meals</h3>
                <div className="historyLog" style={{overflowY:'auto'}}> {
                    history ? (history).map(entry => {
                        return <WorkoutItem key={entry.id} {...entry}/>
                    }) : <p>No History.</p>
                }</div>
            </div>
        </Container>
    </div>
}
  
export default Meals