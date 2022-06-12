import React, { useState } from 'react';
import UseData from '../Hooks/UseData';
import { FiSun } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';

const HeaderTwo = () => {

    const [menuOpen, setMenuOpen] = useState(false)
   
    

    const { handleTheme, check,menuItemTwo,NavLink } = UseData()
    const handle = (e) => {
        handleTheme(e)
    }
    return (
        <header className='w-[526px] h-[144px]  p-[30px] ml-auto mb-10  rounded-[16px] '>
            { !check ?  <span ><MdDarkMode className='text-white text-3xl' onClick={()=> handle("dark")} /></span>:
                        <span ><FiSun className='text-white text-3xl' onClick={()=> handle("light")}  /></span>}
            <nav className={`${menuOpen ? 'block mx-auto' : 'hidden lg:block'}`}>
                        <ul className={`${menuOpen ? 'block absolute left-0 top-20 w-full' : 'flex  '}`}>
                            {menuItemTwo.map((item) => (
                            
                                    <NavLink
                                         key={item.id}
                                        activeClassName=" text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                                        inactiveClassName=" dark:text-[#A6A6A6] dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
                                    
                                        className='w-20 h-20 rounded-[10px]  cursor-pointer  transition-colors duration-300 ease-in-out    font-poppins  bg-[#F3F6F6] text-gray-lite font-medium mx-2.5  text-xtiny    justify-center flex flex-col items-center' to={item?.link}><span className='mr-2 text-xl mb-1'>{item?.icon}</span> {item?.name}</NavLink>
                             
                            ))}
                        </ul>
                    </nav>

            
        </header>
    );
};

export default HeaderTwo;