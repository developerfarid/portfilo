import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderTwo from "../../Share/HeaderTwo";
import HomeCard from "../../Share/HomeCard";
import logo from "../../images/280361415_1230236714183639_6562681360736438134_n.png";
import UseData from "../../Hooks/UseData";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const HomeTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleTheme, check, menuItemTwo, NavLink } = UseData();
  const handle = (e) => {
    handleTheme(e);
  };
  return (
    <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen   bg-no-repeat bg-center bg-cover bg-fixed pb-6 md:pb-16 w-full">
      <div className="container  w-[100vw] bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 px-4 lg:px-0 lg:pt-[50px]">
        <img className="h-[26px] lg:h-[50px]   " src={logo} alt="" />
        <div className="flex items-center">
          {!check ? (
            <span className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center  ">
              <MdDarkMode
                className="text-black text-3xl"
                onClick={() => handle("dark")}
              />
            </span>
          ) : (
            <span className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center  ">
              <FiSun
                className="text-white text-3xl"
                onClick={() => handle("light")}
              />
            </span>
          )}
          {!menuOpen ? (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3 "
            >
              <AiOutlineMenu />
            </span>
          ) : (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
            >
              <AiOutlineClose />
            </span>
          )}
        </div>
      </div>
      <nav className={`${menuOpen ? 'block' : 'hidden'}`}>
                        <ul className={`${menuOpen ? 'block dark:rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]' : 'flex my-12 '}`}>
                            {menuItemTwo.map((item) => (
                                <li onClick={() => setMenuOpen(false)} key={item.id} >
                                    <NavLink
                                         key={item.id}
                                        activeClassName=" text-[#FA5252]  hover:text-[#FA5252] "
                                        inactiveClassName=" dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                                    
                                        className={`${menuOpen ? " pl-3": ' mx-2.5 rounded-md '}    cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center`}  to={item?.link}><span className='mr-2 text-xl'>{item?.icon}</span> {item?.name}</NavLink>
                                </li>
                            ))}
                            { !check ?  <span className='bg-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  ' ><MdDarkMode className='text-black text-3xl' onClick={()=> handle("dark")} /></span>:
                        <span className='bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center  '><FiSun className='text-white text-3xl' onClick={()=> handle("light")}  /></span>}
                        </ul>
                    </nav>
      <div className="container grid grid-cols-12 gap-8  justify-between mt-[220px] ">
        <div className="col-span-12 lg:col-span-4">
          <HomeCard />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderTwo />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomeTwo;
