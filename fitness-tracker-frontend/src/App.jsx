import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Activity from './pages/Activity'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Workouts from './pages/Workouts'
import Goals from './pages/Goals'
import Meals from './pages/Meals'

function App() {
  return (
    <BrowserRouter>
      <div id='App'>
        <div style={{flex: 0, width: 'auto'}}>
          <Sidebar/>
        </div>
        <div style={{flex:1, width: 'auto'}}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/activity' element={<Activity/>}/>
            <Route path='/workouts' element={<Workouts/>}/>
            <Route path='/goals' element={<Goals/>}/>
            <Route path='/meals' element={<Meals/>}/>
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>

    
  )
}

export default App
