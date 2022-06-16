import React, {useState} from 'react';
import { FiSun } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, Outlet, useLocation } from 'react-router-dom';
import UseData from '../Hooks/UseData';
import logo from "../images/280361415_1230236714183639_6562681360736438134_n.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
   
    

    const { handleTheme, check,menuItem,NavLink } = UseData()
    const handle = (e) => {
        handleTheme(e)
    }

    
    return (
        <header className="z-50">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black ">
                        <div className='flex justify-between w-full items-center space-x-4 lg:my-8 my-5 '>
                        <Link className='text-5xl font-semibold' to='/'><img className='h-[26px] lg:h-[50px]' src={logo} alt="" /></Link>
                       <div className="flex items-center">
                       { !check ?  <span className='bg-white w-[40px] opacity-100 visible flex lg:opacity-0 lg:hidden  h-[40px]  rounded-full  justify-center items-center  ' ><MdDarkMode className='text-black text-3xl' onClick={()=> handle("dark")} /></span>:
                        <span className='bg-[#4D4D4D] w-[40px] h-[40px] rounded-full flex justify-center items-center  '><FiSun className='text-white text-3xl' onClick={()=> handle("light")}  /></span>}
                      {!menuOpen ?   <span onClick={()=> setMenuOpen(!menuOpen) } className='lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-black dark:text-white text-3xl ml-3 '><AiOutlineMenu /></span>:
                      <span onClick={()=> setMenuOpen(!menuOpen) } className='lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 '><AiOutlineClose /></span>}
                           </div> 
                      </div>
                  
                    

                  
                    </div>
                    <nav className={`${menuOpen ? 'block  dark:bg-black ' : 'hidden lg:block'}`}>
                        <ul className={`${menuOpen ? 'block absolute left-0 dark:rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-black drop-shadow-lg ' : 'flex my-12 '}`}>
                            {menuItem.map((item) => (
                                <li onClick={() => setMenuOpen(false)} key={item.id} >
                                    <NavLink
                                         key={item.id}
                                        activeClassName=" text-[#FA5252]  "
                                        inactiveClassName=" dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                                    
                                        className={`${menuOpen ? " pl-3": ' mx-2.5 rounded-md '}    cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center`}  to={item?.link}><span className='mr-2 text-xl'>{item?.icon}</span> {item?.name}</NavLink>
                                </li>
                            ))}
                            { !check ?  <span className='bg-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  ' ><MdDarkMode className='text-black text-3xl' onClick={()=> handle("dark")} /></span>:
                        <span className='bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center  '><FiSun className='text-white text-3xl' onClick={()=> handle("light")}  /></span>}
                        </ul>
                    </nav>
                </div>
                {<Outlet />}
            </div>
        </header>
    );
};

export default Header;