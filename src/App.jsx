import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
//import pages
import AboutUs from './pages/AboutUs'
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<AboutUs />} />
        
    </Routes>
    </Router>
  )
}


export default App
