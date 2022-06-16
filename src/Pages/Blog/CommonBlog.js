import React from 'react';
import Footer from '../../Share/Footer';
import UseData from '../../Hooks/UseData';
import {BsXCircle} from 'react-icons/bs'
import Modal from 'react-modal';



const CommonBlog = ({items,count}) => {
   
    const { local } = UseData()
    const { isOpen, setIsOpen, singleData, handleBlogsData, blogsData} = UseData()
    const handleModle = (id) => {
        handleBlogsData(id)
    }
    return (
        <section className='bg-white  md:rounded-2xl dark:bg-black'>
            <div className='container    px-2 sm:px-5 md:px-10 lg:px-20'>
                <div className='py-12'>
                    <h2 className='after-effect after:left-32'>Blogs</h2>
                    <div className={`${items ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3':"grid-cols-1 sm:grid-cols-2 lg:grid-cols-2" } grid   gap-x-10 gap-y-7 my-6`} >
                        {blogsData.slice(0, count).map((item) => (
                            <div style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }}
                                className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2">
                                <div className='overflow-hidden rounded-lg'>
                                <img onClick={()=> handleModle(item?.id)} className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110' src={item?.img} alt="" />
                               </div>
                                <div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
                                    <span>{item?.date}</span>
                                    <span className='pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2'>{item?.category}</span>
                                </div>
                                <h3 onClick={()=> setIsOpen(true)} className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252]'>{item?.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)} className='outline-none flex items-center   p-4 md:p-8  rounded-2xl my-8'>
                    <div className='   w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#060606d2] mx-auto rounded-xl p-4 md:p-8 relative shadow-lg '>
                        <div className='h-[80vh] md:h-auto overflow-y-scroll no-scrollbar bg-white'>
                        <BsXCircle onClick={() => setIsOpen(false)} className='text-7xl cursor-pointer  absolute -right-10 -top-6  text-white transition transform hover:rotate-45 duration-300 ease-in-out ' />
                        <img className='w-full md:h-[500px]  object-cover rounded-xl mt-6' src={singleData.img} alt="" />
                        <div className='flex mt-4 text-tiny text-black dark:text-white'>
                                    <span>{singleData?.date}</span>
                                    <span className='pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2'>{singleData?.category}</span>
                        </div>
                        <h2 className='dark:text-white cursor-pointer sm:text-3xl mt-2 duration-300 transition hover:text-[#FA5252]'>{singleData.title}</h2>
                        <p className='dark:text-white my-4 '>{singleData.description }</p>

                    
                    </div>
                    </div>




                </Modal>
            </div>
            <Footer bg={"#F8FBFB"} />
        </section>
    );
};

export default CommonBlog;