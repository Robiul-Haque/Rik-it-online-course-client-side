import React from 'react';
import Button from '../components/Button';
import { BiBook } from "react-icons/bi";
import hero_img from '../assets/hero-img.jpg';
import { FaRegBookmark } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import digital_marketing from '../assets/digital-markting-icon.png';
import graphic_design from '../assets/graphic-design-icon.png';
import web_development from '../assets/web-development-icon.png';
import english_anguage from '../assets/english-language-icon.png';
import microsoft_office from '../assets/microsoft-office.png';
import { FaCashRegister } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section>
            <div className='flex items-center md:flex-row flex-col-reverse gap-x-10 md:w-[80%] mx-auto md:mt-12 mt-6'>
                <div className='w-[90%] md:w-[50%]'>
                    <h3 className='text-3xl font-semibold md:mt-0 mt-8'>Unleash Your Potential</h3>
                    <h1 className='md:text-4xl text-5xl font-bold my-5'>Become an IT Pro & Rule the <span className='text-custom-orange'>Digital World.</span> Learn, Earn, and Succeed in Career!</h1>
                    <p>With a vision to turn manpower into assets, RIK e-LEARNING PLATFORM & RIK IT INSTITUTE is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>
                    <div className='flex md:justify-between justify-evenly mt-10'>
                        <Button leftIcon={<FaCashRegister className='size-4' />} title={'Register'} className={"flex justify-center gap-x-2 items-center bg-custom-orange text-white font-medium text-sm md:text-base md:w-52 md:h-12 w-44 h-10 rounded-full md:px-2"} />
                        <Button leftIcon={<RiLoginBoxLine />} title={'Login'} className={"flex justify-center gap-x-2 items-center bg-gradient-to-r bg-custom-orange text-white font-medium text-sm md:text-base md:w-52 md:h-12 w-44 h-10 rounded-full md:px-2"} />
                    </div>
                </div>
                <div className='w-[60%] md:w-[70%]'>
                    <img src={hero_img} alt="Hero-image" className='md:border-[12px] border-[8px] border-[#FE4C00] rounded-[35px]' />
                </div>
            </div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={70}

                breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper mt-10 mx-auto md:w-[80%] w-full"
            >
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-12 mx-auto' src={digital_marketing} alt="digital marketing" />
                    <div className='text-center'>
                        <h3>Digital</h3>
                        <h3>Marketing</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={graphic_design} alt="graphic_design" />
                    <div className='text-center'>
                        <h3>Graphic &</h3>
                        <h3>Multimedia</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={web_development} alt="web_development" />
                    <div className='text-center'>
                        <h3>Web &</h3>
                        <h3>Software</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={english_anguage} alt="english_anguaget" />
                    <div className='text-center'>
                        <h3>Englis</h3>
                        <h3>Language</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={microsoft_office} alt="microsoft_office" />
                    <div className='text-center'>
                        <h3>Microsoft</h3>
                        <h3>Office</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={web_development} alt="web_development" />
                    <div className='text-center'>
                        <h3>Web &</h3>
                        <h3>Software</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white border border-[#FE4C00] rounded-3xl py-6 slider-item'>
                    <img className='w-10 mx-auto' src={english_anguage} alt="english_anguaget" />
                    <div className='text-center'>
                        <h3>Englis</h3>
                        <h3>Language</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HeroSection;
