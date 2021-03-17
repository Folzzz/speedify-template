import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import {navData} from '../../data/navData'

import './footer.css'

const Footer = () => {

    // icon styles
    let iconStyles = { fontSize: "2em", color: "#fff"};

    return (
        <footer>

            <div className="footer-brand-container">
                <div className="footer-brand">
                    <Link to='/' className="footer-logo">
                        <h3><i>SPEEDIFY</i></h3>
                    </Link>
                </div>

                <p> Hope it's wifi, it's wifi, we hope it's wifi...</p>
            </div>

            <div className="footer-links">
                <div className="quick-links-wrapper">
                    <h4>Quick Links</h4>
                    <ul>
                    {
                        navData.map((item, index) => (
                            <li key={index} className="quick-links-item">
                                <Link to={item.link} className="quick-link">{item.title}</Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>

                <div className="social-links">
                    <h4>Social links</h4>
                    <div>
                        <Link to="/" className="media-link"><FaFacebook style={iconStyles}/></Link>
                        <Link to="/" className="media-link"><FaTwitter style={iconStyles}/></Link>
                        <Link to="/" className="media-link"><FaLinkedinIn style={iconStyles}/></Link>
                        <Link to="/" className="media-link"><FaYoutube style={iconStyles}/></Link>
                    </div>
                </div>

                <div class="contact-link">
                    <h4>CONTACT US</h4>
                    <div class="contact-details">
                        <p>Call Us: +234 (0) 816 311 7981</p>
                        <address>Office: Ishaga Road, Yaba, Lagos, Nigeria</address>
                    </div>
                </div>
            </div>

            <p className="copyright">&copy; 2021. Speedify built by Folzzz</p>
        </footer>
    )
}

export default Footer
