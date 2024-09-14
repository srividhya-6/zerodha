import React from 'react';

import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

import Hero from './hero';

function HomePage() {
    return (
        <>
       
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount></OpenAccount>
       
        </>

     );
}

export default HomePage;