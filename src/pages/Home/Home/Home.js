import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../../Gallery/Gallery';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import CustomerSay from '../CustomerSay/CustomerSay';
import Feature from '../Feature/Feature';
import LatestPlace from '../LatestPlace/LatestPlace';
import OurTeam from './../../OurTeam/OurTeam';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Feature></Feature>
            <Award></Award>
            <CustomerSay></CustomerSay>
            <LatestPlace></LatestPlace>
            <Gallery></Gallery>
            <OurTeam></OurTeam>
            <PaymentMethod></PaymentMethod>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;