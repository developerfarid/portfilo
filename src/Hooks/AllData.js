import { useEffect, useState } from "react";
import work1 from "../images/work_images/1.jpg"
import work2 from "../images/work_images/2.jpg"
import work3 from "../images/work_images/3.jpg"
import work4 from "../images/work_images/4.jpg"
import work5 from "../images/work_images/5.jpg"
import work6 from "../images/work_images/6.jpg"
import work7 from "../images/work_images/7.jpg"
import work8 from "../images/work_images/8.jpg"
import work9 from "../images/work_images/9.jpg"
import blog6 from "../images/blog_images/6.jpg"
import blog4 from "../images/blog_images/4.jpg"
import blog2 from "../images/blog_images/2.jpg"
import blog1 from "../images/blog_images/1.jpg"
import blog3 from "../images/blog_images/3.jpg"
import blog5 from "../images/blog_images/5.jpg"



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


    return {
        handleTheme,check, local, handleData, data, singleData, handleModelData,isOpen,  setIsOpen, blogsData,handleBlogsData
    }
};

export default AllData;