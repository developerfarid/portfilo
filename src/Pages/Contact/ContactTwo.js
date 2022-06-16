import React from 'react';
import Footer from '../../Share/Footer';
import CommonContact from './CommonContact';

const ContactTwo = () => {
    return (
        <>
      <div className='bg-white  md:rounded-2xl dark:bg-black'>
      <h2 className='after-effect after:left-60 after:top-[70px] mb-12 pl-20 pt-10'>Contact</h2>
      <CommonContact condition={true} />
      <Footer bg={"#F8FBFB"} />
      </div>
        </>
    );
};

export default ContactTwo;