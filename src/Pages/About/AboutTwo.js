import React from 'react';
import Slider from 'react-slick';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import aboutImage from "../../images/about.jpg";
import {  FaEnvelopeOpenText, FaMapMarkerAlt, FaMobileAlt,  FaRegCalendarAlt } from 'react-icons/fa';



import '../../Share/Style.css'
import SliderCommon from '../../Share/SliderCommon';
import AboutCard from './AboutCard';

const AboutTwo = () => {
    const { local,imgArray, experienceArray } = UseData()
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
    return (
        <section>
            <div className=' md:rounded-2xl bg-white dark:bg-black  px-2 sm:px-5 md:px-10 lg:px-14'>
                    <div className='  py-12 '>
                        <h2 className='after-effect after:left-52'>About Me</h2>
                        <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center'>
                          
                            <div className='col-span-12 space-y-2.5'>
                                <div className='lg:mr-16'>
                           
                                    <p className='text-gray-lite  dark:text-color-910 leading-7'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                                    <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                                </div>
                                <div>
                                    
                                </div>

                            </div>
                          

                        </div>

                    </div>
                    <div className='  pb-12 '>
                        <h3 className='text-[35px] dark:text-white font-medium pb-5'>What I do!</h3>
                        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>

                            {experienceArray.map((item) => <AboutCard item={item} local={local} /> )} 
            

                        </div>

                    </div>
                    <div>
                        <SliderCommon />
                    </div>
                    
                    <Footer bg={"#FFFF"} />

                </div>
        </section>
    );
};

export default AboutTwo;