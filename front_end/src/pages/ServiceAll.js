import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from '../components/ServiceCard/Cards';
import Reviews from '../components/Reviews/Reviews';

export default function ServicesAll() {
    return (
        <>
        <Navbar />
        <Cards />
        <Reviews />
        <Footer />
        </>
    )
}