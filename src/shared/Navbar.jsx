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
    const [language, setLanguage] = useState("en");
    const menuItems = [
        {
            en: 'Home',
            bn: 'বাড়ি',
            path: '/',
        },
        {
            en: 'Course',
            bn: 'কোর্স',
            path: '/course',
        },
        {
            en: 'Rik offline',
            bn: 'রিক অফলাইন',
            path: 'https://rik-offlinecourse.com/',
        },
        {
            en: 'Blog',
            bn: 'ব্লগ',
            path: 'https://rik-offlinecourse.com/blog/',
        },
        {
            en: 'About',
            bn: 'সম্পর্কে',
            path: 'https://rik-offlinecourse.com/about/',
        },
        {
            en: 'Contact',
            bn: 'যোগাযোগ',
            path: 'https://rik-offlinecourse.com/contact/',
        },
        {
            en: 'SUCCESS STORY',
            bn: 'সাফল্যের গল্প',
            path: 'https://rik-offlinecourse.com/success-story/',
        },
    ]
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "bn" : "en"));
    };

    return (
        <>
            <section className='bg-[#FE4C00] flex justify-between px-4 md:px-20 py-4'>
                <div className='flex flex-col md:flex-row md:gap-10'>
                    <i onClick={() => window.open('mailto:help@rikitinstitute.com')} className='flex items-center text-white font-bold not-italic cursor-pointer'>
                        <MdEmail className='mx-1.5' />
                        help@rikitinstitute.com
                    </i>
                </div>
                <section className="switch">
                    <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={toggleLanguage} />
                    <label htmlFor="language-toggle"></label>
                    <span className="on">EN</span>
                    <span className="off">BN</span>
                </section>
            </section>
            <nav className='flex justify-between items-center px-4 py-2 md:px-20 md:py-3'>
                <img src={header_logo} alt="Header-logo" className='w-4/12 md:w-2/12' />
                {/* large device menu */}
                <MenuList menuItems={menuItems} language={language} listStyle={'hover:text-[#FE4C00] transition-all'} className={'lg:flex items-center flex-col hidden lg:flex-row md:gap-x-8 font-semibold px-2'} />
                <div className='hidden md:flex gap-x-5'>
                    <Button title={'Admin Login'} className={"bg-custom-orange text-white font-medium w-40 h-12 rounded-xl px-3"} />
                    <Button title={'Sub-Admin Login'} className={"bg-custom-orange text-white font-medium w-40 h-12 rounded-xl px-3"} />
                </div>
                {/* responsive menu */}
                <div className='block lg:hidden'>
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
                                <MenuList menuItems={menuItems} className={'flex items-center flex-col gap-y-3 font-semibold p-5 rounded-lg z-50 absolute top-[130px] right-[33%] bg-slate-50'} />
                            </>
                    }
                </div>
                <Button leftIcon={<IoMdBook />} title={'Snior ID'} rightIcon={<IoMdArrowDropdown className='size-5' />} className={"md:hidden flex justify-center items-center gap-x-2 bg-custom-orange text-white font-medium w-36 h-10 rounded-lg px-2"} />
            </nav>
        </>
    )
}

export default Navbar;
