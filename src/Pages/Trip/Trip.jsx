import './Trip.css'
import honeyMoon from "../../assets/Honey-moon.jpg"
import family from "../../assets/family.jpg"
import adventure from "../../assets/adventure.jpg"
import cultural from "../../assets/Cultural.jpg"
import wildlife from "../../assets/wildlife.jpg"
import ecotours from "../../assets/Eco-tour.jpg"
import luxury from "../../assets/luxury-vacation.jpg"
import beach from "../../assets/beach-holiday.jpg"
import culinary from "../../assets/culinary.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Trip = () => {
    return (
        <div>
            <section className="hero-trip">
                <h1>#Trips</h1>
                <p>Get Started</p>
            </section>

            <section className="trip-cards">
                <div className="trips">
                    <div className="trip-img">
                        <img src={honeyMoon} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Honey Moon</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={family} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Family</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={adventure} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Adventure</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={cultural} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Cultural Tours</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>
                <div className="trips">
                    <div className="trip-img">
                        <img src={wildlife} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Wildlife Safaris</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={ecotours} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Eco Tours</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={luxury} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Luxury Vacations</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={beach} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Beach Holiday</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

                <div className="trips">
                    <div className="trip-img">
                        <img src={culinary} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Calinary Tours</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt quae ullam maxime minima ducimus aliquid tempora quos ea accusantium.</p>
                        <div className="trip-location">
                            <button><FaLocationDot />      Kenya</button>
                        </div>
                    </div>
                    <div className="trip-cost">
                        <p>Reviews:  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h3>Ksh 100000 </h3>
                        <p>/group of 6</p> <h3> Ksh 20000  </h3>
                        <p>/person</p>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Trip