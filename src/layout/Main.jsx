import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <>
            <header className='bg-[#FFEFEF] md:h-[80%] h-full relative'><Navbar /></header>
            <Outlet></Outlet>
            <footer><Footer /></footer>
            <ScrollToTop smooth color="#FE4C00" className='scrollToTop' />
        </>
    )
}

export default Main;
