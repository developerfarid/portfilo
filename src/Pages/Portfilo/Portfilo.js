import React from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import {FaRegFileAlt, FaUser, FaExternalLinkAlt} from 'react-icons/fa'
import {HiCode} from 'react-icons/hi'
import {BsXCircle} from 'react-icons/bs'


const Portfilo = () => {
  
    const { local, handleData, data, handleModelData, isOpen, setIsOpen, singleData } = UseData()
    const handleSearch = (text) => {
        handleData(text)
    }
    const handleModle = (id) => {
        handleModelData(id)
    }
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        500: 1
      };


    return (
        <section className='bg-white  rounded-2xl dark:bg-black'>
            <div className='container mb-8   px-2 sm:px-5 md:px-10 lg:px-20'>
                <div className='py-12'>
                    <h2 className='after-effect  after:left-36'>Works</h2>
                    <ul className='flex justify-end flex-wrap space-x-8 font-medium'>
                        <li className='fillter-btn' onClick={() => handleSearch("All")}>All</li>
                        <li className='fillter-btn' onClick={() => handleSearch("Video")}>Video</li>
                        <li className='fillter-btn' onClick={() => handleSearch("Web Design")}>Web Design</li>
                        <li className='fillter-btn' onClick={() => handleSearch("UI/UX")}>Graphic Design </li>
                        <li className='fillter-btn' onClick={() => handleSearch("Logo")}>Logo</li>
                    </ul></div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        data.map((item) => (
                            <div style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }} className='rounded-lg p-6 dark:border-[2px] border-[#212425]' key={item.id}>

                                <div className=' overflow-hidden rounded-lg'>
                                <img onClick={() => handleModle(item.id)} className='w-full  cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg object-contain h-auto' src={item?.img} alt="" />
                               </div>
                                <span className='pt-5 text-[14px] font-semibold text-gray-lite block dark:text-[#A6A6A6]'>{item?.tag}</span>
                                <h2 onClick={() => handleModle(item.id)}  className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:text-white mt-2'>{item?.title}</h2>

                            </div>


                        ))



                    }

                </Masonry>
                <Modal isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)} className='  outline-none flex items-center h-[100vh]     mx-auto  p-4 md:p-8  rounded-2xl my-8'>
                    <div className='w-full  lg:w-[850px] bg-white dark:bg-black mx-auto rounded-xl p-8 relative shadow-lg '>
                        <BsXCircle onClick={()=> setIsOpen(false)} className='text-7xl cursor-pointer  absolute -right-10 -top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out ' />
                        <h2 className='text-yellow-500 text-6xl text-center font-bold'>{singleData.tag} Project</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 my-6'>
                            <div className='space-y-2'>
                                <p className='dark:text-white flex items-center text-lg'><FaRegFileAlt className='text-lg mr-2' />Project :  <span className='font-semibold'> Website</span> </p>
                                <p className='dark:text-white flex items-center text-xl'><HiCode className='text-lg mr-2' />Langages :  <span className='font-semibold'> {singleData?.langages} </span> </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='dark:text-white flex items-center text-xl'><FaUser className='text-lg mr-2' />Client :  <span className='font-semibold'> {singleData?.client }</span> </p>
                                <p className='dark:text-white flex items-center text-lg'><FaExternalLinkAlt className='text-lg mr-2' />Privew :  <span className='font-semibold'> <a href={singleData?.link} target="_blank" rel="noopener noreferrer">{singleData?.link }</a> </span> </p>
                            </div>
                        </div>
                        <p className='dark:text-white '>{singleData?.description }</p>
                        <img className='w-full md:h-[500px]  object-cover rounded-xl mt-6' src={singleData.img} alt="" />
                    </div>




                </Modal>
            </div>
            <Footer bg={"#F8FBFB"} />
        </section>
    );
};

export default Portfilo;