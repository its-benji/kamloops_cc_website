import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App";

function NavigationBar() {

  return (
    <div>
        <Router>
            <nav >
                <Link to ="/">Home</Link>
                <Link to ="/about">About Us</Link>
                <Link to ="/sermons">Sermons</Link>
                <Link to ="/contact">Contact Us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<App />} />
                <Route path="/sermons" element={<App />} />
                <Route path="/contact" element={<App />} />
            </Routes>
        </Router>
    </div>
  )
}

export default NavigationBar
