import React from 'react'
import Button from '../button/Button'

import broadband from '../../img/broadband.png'

const FeatureFive = () => {
    return (
        <div className="feature-alt">
            <div className="feature-item feature-five-container">
                <div className="feature-item-content feature-five-content">
                    
                    <h2 className="feature-item-header">Wireless Broadband Connectivity.</h2>

                    <p className="feature-item-para">Hollywood owning their own digital rights management (DRM) format and streaming capabilities mean they won't have to depend on technology built by Apple and Amazon in the near term.It sounds like the sort of place that makes designer coffee cake or handcrafted pine furniture, but until recently it was the largest landowner in Florida, a former timber barony that has spent the past decade or so transforming itself into a real-estate developer.</p>

                    <Button className="feature-five-btn" buttonSize="btn-medium" buttonStyle="btn-outline">BUY NOW</Button>
                </div>
                <div className="feature-item-img-wrapper feature-five-img-wrapper">
                <img src={broadband} alt="buy image"/>
                </div>
            </div>
        </div>
    )
}

export default FeatureFive
