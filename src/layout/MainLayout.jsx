import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const MainLayout = () => {
    return (
        <>
            <Outlet></Outlet>
            <ScrollToTop smooth color="#FE4C00" className='scrollToTop' />
        </>
    )
}

export default MainLayout
