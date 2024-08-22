import React from 'react';
import Rating from 'react-rating';
import web_development from '../assets/web development online.png';
import { PiStarThin } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

const WebDevelopemntCourse = () => {
    return (
        <div className='flex md:justify-around md:flex-row flex-col md:w-[70%] w-[70%] gap-y-10 mx-auto'>
            <div className='md:w-64 rounded-lg border border-[#FE4C00]'>
                <img className='w-full rounded-t-lg' src={web_development} alt="web_development" />
                <div className='p-3 text-center'>
                    <h2 className='font-semibold'>Full Stack Web Development</h2>
                    <div className='my-5'>
                        <Rating initialRating={4} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <p>6000 BDT</p>
                        <button className='bg-custom-orange px-3 py-1 rounded-lg font-semibold'><a href="https://rik-offlinecourse.com/courses/full-stack-web-development/">CHEAK OUT</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopemntCourse;
