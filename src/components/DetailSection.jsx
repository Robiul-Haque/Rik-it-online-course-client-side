import React from 'react';
import support from '../assets/support.png';
import placement from '../assets/placement.png';
import video from '../assets/video.png';

const DetailSection = () => {
    return (
        <section className='text-center bg-custom-semipink pt-16 pb-32 md:px-16 px-10'>
            <h1 className='text-3xl font-bold mb-3 md:mx-0 mx-1'>Exclusive Solutions that Set Us Apart</h1>
            <p className='md:w-[50%] mx-auto md:px-0 px-1 text-center text-lg mb-14'>Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds.</p>
            <div className='flex justify-center md:gap-x-10 gap-y-10 md:flex-row flex-col mt-12'>
                <div className='md:w-[24%] w-[90%] md:mx-0 mx-auto border border-[#FE4C00] rounded-lg p-6 shadow-xl'>
                    <img className='mx-auto w-[22%]' src={support} alt="support" />
                    <h3 className='text-2xl font-bold text-custom-orange my-4'>Lifetime Support</h3>
                    <p>RIK IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.
                    </p>
                </div>
                <div className='md:w-[24%] w-[80%] md:mx-0 mx-auto border border-[#FE4C00] rounded-lg p-6 shadow-xl'>
                    <img className='mx-auto w-[22%]' src={placement} alt="placement" />
                    <h3 className='text-2xl font-bold text-custom-orange my-4'>Career Placement Support</h3>
                    <p>Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager.  So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 60% in 2023.
                    </p>
                </div>
                <div className='md:w-[24%] w-[80%] md:mx-0 mx-auto border border-[#FE4C00] rounded-lg p-6 shadow-xl'>
                    <img className='mx-auto w-[22%]' src={video} alt="video" />
                    <h3 className='text-2xl font-bold text-custom-orange my-4'>Lifetime Support</h3>
                    <p>No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.

                    </p>
                </div>
            </div>
        </section>
    )
}

export default DetailSection
