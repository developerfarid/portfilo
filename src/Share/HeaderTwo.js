import React, { useState } from 'react';
import UseData from '../Hooks/UseData';


const HeaderTwo = () => {

    const [menuOpen, setMenuOpen] = useState(false)
   
    

    const {menuItemTwo,NavLink } = UseData()
   
    return (
        <header className='lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-black '>
           
            <nav className={`${menuOpen ? 'block mx-auto' : 'hidden lg:block'}`}>
                        <ul className={`${menuOpen ? 'block absolute left-0 top-20 w-full' : 'flex  '}`}>
                            {menuItemTwo.map((item) => (
                            
                                    <NavLink
                                         key={item.id}
                                        activeClassName=" text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                                        inactiveClassName=" dark:text-[#A6A6A6] dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
                                    
                                        className='w-20 h-20 rounded-[10px]  cursor-pointer  transition-colors duration-300 ease-in-out    font-poppins  bg-[#F3F6F6] text-gray-lite font-medium mx-2.5  text-xtiny    justify-center flex flex-col items-center' to={item?.link}><span className=' text-xl mb-1'>{item?.icon}</span> {item?.name}</NavLink>
                             
                            ))}
                        </ul>
                    </nav>

            
        </header>
    );
};

export default HeaderTwo;