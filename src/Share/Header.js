import React from 'react';
import { Link,NavLink, Outlet } from 'react-router-dom';
import { FaRegUser, FaBlogger, FaSun, FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { CgNotes } from 'react-icons/cg';
import { MdDarkMode } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';

import UseData from '../Hooks/UseData';
import logo from "../images/280361415_1230236714183639_6562681360736438134_n.png";

const Header = () => {
    const menuItem = [
        {
            id: "01",
            name: "About",
            link: "/about",
            icon: <FaRegUser />
        },
        {
            id: "02",
            name: "Resume",
            link: "/resume",
            icon: <CgNotes />
        },
        {
            id: "03",
            name: "Works",
            link: "/works",
            icon: <FaBlogger />
        },
        {
            id: "04",
            name: "Blogs",
            link: "/blogs",
            icon: <FaBlogger />
        },
        {
            id: "05",
            name: "Contact",
            link: "/contact",
            icon: <RiContactsBookLine />
        },

    ]

    // const [check, setCheck] = useState(false)
    // const getMode= localStorage?.getItem("theme")
    // useEffect(() => {
    //    if (getMode) {
    //       if (getMode ==="dark") {
    //           setCheck(true)
    //           document.documentElement.classList.add('dark')
    //       } 
    //    } else {
    //     localStorage.setItem("theme", "light")
    //     document.documentElement.classList.remove('dark')
    //     }
        
    // }, [])
    // const handeCheck = (e) => {
    //     const checked = e.target.checked;

    //     if (checked) {
    //        setCheck(true)
    //         if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //             document.documentElement.classList.add('dark')
    //             localStorage.setItem("theme", "dark")

    //         } else {
    //             document.documentElement.classList.remove('dark')
    //             localStorage.setItem("theme", "light")
    //         }
            
    //     }
        
  

    //     // checked ?  document.documentElement.classList.add('dark') :document.documentElement.classList.remove('dark')
    // }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }

    // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
    // const [check, setCheck] = useState(false)

    const { handleTheme, check } = UseData()

    console.log(check);

    // localStorage?.getItem("theme") === "light" ? setCheck(false): setCheck(true)
 
    const handle = (e) => {
        handleTheme(e)
    }
    return (
        <header>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='flex items-center space-x-4 '>
                        <Link className='text-5xl font-semibold' to='/'><img src={logo} alt="" /></Link>
                        { !check ?  <span ><MdDarkMode className='text-white' onClick={()=> handle("dark")} /></span>:
                        <span ><FiSun className='text-white' onClick={()=> handle("light")}  /></span>}
                      </div>
                  
                    

                  
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex my-12 '>
                            {menuItem.map((item) => (
                                <li className=' rounded-md hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out  font-poppins bg-white dark:bg-[#212425] dark:text-[#A6A6A6] dark:hover:text-white text-gray-lite font-medium mx-2.5' key={item?.id}>
                                    <NavLink    className='flex   text-xtiny py-2.5 px-5 items-center' to={item?.link}><span className='mr-2 text-xl'>{item?.icon}</span> {item?.name}</NavLink>
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