import React from 'react';

const AboutCard = ({item, local}) => {
 
        const Icon = item.icon
                           
                            
        return  (
              <div style={{background: `${local === "dark" ? "transparent" : item?.bg}`}} className='about-box dark:bg-transparent'>
                  <span style={{ color: item.color }} className=' text-7xl'><Icon /></span>
                  <div className='space-y-2'>
                      <h3 className='dark:text-white text-2xl font-semibold'>{item?.title }</h3>
                      <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>{item?.des }</p>
                  </div>

              </div>
    );
}
;

export default AboutCard; 