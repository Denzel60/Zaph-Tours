import './Newsletter.css'

function Newsletter() {
    return (
        <div>
            <section className="newsletter">
                <div className="newsletter-text">
                    <h5>sign up for Zaph Tours newsletter for weekly email updates on matters of <span>safaris and adventures</span>.</h5>
                </div>
                <div className="newsletter-form">
                    <input type="text" placeholder='Your email address' />
                    <button type="button">SignUp</button>
                </div>
            </section>
        </div>
    )
}

export default Newsletter