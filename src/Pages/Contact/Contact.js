import React from 'react';
import { IconContext } from 'react-icons';
import { MdPhoneInTalk } from 'react-icons/md'
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';


const Contact = () => {
    const contactArray = [
        {
            id: "01",
            icon: MdPhoneInTalk,
            title: "Phone ",
            item1: "+452 666 386",
            item2: "+452 666 386",
            bg: "#FCF4FF"

        },
        {
            id: "01",
            icon: MdPhoneInTalk,
            title: "Email ",
            item1: "support@gmail.com",
            item2: "example@gmail.com",
            bg: "#EEFBFF"


        },
        {
            id: "01",
            icon: MdPhoneInTalk,
            title: "Address ",
            item1: "Maount View, Oval",
            item2: "Road, New York, USA",
            bg: "#F2F4FF"


        }
    ]
    const { local } = UseData()

    return (
        <section className='bg-white  rounded-2xl dark:bg-black'>
            <div className='container    px-2 sm:px-5 md:px-10 lg:px-20'>
                <div className='py-12'>
                    <h2 className='after-effect after:left-40 mb-12'>Contact</h2>
                    <div className='grid grid-cols-12 gap-x-20'>
                        <div className='col-span-4 space-y-6'>
                            {contactArray.map((item, i) => {
                                const Icon = item.icon;
                                return (<div style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }} className='flex dark:bg-transparent p-[30px] dark:border-[1px] border-[#A6A6A6] gap-2 rounded-xl '>
                                    <span className='w-8 mt-2'>
                                        <Icon className='text-4xl dark:text-white' />
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
                        <div className='col-span-8'>
                            <div className='p-20 bg-color-810 rounded-xl dark:bg-black'>

                                <h3 className='text-4xl mb-6 '><span className='text-gray-lite dark:text-[#A6A6A6] '>I’M ALWAYS OPEN TO DISCUSSING PRODUCT</span>
                                    <br />
                                    <span className='font-semibold dark:text-white'>DESIGN WORK OR PARTNERSHIPS. </span></h3>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required />
                                    <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-lite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-lite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " required />
                                    <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-lite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message *</label>
                                </div>
                                <input type="submit" className='px-6 py-2 rounded-lg border-[2px] mt-3 border-gray-lite dark:text-white' value="Submit" />

                            </div>


                        </div>

                    </div>
                </div>
                <Footer  bg={"#F8FBFB"} />
            </div>
            
        </section>
    );
};

export default Contact;