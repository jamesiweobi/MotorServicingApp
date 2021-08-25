import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServicePage from '../components/ServicePage/ServicePage';
import Services from '../components/services/servicesDisplay';

export default function ServicesAll() {
    return (
        <>
        <Navbar />
        <ServicePage />
        <Services />
        <Footer />
        </>
    )
}