import React from 'react'
import Hero from '../component/herosection/Hero'
import Sponsor from '../component/sponsor/Sponsor'
import FeatureOne from '../component/homeSection/FeatureOne'
import FeatureTwo from '../component/homeSection/FeatureTwo'
import FeatureThree from '../component/homeSection/FeatureThree'
import FeatureFour from '../component/homeSection/FeatureFour'
import FeatureFive from '../component/homeSection/FeatureFive'

const Home = () => {
    return (
        <>
            <Hero/>
            <Sponsor/>
            <FeatureOne/>
            <FeatureTwo/>
            <FeatureThree/>
            <FeatureFour/>
            <FeatureFive/>
        </>
    )
}

export default Home
