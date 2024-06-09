import './Destinations.css'
import mtKenya from '../../assets/MtKenya.jpg'
import mtRuwenzori from '../../assets/MtRwenzori.jpg'
import lNakuru from '../../assets/lake-nakuru.webp'
import tsavo from '../../assets/Tsavo.jpg'
import nairobiPark from '../../assets/park-national-nairobi.jpg'
import coastal from '../../assets/Coastal-Image.jpg'

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
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={mtRuwenzori} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Mount Ruwenzori</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={lNakuru} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Lake Nakuru</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={tsavo} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Tsavo National Park</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={nairobiPark} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Nairobi National Park</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

                <div className="destinations">
                    <img src={coastal} alt="" />
                    <button type="button">Book Now</button>
                    <div className="destination-text">
                        <h3>Coastal Kenya</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium inventore excepturi voluptatem voluptatum optio. Ipsa, dignissimos consequuntur! Reprehenderit, optio?</p>
                        <p>Price Per Group: Ksh 80000</p>
                        <p>Price Per Individual: 15000</p>
                    </div>
                </div>

            </section>
        </div >
    )
}

export default Destinations