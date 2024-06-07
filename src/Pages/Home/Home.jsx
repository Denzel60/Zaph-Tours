import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import f1Img from '../../assets/f1.png'
import f2Img from '../../assets/f2.png'
import f3Img from '../../assets/f3.png'
import f4Img from '../../assets/f4.png'
import f5Img from '../../assets/f5.png'
import f6Img from '../../assets/f6.png'
import mtKenya from '../../assets/MtKenya.jpg'
import mtRuwenzori from '../../assets/MtRwenzori.jpg'
import lNakuru from '../../assets/lake-nakuru.webp'
import tsavo from '../../assets/Tsavo.jpg'
import nairobiPark from '../../assets/park-national-nairobi.jpg'
import coastal from '../../assets/Coastal-Image.jpg'
import { FaStar } from "react-icons/fa";

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

            <section className="about">

                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt recusandae error perferendis esse itaque iste porro maxime corporis vel sint eos excepturi, quo rem perspiciatis fuga cupiditate quod sapiente adipisci repellendus quia tempore enim hic neque. Necessitatibus fugiat vel est eligendi voluptatum mollitia inventore enim optio dolorem fuga, sequi aut nisi molestiae dolorum, quis, in assumenda animi asperiores expedita facilis quasi harum. Illum pariatur ipsa nostrum officia sapiente, omnis nesciunt neque repellendus necessitatibus culpa exercitationem amet quia incidunt ad. Labore, aut provident. Dignissimos, dolores fugit. Sapiente dignissimos consectetur voluptas commodi mollitia iure quam quaerat eos voluptatum. Quae, sequi pariatur.</p>

                <div className="about-sections">
                    <div className="about-box">
                        <img src={f1Img} alt="" />
                        <h6>Free Booking</h6>
                    </div>
                    <div className="about-box">
                        <img src={f2Img} alt="" />
                        <h6>Online Booking</h6>
                    </div>
                    <div className="about-box">
                        <img src={f3Img} alt="" />
                        <h6>Save Money</h6>
                    </div>
                    <div className="about-box">
                        <img src={f4Img} alt="" />
                        <h6>Fun</h6>
                    </div>
                    <div className="about-box">
                        <img src={f5Img} alt="" />
                        <h6>Happy Customers</h6>
                    </div>
                    <div className="about-box">
                        <img src={f6Img} alt="" />
                        <h6>F24/7 Support</h6>
                    </div>
                </div>
            </section>

            <section className="featured">
                <h1>Featured Destinations</h1>
                <div className="features">
                    <div className="featured-destination">
                        <img src={mtKenya} alt="" />
                        <div className="featured-rating">
                            <h3>Mount Kenya</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>

                    <div className="featured-destination reverse">
                        <img src={mtRuwenzori} alt="" />
                        <div className="featured-rating">
                            <h3>Mount Ruwenzori</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>
                    <div className="featured-destination">
                        <img src={lNakuru} alt="" />
                        <div className="featured-rating">
                            <h3>Lake Nakuru</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>

                    <div className="featured-destination reverse">
                        <img src={tsavo} alt="" />
                        <div className="featured-rating">
                            <h3>Tsavo National Park</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>

                    <div className="featured-destination">
                        <img src={nairobiPark} alt="" />
                        <div className="featured-rating">
                            <h3>Narobi National Park</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>
                    <div className="featured-destination reverse">
                        <img src={coastal} alt="" />
                        <div className="featured-rating">
                            <h3>Coastal Kenya</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel non accusamus dolorem quisquam ab tempora molestiae eaque, fuga quae?</p>
                            <div className="rating">
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                                <p><FaStar /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">&rarr;</a>
                </div>
            </section>
        </div >
    )
}

export default Home