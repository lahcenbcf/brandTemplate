import {BrowserRouter as Router,Route,Routes, Outlet} from 'react-router-dom'
//import pages
import AboutUs from './pages/AboutUs'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<AppLayout />}>
    <Route path='/' element={<AboutUs />} />
    </Route>
    
        
    </Routes>
    </Router>
  )
}

const AppLayout=()=>{
  return(
    <>
    <Navbar />
    <Outlet />
    </>
    
  )
}


export default App
