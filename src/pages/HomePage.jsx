import React from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from '../components/HeroSection';


const HomePage = () => {
    return (
        <>
            <header className='bg-[#FFEFEF] md:h-[80%] h-full relative'>
                <Navbar />
                <HeroSection />
            </header>

            This is home page
        </>
    )
}

export default HomePage
