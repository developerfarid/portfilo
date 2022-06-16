import { useEffect, useState } from "react";

import work2 from "../images/work_images/2.jpg"
import work3 from "../images/work_images/3.jpg"
import work4 from "../images/work_images/4.jpg"

import work6 from "../images/work_images/6.jpg"
import work7 from "../images/work_images/7.jpg"
import work8 from "../images/work_images/8.jpg"

import blog6 from "../images/blog_images/6.jpg"
import blog4 from "../images/blog_images/4.jpg"
import blog2 from "../images/blog_images/2.jpg"
import blog1 from "../images/blog_images/1.jpg"
import blog3 from "../images/blog_images/3.jpg"
import blog5 from "../images/blog_images/5.jpg"
import img1 from "../images/brand.png";
import img2 from "../images/brand (1).png";
import img3 from "../images/brand (2).png";
import img4 from "../images/brand (3).png";
import img5 from "../images/brand (4).png";
import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser,FaEdit,FaPhotoVideo,FaAward } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import {  FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine,RiCodeSSlashFill } from 'react-icons/ri';
import { Link, useLocation } from "react-router-dom";
import { FiSettings} from 'react-icons/fi';
import { HiOutlinePhotograph} from 'react-icons/hi';
import {MdDeveloperMode, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";




const AllData = () => {
    const [check, setCheck] = useState(false)
    const [local, setLocal] = useState(localStorage.getItem("theme"))
    console.log(local, "local");
    useEffect(() => {
        const themeValue = localStorage?.getItem("theme")

        if (!themeValue) {
            setCheck(false)
            console.log("yes");
            localStorage.setItem("theme", 'light')
            // document.documentElement.classList.remove('dark')
            // setCheck(false)
   
        }
        themeValue === "dark" && setCheck(true)

    }, [])
   
    const handleTheme = (value) => {

        if (value === "light") {
            setCheck(false)
            localStorage.setItem("theme", "light")
            setLocal("light")
        }
        else {
            setCheck(true)
            localStorage.setItem("theme", "dark")
            setLocal("dark")
        }
        localStorage?.getItem("theme") === "dark" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }
    const workItems = [
        {
            id: "1",
            tag: "UI/UX",
            title: "Chul urina",
            img: blog6,
            bg: "#FFF0F0",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!"
        },
        {
            id: "2",
            tag: "Web Design",
            title: "Aura Dione",
            img: work2,
            bg: "#FFF3FC",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "3",
            tag: "Logo",
            title: "Chul urina",
            img: work3,
            bg: "#FFF0F0",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "4",
            tag: "Video",
            title: "Chul urina",
            img: work4,
            bg: "#E9FAFF",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "5",
            tag: "UI/UX",
            title: "Chul urina",
            img: blog4,
            bg: "#FFFAE9",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "6",
            tag: "Video",
            title: "Chul urina",
            img: work6,
            bg: "#F4F4FF",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "7",
            tag: "UI/UX",
            title: "Chul urina",
            img: work7,
            bg: "#FFF0F8",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "8",
            tag: "Web Design",
            title: "Chul urina",
            img: work8,
            bg: "#FFF0F8",
            client: "Envato",
            langages: "HTML, CSS, Javascript",
            link:"https://www.envato.com",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        },
        {
            id: "9",
            tag: "Logo",
            title: "Chul urina",
            img: blog2,
            bg: "#FCF4FF",
            client: "Themeforest",
            langages: " CSS, Javascript, React",
            link: "https://www.themeforest.net",
            description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure."
        }
    ]
    const blogsData = [
        {
            id: '1',
            img: blog1,
            date: "17 April",
            category: "Inspiration",
            title: "How to Own Your Audience by Creating an Email List.",
            bg: "#FCF4FF",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },
        {
            id: '4',
            img: blog4,
            date: "27 April",
            category: "Inspiration",
            title: "Everything You Need to Know About Web Accessibility.",
            bg: "#EEFBFF",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },
        {
            id: '2',
            img: blog2,
            date: "21 April",
            category: "Web Design",
            title: "The window know to say beside you",
            bg: "#FFF0F0",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },
        {
            id: '5',
            img: blog5,
            date: "27 April",
            category: "Inspiration",
            title: "Top 10 Toolkits for Deep Learning in 2021.",
            bg: "#FCF4FF",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },
        {
            id: '3',
            img: blog3,
            date: "27 April",
            category: "Inspiration",
            title: "How to Own Your Audience by Creating an Email List.",
            bg: "#FCF4FF",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },
        {
            id: '6',
            img: blog6,
            date: "27 April",
            category: "Inspiration",
            title: "Everything You Need to Know About Web Accessibility.",
            bg: "#EEFBFF",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non."
        },




    ]
    const menuItem = [
        {
            id: "01",
            name: "Home",
            link: "/home/homePage",
            icon: <AiOutlineHome />
        },
        {
            id: "02",
            name: "About",
            link: "/home/about",
            icon: <FaRegUser />
        },
        {
            id: "06",
            name: "Resume",
            link: "/home/resume",
            icon: <CgNotes />
        },
        {
            id: "03",
            name: "Works",
            link: "/home/works",
            icon: <FiCodesandbox />
        },
        {
            id: "04",
            name: "Blogs",
            link: "/home/blogs",
            icon: <FaBlogger />
        },
        {
            id: "05",
            name: "Contact",
            link: "/home/contact",
            icon: <RiContactsBookLine />
        },
    ]
    const menuItemTwo = [

        {
            id: "02",
            name: "About",
            link: "/homeTwo/about",
            icon: <FaRegUser />
        },
        {
            id: "02",
            name: "Resume",
            link: "/homeTwo/resume",
            icon: <CgNotes />
        },
        {
            id: "03",
            name: "Works",
            link: "/homeTwo/works",
            icon: <FiCodesandbox />
        },
        {
            id: "04",
            name: "Blogs",
            link: "/homeTwo/blogs",
            icon: <FaBlogger />
        },
        {
            id: "05",
            name: "Contact",
            link: "/homeTwo/contact",
            icon: <RiContactsBookLine />
        },
    ]
    const [data, setData] = useState(workItems)
    const [singleData, setSingleData] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const handleData = (text) => {
        if (text === "All") {
            setData(workItems)
        } else {
            const findData = workItems.filter((item) => item.tag === text)
            setData(findData)
        }

    }
    const handleModelData = (id) => {
        const find = workItems.find((item) => item?.id === id)
        setSingleData(find)
        setIsOpen(true)

    }
    const handleBlogsData = (id) => {
        const find = blogsData.find((item) => item?.id === id)
        setSingleData(find)
        setIsOpen(true)

    }
    function NavLink({
        to, className, activeClassName, inactiveClassName, ...rest
            }) {
                let location = useLocation()
                let isActive = location.pathname === to
                let allClassNames = className + (isActive ? `${activeClassName}` : `${inactiveClassName}`)
                console.log(allClassNames);
                return <Link className={allClassNames} to={to} {...rest} />
        
            }
            const imgArray = [
                img1,
                img2,
                img3,
                img4,
                img5,
                img1,
                img2,
                img3,
                img4,
                img5,
            ]
            const experienceArray = [
                {
                    id: "1",
                    icon: FaEdit ,
                    title: "Ui/Ux Design",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#D566FF',
                    bg: "#FCF4FF"
                },
                {
                    id: "2",
                    icon: MdDeveloperMode,
                    title: "App Development",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#DDA10C',
                    bg: "#FEFAF0"
                },
                {
                    id: "3",
                    icon: FaPhotoVideo ,
                    title: "Photography",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#8774FF',
                    bg: "#FCF4FF"
                },
                {
                    id: "4",
                    icon: HiOutlinePhotograph,
                    title: "Photography",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#FF6080',
                    bg: "#FFF4F4"
                },
                {
                    id: "5",
                    icon: FiSettings ,
                    title: "Managment",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#FF75D8',
                    bg: "#FFF0F8"
                },
                {
                    id: "6",
                    icon: RiCodeSSlashFill ,
                    title: "Web Development",
                    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                    color: '#269FFF',
                    bg: "#F3FAFF"
                },
            ]

            const resumeArray = [
                {
                  type: "Education",
                  icon: MdOutlineSchool,
                  id: "01",
                  date: "2021-2023",
                  title: "Ph.D in Horriblensess ",
                  place: "ABC University, Los Angeles, CA",
                  bg: "#FFF4F4",
            
                  id1: "02",
                  date1: "2019 - Present",
                  title1: "Sr. Software Tester",
                  place1: "Google Inc.",
                  bg1: "#FFF1FB",
            
                  id2: "03",
                  date2: "2021",
                  title2: "Best Developer ",
                  place2: "University Of Melbourne, NA",
                  bg2: "#FFF4F4",
                },
                {
                  type: "Experience",
                  icon: MdOutlineBusinessCenter,
                  id: "04",
                  date: "2017-2021",
                  title: "Computer Science",
                  place: "Imperialize Technical Institute",
                  bg: "#EEF5FA",
            
                  id1: "05",
                  date1: "2015-2017",
                  title1: "Cr. Web Developer",
                  place1: "ib-themes ltd.",
                  bg1: "#F2F4FF",
            
                  id2: "06",
                  date2: "2008",
                  title2: "Best Writter",
                  place2: "Online Typodev Soluation Ltd.",
                  bg2: "#EEF5FA",
                },
                {
                  type: "Awards",
                  icon: FaAward,
                  id: "07",
                  date: "2015-2017",
                  title: "  Graphic Designer",
                  place: "Web Graphy, Los Angeles, CA",
                  bg: "#FCF4FF",
            
                  id1: "08",
                  date1: "2014 - 2015",
                  title1: "Jr. Web Developer",
                  place1: "Creative Gigs.",
                  bg1: "#FCF9F2",
            
                  id2: "09",
                  date2: "2015-2017",
                  title2: "Best Freelancer",
                  place2: "Fiver & Upwork Level 2 & Top Rated",
                  bg2: "#FCF4FF",
                },
              ];
              const lineArray = [
                {
                  id: "01",
                  color: "#FF6464",
                  name: "Web Design",
                  number: "80",
                },
                {
                  id: "02",
                  color: "#9272D4",
                  name: "Mobile App ",
                  number: "95",
                },
                {
                  id: "03",
                  color: "#5185D4",
                  name: "Illustrator",
                  number: "65",
                },
                {
                  id: "03",
                  color: "#CA56F2",
                  name: "Photoshope",
                  number: "75",
                },
              ];

    return {
        handleTheme,check, local, handleData, data, singleData, handleModelData,isOpen,  setIsOpen, blogsData,handleBlogsData,menuItem,NavLink,menuItemTwo,experienceArray , imgArray,resumeArray,lineArray
    }
};

export default AllData;