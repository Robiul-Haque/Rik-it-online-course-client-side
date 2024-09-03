import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { PiStarThin } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PopularCoursesSection = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses]);

    return (
        <section className='bg-custom-semipink md:px-[14%] pt-24 pb-16 px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Our popular online courses</h2>
            <p className='text-center text-lg mb-14'>A best and cheapest way of getting know learning to make a better tomorrow</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-12 px-6'>
                {
                    courses && courses.map(course => (
                        <div key={course?.title} className='md:w-72 rounded-xl border-2 border-[#FE4C00] hover:-translate-y-1.5 hover:transition-transform hover:shadow-xl'>
                            <LazyLoadImage className='w-full rounded-t-xl' src={course?.image} alt={course?.title} effect='blur' />
                            <div className='pt-4 mb-2 px-2 text-center'>
                                <h2 className='font-semibold'>{course?.title}</h2>
                                <div className='flex justify-around items-center'>
                                    <div className='my-5'>
                                        <Rating initialRating={course?.rating} emptySymbol={<PiStarThin />} fullSymbol={<PiStarFill />} readonly className='text-[#FE4C00]' />
                                    </div>
                                    <p>{course?.price} BDT</p>
                                </div>
                                <a href={course?.link}><button className='bg-custom-orange hover:bg-[#fe4c00bb] text-white border border-[#FE4C00] w-full px-4 py-1.5 rounded-lg text-xs font-semibold'>See More</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default PopularCoursesSection;
