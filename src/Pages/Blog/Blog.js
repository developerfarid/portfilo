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
import CommonBlog from './CommonBlog';



const Blog = () => {
 
    return (
        <CommonBlog items={true} count={6}  />
    )

};

export default Blog;