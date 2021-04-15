import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Blogs from './Blogs/Blogs';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServiceFeture from './ServiceFeture/ServiceFeture';

import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="">
            <Header/>
            <Services/>
            <ServiceFeture/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;