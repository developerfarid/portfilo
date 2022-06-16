import React from 'react';
import { IconContext } from 'react-icons';
import { MdPhoneInTalk } from 'react-icons/md'
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import iconPhone from '../../images/phone-call 1.png'
import iconEmail from '../../images/email 1.png'

import iconMap from '../../images/map 1.png'
import CommonContact from './CommonContact';



const Contact = () => {
    const contactArray = [
        {
            id: "01",
            icon: iconPhone,
            title: "Phone ",
            item1: "+452 666 386",
            item2: "+452 666 386",
            bg: "#FCF4FF"

        },
        {
            id: "02",
            icon: iconEmail,
            title: "Email ",
            item1: "support@gmail.com",
            item2: "example@gmail.com",
            bg: "#EEFBFF"


        },
        {
            id: "03",
            icon: iconMap,
            title: "Address ",
            item1: "Maount View, Oval",
            item2: "Road, New York, USA",
            bg: "#F2F4FF"


        }
    ]
    const { local } = UseData()

    return (
        <section className='bg-white  md:rounded-2xl dark:bg-black'>
            <div className='container    px-2 sm:px-5 md:px-10 lg:px-20'>
                <div className='py-12'>
                    <h2 className='after-effect after:left-40 mb-12'>Contact</h2>
                    <div className='lg:flex gap-x-20'>
                        <div className='w-full lg:w-[40%] xl:w-[30%] space-y-6'>
                            {contactArray.map((item, i) => {
                         
                                return (<div style={{ background: `${local === "dark" ? "#0D0D0D" : item?.bg}` }} className='flex flex-wrap    dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl '>
                                    <span className='w-8 mt-2'>
                                        <img src={item.icon} alt="" className='text-4xl dark:text-white' />
                                    </span>
                                    <div className='space-y-2'>
                                        <p className='text-xl font-semibold dark:text-white'>{item?.title} :</p>
                                        <p className='text-gray-lite text-lg dark:text-[#A6A6A6] '>{item?.item1}</p>
                                        <p className='text-gray-lite text-lg dark:text-[#A6A6A6] '>{item?.item2}</p>
                                    </div>
                                </div>
                                )
                            })}

                        </div>
                        <div className='w-full lg:w-[60%] xl:w-[70%]'>
                            <CommonContact condition={false} />


                        </div>

                    </div>
                </div>
                <Footer  bg={"#F8FBFB"} />
            </div>
            
        </section>
    );
};

export default Contact;