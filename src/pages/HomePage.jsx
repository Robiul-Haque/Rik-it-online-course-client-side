import React from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from '../components/HeroSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import DetailSection from '../components/DetailSection';
import Footer from '../shared/Footer';


const HomePage = () => {
    return (
        <>
            <header className='bg-[#FFEFEF] md:h-[80%] h-full relative'>
                <Navbar />
                <HeroSection />
            </header>
            <PopularCoursesSection />
            <DetailSection />
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default HomePage
