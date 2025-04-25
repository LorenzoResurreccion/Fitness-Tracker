import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../components/Sidebar'
import Activity from '../pages/Activity'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Workouts from '../pages/Workouts'
import Goals from '../pages/Goals'
import Meals from '../pages/Meals'
import Home from '../pages/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'
import { LoginStatusProvider } from '../contexts/LoginStatusContext'
import Settings from '../pages/Settings'


function App() {

  return (
    <LoginStatusProvider>

    
      <BrowserRouter>
        <div id='App'>
          <div style={{flex: 0, width: 'auto'}}>
            <Sidebar/>
          </div>
          <div style={{flex:1, width: 'auto'}}>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/activity' element={<Activity/>}/>
              <Route path='/workouts' element={<Workouts/>}/>
              <Route path='/goals' element={<Goals/>}/>
              <Route path='/meals' element={<Meals/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
        </div> 
      </BrowserRouter>
    </LoginStatusProvider>
  )
}

export default App
