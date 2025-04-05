import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Activity from './pages/Activity'

function App() {
  return (
    <div id='App'>
        <Sidebar style={{flex:'auto'}}/>
        <div id='body' style={{flex:'auto'}}>
          <Activity/>
        </div>
        
    </div>
  )
}

export default App
