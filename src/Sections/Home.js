import React, { lazy } from 'react';
import Banner from '../Components/Banner';
const About = lazy(() => import('./subsections/About'));
const Projects = lazy(() => import('./subsections/Projects'));
const Quote = lazy(() => import('./subsections/quote'));
const Services = lazy(() => import('./subsections/Services'));

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Quote />
            <Services />
            <Projects />
        </>
    )
}

export default Home;