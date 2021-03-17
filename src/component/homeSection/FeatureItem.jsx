import React from 'react'

const FeatureItem = ({ src, alt, heading, paragraph1, paragraph2 }) => {
    return (
        <div>
            <div className="feature-item">
                <div className="feature-item-img-wrapper">
                    <img src={src} alt={alt}/>
                </div>
                <div className="feature-item-content">
                    <h2 className="feature-item-header">{heading}</h2>
                    <p className="feature-item-para">{paragraph1}</p>
                    <p className="feature-item-para">{paragraph2}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureItem
