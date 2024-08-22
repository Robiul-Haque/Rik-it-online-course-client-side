import React, { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import header_logo from '../assets/header-logo.png';
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from '../components/Button';
import MenuList from '../components/MenuList';

const Navbar = () => {
    const [toogle, setToogle] = useState(true);
    const menuItems = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'About',
            path: '/about',
        },
        {
            label: 'SUCCESS STORY',
            path: '/success-story',
        },
        {
            label: 'FREELANCING',
            path: '/freelancing',
        },
        {
            label: 'CONTACT',
            path: '/contact',
        },
    ]

    return (
        <>
            <section className='bg-[#FE4C00] flex justify-between px-4 md:px-20 py-4'>
                <div className='flex flex-col md:flex-row md:gap-10'>
                    <i className='flex items-center'>
                        <IoCallOutline className='mx-1' />
                        +8801928111128
                    </i>
                    <i className='flex items-center'>
                        <MdEmail className='mx-1.5' />
                        help@rikitinstitute.com
                    </i>
                </div>
                <select className='rounded-md cursor-pointer outline-none p-1' name="language">
                    <option value="English">English</option>
                    <option value="bangla">Bangla</option>
                </select>
            </section>
            <nav className='flex justify-between items-center px-4 py-2 md:px-20 md:py-3'>
                <img src={header_logo} alt="Header-logo" className='w-4/12 md:w-2/12' />
                <MenuList menuItems={menuItems} className={'md:flex items-center flex-col hidden md:flex-row md:gap-x-10 font-semibold px-2'} />
                <Button leftIcon={<IoMdBook />} title={'COURSE DETAILS'} rightIcon={<IoMdArrowDropdown className='size-5' />} className={"md:flex justify-center items-center gap-x-2 bg-custom-orange text-white hidden font-medium w-52 h-10 rounded-lg px-2"} />
                {/* responsive menu */}
                <div className='block md:hidden'>
                    {
                        toogle ?
                            <i onClick={() => setToogle(false)}>
                                <IoMenu className='size-10' />
                            </i>
                            :
                            <>
                                <i onClick={() => setToogle(true)}>
                                    <IoCloseCircleOutline className='size-10' />
                                </i>
                                <MenuList menuItems={menuItems} className={'flex items-center flex-col gap-y-3 font-semibold p-5 rounded-lg absolute top-[150px] right-[32%] bg-slate-50'} />
                            </>
                    }
                </div>
                <Button leftIcon={<IoMdBook />} title={'COURSE DETAILS'} rightIcon={<IoMdArrowDropdown className='size-5' />} className={"flex items-center gap-x-1 bg-custom-orange text-white md:hidden font-medium p-2 text-xs rounded-lg"} />
            </nav>
        </>
    )
}

export default Navbar;
