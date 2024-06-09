import './Trip.css'
import mtKenya from '../../assets/MtKenya.jpg'
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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
                        <img src={mtKenya} alt="" />
                    </div>
                    <div className="trip-description">
                        <h2>Mount Kenya</h2>
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