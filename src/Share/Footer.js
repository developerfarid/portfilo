import React from 'react';
import UseData from '../Hooks/UseData';

const Footer = ({ bg }) => {
    const { local } = UseData()
    return (
        <footer  style={{background: `${local === "dark" ? "transparent" : bg}`}} className='overflow-hidden rounded-b-2xl' >
            <p className='text-center py-6 text-gray-lite dark:text-color-910 font-medium'>© 2021 All Rights Reserved by ib-themes.</p>
        </footer>
    );
};

export default Footer;