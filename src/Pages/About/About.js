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
import img1 from "../../images/brand.png";
import img2 from "../../images/brand (1).png";
import img3 from "../../images/brand (2).png";
import img4 from "../../images/brand (3).png";
import img5 from "../../images/brand (4).png";

import '../../Share/Style.css'
import Footer from '../../Share/Footer';
import UseData from '../../Hooks/UseData';

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
    const imgArray = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img1,
        img2,
        img3,
        img4,
        img5,
    ]
    const experienceArray = [
        {
            id: "1",
            icon: FaEdit ,
            title: "Ui/Ux Design",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#D566FF',
            bg: "#FCF4FF"
        },
        {
            id: "2",
            icon: MdDeveloperMode,
            title: "App Development",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#DDA10C',
            bg: "#FEFAF0"
        },
        {
            id: "3",
            icon: FaPhotoVideo ,
            title: "Photography",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#8774FF',
            bg: "#FCF4FF"
        },
        {
            id: "4",
            icon: HiOutlinePhotograph,
            title: "Photography",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#FF6080',
            bg: "#FFF4F4"
        },
        {
            id: "5",
            icon: FiSettings ,
            title: "Managment",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#FF75D8',
            bg: "#FFF0F8"
        },
        {
            id: "6",
            icon: RiCodeSSlashFill ,
            title: "Web Development",
            des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
            color: '#269FFF',
            bg: "#F3FAFF"
        },
    ]
    // const mode = localStorage?.getItem("theme");
    const { local } = UseData()
    console.log(local, "local about");
    
    return (
        <>
            <section>
                <div className='container rounded-2xl bg-white dark:bg-black  px-2 sm:px-5 md:px-10 lg:px-20'>
                    <div className='  py-12 '>
                        <h2 className='after-effect after:left-52'>About Me</h2>
                        <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[60px] items-center'>
                            <div className='col-span-12 md:col-span-4'>
                                <img className='w-[330px] h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0' src={aboutImage} alt="" />
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

                            {experienceArray.map((item) => {
                                const Icon = item.icon
                           
                            
                          return  (
                                <div style={{background: `${local === "dark" ? "transparent" : item?.bg}`}} className='about-box dark:bg-transparent'>
                                    <span style={{ color: item.color }} className=' text-7xl'><Icon /></span>
                                    <div className='space-y-2'>
                                        <h3 className='dark:text-white text-2xl font-semibold'>{item?.title }</h3>
                                        <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>{item?.des }</p>
                                    </div>

                                </div>
                            )})} 
            

                        </div>

                    </div>
                    <div>
                        <Slider className='bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl'  {...settings}>

                            {imgArray.map((item) => (
                                <img  className=' overflow-hidden brand-img' src={item} alt="" />
                            ))}

                        </Slider>
                    </div>
                    
                    <Footer bg={"#FFFF"} />

                </div>
                
            </section>
        
        </>
    );
};

export default About;