import React from 'react';
import Banner from '../Components/Banner';
import About from './subsections/About';
import Projects from './subsections/Projects';
import Quote from './subsections/quote';
import Services from './subsections/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Quote />
            <Projects />
            <Services />
        </>
    )
}

export default Home;