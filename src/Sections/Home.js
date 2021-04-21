import React, { lazy } from 'react';
import Banner from '../Components/Banner';

const About = lazy(() => import('./subsections/About'));

const Home = () => {
    return (
        <>
            <Banner />
            <About />
        </>
    )
}

export default Home;