import './Destinations.css'
import mtKenya from '../../assets/MtKenya.jpg'

const Destinations = () => {
    return (
        <div>
            <section className="hero-dest">
                <h1>#Destinations</h1>
                <p>Get Started</p>
            </section>

            <section className="destination-cards">
                <div className="destinations">
                    <img src={mtKenya} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Mount Kenya</h3>
                        <p><span>Description</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group:</p>
                        <p>Price Per Group:</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={mtKenya} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Mount Kenya</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group:</p>
                        <p>Price Per Group:</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={mtKenya} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Mount Kenya</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group:</p>
                        <p>Price Per Group:</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={mtKenya} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Mount Kenya</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group:</p>
                        <p>Price Per Group:</p>
                    </div>
                </div>

            </section>
        </div >
    )
}

export default Destinations