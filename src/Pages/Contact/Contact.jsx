/* eslint-disable react/no-unescaped-entities */
import './Contact.css'
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <section className="about-contact">
                <div className="contact-info">
                    <p>GET IN TOUCH</p>
                    <h3>Visit one of our agency locations or contact us today</h3>
                    <h4>Head Office</h4>
                    <p><MdPlace />    Located in Murang'a Town</p>
                    <p><FaPhoneAlt />    contact@example.com</p>
                    <p><MdEmail />    contact@example.com</p>
                    <p><FaRegClock />    Monay to Saturday: 9:00am to 4pm</p>
                </div>
                <div className="contact-info">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5067340730834!2d37.14463730970109!3d-0.7160659992739405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289873299b19ed%3A0x97675389aba81506!2sMurang&#39;a%20University%20of%20Technology!5e0!3m2!1sen!2ske!4v1717931815079!5m2!1sen!2ske" width="600" height="450" ></iframe>
                </div>
            </section>

            <section className="contact">
                <div className="contact-form">
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder='Enter your phone number here +25412345678' />
                    <input type="email" placeholder='Enter your email here e.g. example@gmail.com' name="" id="" />
                    <input type="text" placeholder='Enter Subject' />
                    <textarea name="message" rows="40" cols="50">Your message</textarea>
                </div>
            </section>
        </div>
    )
}

export default Contact