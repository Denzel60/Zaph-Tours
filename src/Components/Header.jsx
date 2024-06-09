import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>Zaph Tour</h3>
            </div>
            <div className="navbar">
                <h4><Link to="/">Home</Link></h4>
                <h4><Link to="/Destinations">Destination</Link></h4>
                <h4><Link to="/Trip">Trip</Link></h4>
                <h4><Link to="/Contact">Contact Us</Link></h4>
            </div>
            <div className="travel-button">
                <button type="button">Travel Now</button>
            </div>
        </div >
    )
}

export default Header