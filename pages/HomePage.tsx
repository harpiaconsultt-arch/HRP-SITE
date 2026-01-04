import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Technology from '../components/Technology';
import Services from '../components/Services';
import ReportTypes from '../components/ReportTypes';
import Methodology from '../components/Methodology';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

const HomePage: React.FC = () => {
     useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <Hero />
            <Technology />
            <Services />
            <ReportTypes />
            <Methodology />
            <FAQ />
            <Team />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
};

export default HomePage;
