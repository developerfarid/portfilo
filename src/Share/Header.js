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
                    <div className="flex justify-between w-full ">
                        <div className='flex justify-between w-full items-center space-x-4 my-8 lg:my-0 '>
                        <Link className='text-5xl font-semibold' to='/'><img src={logo} alt="" /></Link>
                       <div className="flex">
                       { !check ?  <span ><MdDarkMode className='text-white text-3xl' onClick={()=> handle("dark")} /></span>:
                        <span ><FiSun className='text-white text-3xl' onClick={()=> handle("light")}  /></span>}
                      {!menuOpen ?   <span onClick={()=> setMenuOpen(!menuOpen) } className='lg:hidden block text-black dark:text-white text-3xl ml-3 '><AiOutlineMenu /></span>:
                      <span onClick={()=> setMenuOpen(!menuOpen) } className='lg:hidden block text-black dark:text-white text-3xl ml-3 '><AiOutlineClose /></span>}
                           </div> 
                      </div>
                  
                    

                  
                    </div>
                    <nav className={`${menuOpen ? 'block' : 'hidden lg:block'}`}>
                        <ul className={`${menuOpen ? 'block absolute left-0 top-20 w-full' : 'flex my-12 '}`}>
                            {menuItem.map((item) => (
                                <li key={item.id} className=' ' >
                                    <NavLink
                                         key={item.id}
                                        activeClassName=" text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                                        inactiveClassName=" dark:text-[#A6A6A6] dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                                    
                                        className=' rounded-md  cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins  bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center' to={item?.link}><span className='mr-2 text-xl'>{item?.icon}</span> {item?.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {<Outlet />}
            </div>
        </header>
    );
};

export default Header;