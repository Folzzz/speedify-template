import React from 'react'
import Button from '../button/Button'

import './hero.css'

const Hero = () => {
    return (
        <>
           <header className="hero-container">
            <h1>Enhance Your Internet Speed </h1>
            <p>The pity is, most people still likely believe that, as Michael Bloomberg once said, “there’s a connection between being generous and being successful.” There is a connection, but probably not the one we have supposed.</p>
            <div className="header-btn-wrapper">
                <Button className="header-btn" buttonSize="btn-large" buttonStyle="btn-outline">WATCH DEMO</Button>
                <Button className="header-btn" buttonSize="btn-large" buttonStyle="btn-primary">VIEW OPTIONS</Button>
            </div>
           </header> 
        </>
    )
}

export default Hero
