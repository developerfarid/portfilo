import { Line } from 'rc-progress';
import React from 'react';
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';
import { FaAward ,FaShoppingBag} from 'react-icons/fa';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';

const Resume = () => {
    const resumeArray = [
        {
            id: "01",
            date: "2021-2023",
            title: "Ph.D in Horriblensess ",
            place: "ABC University, Los Angeles, CA",
            bg: "#FFF4F4"
        },
        {
            id: "02",
            date: "2019 - Present",
            title: "Sr. Software Tester",
            place: "Google Inc.",
            bg: "#FFF1FB"
        },
        {
            id: "03",
            date: "2021",
            title: "Best Developer ",
            place: "University Of Melbourne, NA",
            bg: "#FFF4F4"
        },
        {
            id: "04",
            date: "2017-2021",
            title: "Computer Science",
            place: "Imperialize Technical Institute",
            bg: "#EEF5FA"
        },
        {
            id: "05",
            date: "2015-2017",
            title: "Cr. Web Developer",
            place: "ib-themes ltd.",
            bg: "#F2F4FF"
        },
        {
            id: "06",
            date: "2008",
            title: "Best Writter",
            place: "Online Typodev Soluation Ltd.",
            bg: "#EEF5FA"
        },
        {
            id: "07",
            date: "2015-2017",
            title: "  Graphic Designer",
            place: "Web Graphy, Los Angeles, CA",
            bg: "#FCF4FF"
        },
        {
            id: "08",
            date: "2014 - 2015",
            title: "Jr. Web Developer",
            place: "Creative Gigs.",
            bg: "#FCF9F2"
        },
        {
            id: "09",
            date: "2015-2017",
            title: "Best Freelancer",
            place: "Fiver & Upwork Level 2 & Top Rated",
            bg: "#FCF4FF"
        },
    ]
    const lineArray = [
        {
            id: "01",
            color: "#FF6464",
            name: "Web Design",
            number: "80"
        },
        {
            id: "02",
            color: "#9272D4",
            name: "Mobile App ",
            number: "95"
        },
        {
            id: "03",
            color: "#5185D4",
            name: "Illustrator",
            number: "65"
        },
        {
            id: "03",
            color: "#CA56F2",
            name: "Photoshope",
            number: "75"
        },
    ]


    const { local} = UseData()


    return (
        <>
            <section className='bg-white  rounded-2xl dark:bg-black'>
                <div className='container    px-2 sm:px-5 md:px-10 lg:px-20'>
                    <div className='py-12'>
                        <h2 className='after-effect after:left-44'>Resume</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4'>
                            <div className='flex items-center space-x-2'>
                                <MdOutlineSchool className="text-6xl text-[#F95054]" />
                                <h4 className='text-5xl dark:text-white font-medium'>Education</h4>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <MdOutlineBusinessCenter className="text-6xl text-[#F95054]" />
                                <h4 className='text-5xl dark:text-white font-medium'>Experience</h4>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <FaAward className="text-6xl text-[#F95054]" />
                                <h4 className='text-5xl dark:text-white font-medium'>Awards</h4>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-4'>
                            {
                                resumeArray.map((item, i) => (
                                    <div key={i} style={{background: `${local === "dark" ? "transparent" : item?.bg}`}} className='py-4 pl-5 pr-3 space-y-2 rounded-lg  border-gray border-[1px]'>
                                        <span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>{item?.date}</span>
                                        <h3 className='text-xl dark:text-white'>{item?.title}</h3>
                                        <p className='dark:text-[#b7b7b7]'>{item?.place}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>


                </div>
                <div className='container bg-color-810 dark:bg-black py-12 px-2 sm:px-5 md:px-10 lg:px-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='col-span-1'>
                            <h4 className='text-5xl dark:text-white font-medium mb-6'>Working Skills</h4>

                            {lineArray.map((item, i) => (
                             <div key={i} className=' mb-5'>
                                    <div className='flex justify-between py-1'><span className=' text-base text-gray-lite font-semibold dark:text-[#A6A6A6]'>{item?.name }</span><span className=' text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]'>{item?.number }%</span></div>

                             <Line percent={item?.number} strokeWidth={1} trailWidth={1} trailColor={`${local ? "#1C1C1C" :'#EDF2F2'}` } strokeColor={item?.color} />
                         </div>
                       
                         ))  }
             
                        </div>
                        <div className='col-span-1'>
                            <h4 className='text-5xl dark:text-white font-medium mb-8'>Knowledges</h4>
                            <div className='flex gap-y-6 gap-x-4 flex-wrap'>
                                <button className='resume-btn'>Digital Design</button>
                                <button className='resume-btn'>Marketing</button>
                                <button className='resume-btn'>Social Media</button>
                                <button className='resume-btn'>Print</button>
                                <button className='resume-btn'>Time Management</button>
                                <button className='resume-btn'>Flexibility</button>
                                <button className='resume-btn'>Print</button>
                                <button className='resume-btn'>Print</button>
                                <button className='resume-btn'>Time Management</button>
                                <button className='resume-btn'>Flexibility</button>
                                <button className='resume-btn'>Print</button>
                                
                           
                            </div>
                        </div>
                    </div>
                </div>
                <Footer bg={"#FFFF"} />
            </section>
            {/* Working and Knowledges Section Start */}
            <section className=''>
            
            </section>
            
            {/* Working and Knowledges Section End */}
        </>
    );
};

export default Resume;