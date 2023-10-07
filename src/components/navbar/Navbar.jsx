import {Link} from "react-router-dom"
import "./styles.css"
function Navbar() {
  return (
    <nav>
    <div className="nav">
             {/* our logo */}
        <h1>our logo</h1>
        <div className="navItems">
            <Link to="/">About us</Link>
            <Link to="/ourwork">Our works</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    </div>
       
    </nav>
  )
}

export default Navbar