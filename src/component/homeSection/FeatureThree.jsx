import React from 'react'
import { subCat } from '../../data/subCat'
import Button from '../button/Button'

import './features.css'

const FeatureThree = () => {
    return (
        <div className="feature feature-three">
            <h2 className="feature-one-header">Speedify Data Plan</h2>
            <p className="feature-one-text">We are now in the midst of a big data bubble.</p>
            
            <div className="feature-one-card-container feature-three-cards">

                {
                    subCat.map((sub, index) => (
                        <div key={index} className="feature-one-card">
                            <h5 className="faint-head"> {sub.faintHead} </h5>
                            <h2 className="bold-head"> {sub.boldHead} </h2>
                            <p className="bold-text"> {sub.BoldPara} </p>
                            <p className="faint-text"> {sub.faintPara} </p>
                        </div>
                    ))
                }

            </div>
            <div className="feature-three-btn">
                <Button className="" buttonSize="btn-large" buttonStyle="btn-outline">VIEW ALL PLANS</Button>
            </div>
        </div>
    )
}

export default FeatureThree
