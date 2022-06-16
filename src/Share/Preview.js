import React from 'react';
import logo from "../images/280361415_1230236714183639_6562681360736438134_n.png"
import img from "../images/bg 3.jpg"
import img1 from "../images/bg 7.png"
import img2 from "../images/bg 2.png"
import img3 from "../images/bg 4.png"
import Footer from './Footer';
import { Link } from 'react-router-dom';
import UseData from '../Hooks/UseData';


const Preview = () => {
    const { handleTheme } = UseData()
    const handle = (e) => {
        handleTheme(e)
    }
    const previewArray = [
        {img:img, title:"Home Light 1"  , link:"/homeTwo", id:"1"},
        {img:img1, title:"Home Dark 1" , link:"/homeTwo", id:"2"},
        {img:img2, title:"Home Light 2" , link:"/home", id:"3"},
        {img:img3, title:"Home Dark 2" ,  link:"/home",id:"4"},
    ]
    return (
        <div className='bg-previewBg  min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed w-full'>
            <div className="container px-4">
            <div className='text-center pt-[150px] pb-[90px]'>
                <img className='inline-block' src={logo} alt="" />
                <p className='text-[32px] text-[#4F4F4F] font-semibold pt-[40px] '>Resume / CV / vCard & <br />
Personal Portfolio HTML Template</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] pb-[60px]">
                {previewArray.map((item) =>{
const mode = item.id % 2 === 0 ? "dark" : "light";
return (<div onClick={() =>handle(mode)} className='text-center' key={item.id} >
<Link to={item.link }> <img className='rounded-[20px] w-full cursor-pointer ' src={item.img} alt="" /></Link>
 <h3 className='text-[32px] text-[#4F4F4F] font-semibold mt-5  '>{item.title}</h3>
</div>)
                }
                
                
                
                
                )}
            </div>
            </div>
            <Footer bg={"#FFFFFF"} />
        </div>
    );
};

export default Preview; 