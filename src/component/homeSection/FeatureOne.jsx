import React from 'react'
import { FaWifi, FaSignal } from 'react-icons/fa';
import { IoMdWifi } from 'react-icons/io';

import './features.css'

const What_Items = () => {

    //icon styles
    let faStyles = { fontSize: "2rem", marginBottom: "1rem"};

    return (
        <div className="feature">
            <div className="feature-one">
                <h2 className="feature-one-header">What We Do</h2>
                <p className="feature-one-text">One speedify is better than two of something else.</p>
                <div className="feature-one-card-container">
                    <div className="feature-one-card">
                        <FaWifi style={faStyles}/>
                        <h2>Unlimited Wifi Internet</h2>
                        <p>And, as for the issue of children racking up bills on their parents' Kindles: Amazon has no added a password lock for wifi access.  Amazon doesn't mention any wifi fixes -- a particularly annoying issue for a device that only runs on wifi.</p>
                    </div>
                    <div className="feature-one-card">
                        <IoMdWifi style={faStyles}/>
                        <h2>Enhancing Hotspot Coverings</h2>
                        <p>hotspot allows multiple devices to share a broadband connection, but Verizon's iPhone currently holds an exclusive contract on mobile hotspot functionality.</p>
                    </div>
                    <div className="feature-one-card">
                        <FaSignal style={faStyles}/>
                        <h2>Unlimited Cellular Network</h2>
                        <p>Combined, all those individual decisions end up sending a signal to Google that a story is *really important* when there is no real signal;</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default What_Items
