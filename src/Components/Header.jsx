import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>Zaph Tour</h3>
            </div>
            <div className="navbar">
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/Destinations">Destinations</Link></h3>
                <h3><Link to="/Trip">Trip</Link></h3>
                <h3><Link to="/Contact">Contact Us</Link></h3>
            </div>
            <div className="travel-button">
                <button type="button">Travel Now</button>
            </div>
        </div >
    )
}

export default Header