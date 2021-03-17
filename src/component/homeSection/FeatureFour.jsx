import React from 'react'
import FeatureItem from './FeatureItem'

import './features.css'
import hacker from '../../img/hacker.png'

const FeatureFour = () => {
    return (
        <div className="feature feature-four">
            <FeatureItem 
                src={hacker}
                alt="speedy connection"
                heading="5G Speedy Connection On All Devices"
                paragraph1="Those of us who are connection junkies should perhaps focus more on inclusion than connection per se, or on reconnecting communities that have been stratified and separated."
                paragraph2="The pity is, most people still likely believe that, as Michael Bloomberg once said, there’s a connection between being generous and being successful. There is a connection, but probably not the one we have supposed."
            />
        </div>
    )
}

export default FeatureFour
