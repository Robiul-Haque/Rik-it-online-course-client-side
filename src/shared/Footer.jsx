import React from 'react';
import education_bord from '../assets/bd-education-bord.png';
import doel from '../assets/doel.png';
import ict_divison from '../assets/ict-divison.png';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <section className='bg-custom-orange pt-10 pb-3'>
            <div className='flex justify-between flex-col md:flex-row w-[80%] mx-auto pl-6 mx:pl-0'>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-3'>Address</h2>
                    <p className='w-[30%]'>Sriangan Market,East side next to Maingate (2nd floor)Room No-3, Gowalchamot Faridpur</p>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-3'>Company</h2>
                    <ul>
                        <li>
                            <a href="https://rik-offlinecourse.com/" target="_blank" className='hover:text-white'>Rik offline</a>
                        </li>
                        <li>
                            <a href="https://rik-offlinecourse.com/blog/" target="_blank" className='hover:text-white'>Blog</a>
                        </li>
                        <li>
                            <a href="https://rik-offlinecourse.com/contact/" target="_blank" className='hover:text-white'>Contact</a>
                        </li>
                        <li>
                            <a href="https://rik-offlinecourse.com/about/" target="_blank" className='hover:text-white'>About</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-3'>Support</h2>
                    <p>Support Carrer</p>
                    <p>24h Service</p>
                    <p>Quick Chat</p>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-3'>Quick link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Refund Policy</p>
                    <p>
                        <a href="#">Payment Methode</a>
                    </p>
                </div>
            </div>
            <div className='flex justify-start items-center gap-x-6 w-[80%] mx-auto mt-5 pl-6 md:pl-6'>
                <a href="https://www.facebook.com/groups/156371947285397/?ref=share" target="_blank" rel="noopener noreferrer"><i><FaFacebook className='size-5 cursor-pointer' /></i></a>
                <a href="https://wa.me/+8801928111128" target="_blank" rel="noopener noreferrer"><i><IoLogoWhatsapp className='size-6 cursor-pointer' /></i></a>
                <button className='border  px-4 py-2 rounded-lg bg-custom-semipink'><a href="https://eshoptobd.com/" target='_blank'>Shop Now</a></button>
            </div>
            <div className='flex justify-between items-center md:flex-row flex-col-reverse w-[80%] mx-auto mt-8'>
                <p className='text-center md:mt-14 mt-5 pb-4'>Rik e larning platfrom & It institute @2024</p>
                <div>
                    <p className='text-center mb-2 border-b'>Our Trusted Parthner</p>
                    <div className='flex justify-center gap-x-4'>
                        <img className='size-14' src={education_bord} alt="education bord" />
                        <img className='size-14' src={doel} alt="doel" />
                        <img className='size-14' src={ict_divison} alt="ict-divison" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
