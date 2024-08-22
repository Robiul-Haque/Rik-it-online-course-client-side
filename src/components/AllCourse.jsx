import React from 'react';
import Rating from 'react-rating';
import data_entry from '../assets/data-entry.jpg';
import talimun_quran from '../assets/talimun quran.png';
import combo_course from '../assets/combo-course.jpeg';
import online_word from '../assets/online-word.png';
import { PiStarThin } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

const AllCourse = () => {
    return (
        <div className='flex md:justify-around md:flex-row flex-col md:w-[70%] w-[70%] md:gap-x-2 gap-y-10 mx-auto'>
            <div className='md:w-64 rounded-lg border border-[#FE4C00]'>
                <img className='w-full rounded-t-lg' src={data_entry} alt="data_entry" />
                <div className='p-3 text-center'>
                    <h2 className='font-semibold'>Data Entry</h2>
                    <div className='my-5'>
                        <Rating initialRating={3} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <p>3500 BDT</p>
                        <button className='bg-custom-orange px-3 py-1 rounded-lg font-semibold'><a href="https://rik-offlinecourse.com/courses/ডাটা-এন্ট্রি">CHEAK OUT</a></button>
                    </div>
                </div>
            </div>
            <div className='md:w-64 rounded-lg border border-[#FE4C00]'>
                <img className='w-full rounded-t-lg' src={talimun_quran} alt="talimun_quran" />
                <div className='p-3 text-center'>
                    <h2 className='font-semibold'>তালিমুল কুরআন</h2>
                    <div className='my-5'>
                        <Rating initialRating={3} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <p>3000 BDT</p>
                        <button className='bg-custom-orange px-3 py-1 rounded-lg font-semibold'><a href="https://rik-offlinecourse.com/courses/talimun-quran/">CHEAK OUT</a></button>
                    </div>
                </div>
            </div>
            <div className='md:w-64 rounded-lg border border-[#FE4C00]'>
                <img className='w-full rounded-t-lg' src={combo_course} alt="combo_course" />
                <div className='p-3 text-center'>
                    <h2 className='font-semibold'>Spacial Offerable Combo Course</h2>
                    <div className='my-5'>
                        <Rating initialRating={3} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <p>2000 BDT</p>
                        <button className='bg-custom-orange px-3 py-1 rounded-lg font-semibold'><a href="https://rik-offlinecourse.com/courses/combo-course/">CHEAK OUT</a></button>
                    </div>
                </div>
            </div>
            <div className='md:w-64 rounded-lg border border-[#FE4C00]'>
                <img className='w-full rounded-t-lg' src={online_word} alt="online_word" />
                <div className='p-3 text-center'>
                    <h2 className='font-semibold'>মাইক্রোসফট অফিস এপ্লিকেশন</h2>
                    <div className='my-5'>
                        <Rating initialRating={3} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <p>2000 BDT</p>
                        <button className='bg-custom-orange px-3 py-1 rounded-lg font-semibold'><a href="https://rik-offlinecourse.com/courses/microsoft-office/">CHEAK OUT</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCourse;
