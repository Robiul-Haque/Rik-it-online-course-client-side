import React from 'react';
import PopularCoursesSection from '../components/PopularCoursesSection';
import DetailSection from '../components/DetailSection';
import HeroSection from '../components/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <PopularCoursesSection />
            <DetailSection />
        </>
    )
}

export default Home;
