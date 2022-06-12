import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTwo from '../../Share/HeaderTwo';
import HomeCard from '../../Share/HomeCard';

const HomeTwo = () => {
    return (
       <section className='bg-homeBg dark:bg-homeTwoBg-dark min-h-screen   bg-no-repeat bg-center bg-cover bg-fixed pb-6 md:pb-16 w-full'>
            <div className='container grid grid-cols-12  justify-between pt-[240px]'>
            <div className='col-span-4' >
            <HomeCard />
            </div>
          <div className='col-span-8'>
          <HeaderTwo />
          <Outlet />
          </div>
        </div>
       </section>
    );
};

export default HomeTwo; 