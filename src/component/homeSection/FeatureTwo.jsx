import React from 'react'
import FeatureItem from './FeatureItem'

import './features.css'
import data_ill from '../../img/data-ill.png'

const FeatureTwo = () => {
    return (
        <div className="feature feature-two">
            <FeatureItem 
                src={data_ill}
                alt="data security"
                heading="Data Helps You Achieve Your Dreams"
                paragraph1="Forecasts are best at telling us what old data tells us about new data, and the thing about using existing data is that large deviations in the underlying assumptions of those data may go unnoticed."
                paragraph2="This data-centric view of 'data-sharing-is-bad and control-your-data' borders on blaming the victim instead of criticizing the sexist culture that makes this data dangerous in the first place."
            />
        </div>
    )
}

export default FeatureTwo
