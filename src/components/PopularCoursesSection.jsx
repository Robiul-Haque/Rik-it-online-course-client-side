import React, { useState } from 'react';
import AllCourse from './AllCourse';
import EnglishCourse from './EnglishCourse';
import DigitalMarketingCourse from './DigitalMarketingCourse';
import WebDevelopemntCourse from './WebDevelopemntCourse';
import GraphicsDesignCourse from './GraphicsDesignCourse';

const PopularCoursesSection = () => {
    const [toggle, setToggle] = useState('all-course');
    console.log(toggle);

    return (
        <section className='bg-custom-semipink pt-14'>
            <h2 className='text-custom-orange text-center text-4xl font-semibold'>Popular Courses</h2>
            <p className='text-center w-[80%] mx-auto mt-10 md:w-[60%]'>We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time.</p>
            <div className='flex md:justify-between gap-x-1 md:gap-x-0 md:w-[66%] mx-auto mt-6 md:px-0 px-1'>
                <h4 onClick={() => setToggle('all-course')} className={toggle === 'all-course' ? 'md:text-xl md:font-semibold cursor-pointer text-custom-orange text-center' : 'md:text-xl md:font-semibold cursor-pointer text-center'}>All Courses</h4>
                <h4 onClick={() => setToggle('graphics-design')} className={toggle === 'graphics-design' ? 'md:text-xl md:font-semibold cursor-pointer text-custom-orange text-center' : 'md:text-xl md:font-semibold cursor-pointer text-center'}>Graphic Design</h4>
                <h4 onClick={() => setToggle('web-development')} className={toggle === 'web-development' ? 'md:text-xl md:font-semibold cursor-pointer text-custom-orange text-center' : 'md:text-xl md:font-semibold cursor-pointer text-center'}>Web & Software</h4>
                <h4 onClick={() => setToggle('english-language')} className={toggle === 'english-language' ? 'md:text-xl md:font-semibold cursor-pointer text-custom-orange text-center' : 'md:text-xl md:font-semibold cursor-pointer text-center'}>English Language</h4>
                <h4 onClick={() => setToggle('digital-marketing')} className={toggle === 'digital-marketing' ? 'md:text-xl md:font-semibold cursor-pointer text-custom-orange text-center' : 'md:text-xl md:font-semiboldcursor-pointer text-center'}>Digital Marketing</h4>
            </div>
            <hr className='my-5 md:w-[70%] mx-auto border border-[#FE4C00]' />
            {
                toggle === 'all-course' && <AllCourse />
            }
            {
                toggle === 'graphics-design' && <GraphicsDesignCourse />
            }
            {
                toggle === 'web-development' && <WebDevelopemntCourse />
            }
            {
                toggle === 'english-language' && <EnglishCourse />
            }
            {
                toggle === 'digital-marketing' && <DigitalMarketingCourse />
            }
        </section>
    )
}

export default PopularCoursesSection;
