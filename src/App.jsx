import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
//import pages
import About from './components/About/About'
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<About />} />
        
    </Routes>
    </Router>
  )
}


export default App
