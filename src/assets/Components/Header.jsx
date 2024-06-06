import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="logo">
                <h2>Zaph Tour</h2>
            </div>
            <div className="navbar">
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/Destinations">Destinations</Link></h2>
                <h2><Link to="/Trip">Trip</Link></h2>
                <h2><Link to="/Contact">Contact Us</Link></h2>
            </div>
        </div >
    )
}

export default Header