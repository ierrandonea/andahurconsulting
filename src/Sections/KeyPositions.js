import React, { lazy } from 'react';

const Quote = lazy(() => import('./subsections/quote'));
const Services = lazy(() => import('./subsections/Services'));

const KeyPositions = () => {
    return (
        <>
            <Quote />
            <Services />
        </>
    );
};

export default KeyPositions;
