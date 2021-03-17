import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars} from 'react-icons/fa'
import { navData } from '../../data/navData'

import './nav.css'

const Nav = () => {
    // state to manage the nav-menu bar
    const [click, setClick] = useState(false);

    //toggle click state with menu icon
    const toggleMenuClick = () => {
        setClick(!click);
    }

    //click state to false on click of nav links
    const closeMobileMenu = () => {
        setClick(false);
    }

    //icon styles
    let iconStyles = { fontSize: "2em", color: "#fff"};

    return (
        <nav>
            <div className="nav-container">
                <Link to='/' className="nav-brand" onClick={closeMobileMenu}>
                    <h3><i>SPEEDIFY</i></h3>
                </Link>

                <div className="nav-menu-icon" onClick = {toggleMenuClick}>
                    {click ? <FaTimes style = {iconStyles} /> : <FaBars style = {iconStyles} />}
                </div>

                <ul className={`nav-link-group ${click ? `active`: ''}`}>
                    {
                        navData.map((item, index) => (
                            <li key={index} onClick={closeMobileMenu}>
                                <Link to={item.link} className="nav-link">{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nav
