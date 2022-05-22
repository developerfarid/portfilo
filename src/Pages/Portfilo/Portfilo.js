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
                    <h2 className='after-effect  after:left-32'>Works</h2>
                    <ul className='flex justify-end flex-wrap space-x-8 font-medium'>
                        <li className='text-gray-lite dark:text-[#A6A6A6] hover:text-orange-400 transition duration-300' onClick={() => handleSearch("All")}>All</li>
                        <li className='text-gray-lite  dark:text-[#A6A6A6] hover:text-orange-400 transition duration-300' onClick={() => handleSearch("Video")}>Video</li>
                        <li className='text-gray-lite dark:text-[#A6A6A6]  hover:text-orange-400 transition duration-300' onClick={() => handleSearch("Web Design")}>Web Design</li>
                        <li className='text-gray-lite dark:text-[#A6A6A6]  hover:text-orange-400 transition duration-300' onClick={() => handleSearch("UI/UX")}>Graphic Design </li>
                        <li className='text-gray-lite dark:text-[#A6A6A6]  hover:text-orange-400 transition duration-300' onClick={() => handleSearch("Logo")}>Logo</li>
                    </ul></div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        data.map((item) => (
                            <div style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }} className='rounded-lg p-6 dark:border-[1px] border-[#A6A6A6]' key={item.id}>

                                <img onClick={() => handleModle(item.id)} className='w-full cursor-pointer rounded-lg object-contain h-auto' src={item?.img} alt="" />
                                <span className='pt-5 text-[14px] font-semibold text-gray-lite block dark:text-[#A6A6A6]'>{item?.tag}</span>
                                <h2 onClick={() => handleModle(item.id)}  className='font-medium cursor-pointer text-xl dark:text-white mt-2'>{item?.title}</h2>

                            </div>


                        ))



                    }

                </Masonry>
                <Modal isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)} className='  outline-none flex items-center h-[100vh]     mx-auto  p-4 md:p-8  rounded-2xl my-8'>
                    <div className='w-full  lg:w-[850px] bg-black mx-auto rounded-xl p-8 relative shadow-lg '>
                        <BsXCircle onClick={()=> setIsOpen(false)} className='text-7xl cursor-pointer  absolute -right-10 -top-6 text-black dark:text-white transition transform hover:rotate-45 duration-300 ease-in-out ' />
                        <h2 className='text-yellow-500 text-6xl text-center font-bold'>Image Project</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 my-6'>
                            <div className='space-y-2'>
                                <p className='text-white flex items-center text-xl'><FaRegFileAlt className='text-xl mr-2' />Project :  <span className='font-semibold'> Website</span> </p>
                                <p className='text-white flex items-center text-xl'><HiCode className='text-xl mr-2' />Langages :  <span className='font-semibold'> HTML, CSS, Javascript </span> </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-white flex items-center text-xl'><FaUser className='text-xl mr-2' />Client :  <span className='font-semibold'> Enveto</span> </p>
                                <p className='text-white flex items-center text-xl'><FaExternalLinkAlt className='text-xl mr-2' />Privew :  <span className='font-semibold'> www.google.com </span> </p>
                            </div>
                        </div>
                        <p className='text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.</p>
                        <img className='w-full md:h-[500px]  object-cover rounded-xl mt-6' src={singleData.img} alt="" />
                    </div>




                </Modal>
            </div>
            <Footer bg={"#F8FBFB"} />
        </section>
    );
};

export default Portfilo;