import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Feature from '../Feature/Feature';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Feature></Feature>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;