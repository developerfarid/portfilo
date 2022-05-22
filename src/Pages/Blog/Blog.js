import React from 'react';
import Footer from '../../Share/Footer';
import UseData from '../../Hooks/UseData';
import blog1 from "../../images/blog_images/1.jpg"
import blog2 from "../../images/blog_images/2.jpg"
import blog3 from "../../images/blog_images/3.jpg"
import blog4 from "../../images/blog_images/4.jpg"
import blog5 from "../../images/blog_images/5.jpg"
import blog6 from "../../images/blog_images/6.jpg"
import {BsXCircle} from 'react-icons/bs'
import Modal from 'react-modal';



const Blog = () => {
   
    const { local } = UseData()
    const { isOpen, setIsOpen, singleData, handleBlogsData, blogsData} = UseData()
    const handleModle = (id) => {
        handleBlogsData(id)
    }
    return (
        <section className='bg-white  rounded-2xl dark:bg-black'>
            <div className='container    px-2 sm:px-5 md:px-10 lg:px-20'>
                <div className='py-12'>
                    <h2 className='after-effect after:left-32'>Blogs</h2>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 my-6'>
                        {blogsData.map((item) => (
                            <div style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }}
                                className="p-5 rounded-lg mb-2 h-full dark:border-[1px] border-[#A6A6A6]">
                                <img onClick={()=> handleModle(item?.id)} className='rounded-lg w-full' src={item?.img} alt="" />
                                <div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
                                    <span>{item?.date}</span>
                                    <span className='pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2'>{item?.category}</span>
                                </div>
                                <p className='text-lg font-medium dark:text-white'>{item?.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)} className='  outline-none flex items-center h-[100vh]     mx-auto  p-4 md:p-8  rounded-2xl my-8'>
                    <div className='w-full  lg:w-[850px] bg-black mx-auto rounded-xl p-8 relative shadow-lg '>
                        <BsXCircle onClick={() => setIsOpen(false)} className='text-7xl cursor-pointer  absolute -right-10 -top-6 text-black dark:text-white transition transform hover:rotate-45 duration-300 ease-in-out ' />
                        <img className='w-full md:h-[500px]  object-cover rounded-xl mt-6' src={singleData.img} alt="" />
                        <div className='flex mt-4 text-tiny text-white'>
                                    <span>{singleData?.date}</span>
                                    <span className='pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2'>{singleData?.category}</span>
                        </div>
                        <h2 onClick={()=> setIsOpen(true)} className='text-white cursor-pointer text-3xl mt-2'>{singleData.title}</h2>
                        <p className='text-white my-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.</p>

                    
                    </div>




                </Modal>
            </div>
            <Footer bg={"#F8FBFB"} />
        </section>
    );
};

export default Blog;