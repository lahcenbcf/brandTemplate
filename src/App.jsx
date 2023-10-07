import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
//import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";
import WorkDetail from "./pages/MovieDetail";
//animatinion
import { AnimatePresence } from "framer-motion";
function App() {
  const location=useLocation()
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<AboutUs />} />
            <Route path="/ourwork" element={<OurWork />} />
            <Route path="/work/:workname" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
         </Routes> 
    </AnimatePresence>
  );
}

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
