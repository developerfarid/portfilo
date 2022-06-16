import React from 'react';
import { FaEdit, FaEnvelopeOpenText, FaMapMarkerAlt, FaMobileAlt, FaPhotoVideo, FaRegCalendarAlt } from 'react-icons/fa';
import { RiCodeSSlashLine , RiCodeSSlashFill } from 'react-icons/ri';
import { FiSettings} from 'react-icons/fi';
import { HiOutlinePhotograph} from 'react-icons/hi';
import { MdDeveloperMode} from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import aboutImage from "../../images/about.jpg";


import '../../Share/Style.css'
import Footer from '../../Share/Footer';
import UseData from '../../Hooks/UseData';
import SliderCommon from '../../Share/SliderCommon';
import AboutCard from './AboutCard';

const About = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                  initialSlide: 3,
                  dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
                  
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  
              }
            }
          ]
    };

    // const mode = localStorage?.getItem("theme");
    const { local,imgArray, experienceArray } = UseData()
    console.log(local, "local about");
    
    return (
        <>
            <section>
                <div className='container md:rounded-2xl bg-white dark:bg-black  px-2 sm:px-5 md:px-10 lg:px-20'>
                    <div className='  py-12 '>
                        <h2 className='after-effect after:left-52'>About Me</h2>
                        <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[60px] items-center'>
                            <div className='col-span-12 md:col-span-4'>
                                <img className='w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0' src={aboutImage} alt="" />
                            </div>
                            <div className='col-span-12 md:col-span-8 space-y-2.5'>
                                <div className='mr-16'>
                                    <h3 className='text-4xl font-medium dark:text-white mb-2.5 '>Who am i?</h3>
                                    <p className='text-gray-lite  dark:text-color-910 leading-7'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                                    <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='text-4xl font-medium my-5 dark:text-white'>Personal Info</h3>
                                        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                            <div className='flex'>
                                                <span className='text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-'><FaMobileAlt /></span>
                                                <div className='space-y-1'>
                                                    <p className='text-xs text-gray-lite dark:text-color-910'>Phone</p>
                                                    <h6 className='font-medium dark:text-white'>+123 456 7890</h6>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <span className='text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-'><FaMapMarkerAlt /></span>
                                                <div className='space-y-1'>
                                                    <p className='text-xs text-gray-lite dark:text-color-910'>Location</p>
                                                    <h6 className='font-medium dark:text-white'>Hong kong china</h6>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <span className='text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-'><FaEnvelopeOpenText /></span>
                                                <div className='space-y-1'>
                                                    <p className='text-xs text-gray-lite dark:text-color-910'>Email</p>
                                                    <h6 className='font-medium dark:text-white'>example@mail.com</h6>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <span className='text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-'><FaRegCalendarAlt /></span>
                                                <div className='space-y-1'>
                                                    <p className='text-xs text-gray-lite dark:text-color-910'>Birthday</p>
                                                    <h6 className='font-medium dark:text-white'>May 27, 1990</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                          

                        </div>

                    </div>
                    <div className='  pb-12 '>
                        <h3 className='text-[35px] dark:text-white font-medium pb-5'>What I do!</h3>
                        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>

                        {experienceArray.map((item) => <AboutCard item={item} local={local} /> )} 
            

                        </div>

                    </div>
                    <div>
                    <SliderCommon />
                    </div>
                    
                    <Footer bg={"#FFFF"} />

                </div>
                
            </section>
        
        </>
    );
};

export default About;