import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
    return (
        < div >
            <section className="hero">
                <div className="icons">
                    <p><FaFacebook /></p>
                    <p><FaXTwitter /></p>
                    <p><FaInstagramSquare /></p>
                    <p><FaYoutube /></p>
                </div>
                <h3>Best safaris and adventures</h3>
                <h3>Explore the world with us</h3>
                <p>Get Started</p>
            </section>


        </div >
    )
}

export default Home