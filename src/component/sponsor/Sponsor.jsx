import React from 'react'

import './sponsor.css'
import eyowo from '../../img/eyowo.png'
import piggy from '../../img/piggy.png'
import healthbox from '../../img/healthbox.png'
import flutterwave from '../../img/flutterwave.png'
import oracle from '../../img/oracle.png'
import paystack from '../../img/paystack.png'

const Sponsor = () => {
    return (
        <div className="sponsor-container">
            <p className="sponsor-text">Trusted by top companies</p>
            <div className="sponsor-img-wrapper">
                <img src={piggy} alt="piggyvest"/>
                <img src={healthbox} alt="healthbox"/>
                <img src={flutterwave} alt="paystack"/>
                <img src={eyowo} alt="eyowo"/>
                <img src={oracle} alt="flutterwave"/>
                <img src={paystack} alt="oracle"/>
            </div>
        </div>
    )
}

export default Sponsor
