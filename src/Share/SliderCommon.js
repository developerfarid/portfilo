import React from 'react';
import UseData from '../Hooks/UseData';

const SliderCommon = () => {
    const {imgArray } = UseData()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                  initialSlide: 3,
                  dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
                  
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  
              }
            }
          ]
    };
    return (
        <SliderCommon className='bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl'  {...settings}>

                            {imgArray.map((item) => (
                                <img  className=' overflow-hidden brand-img' src={item} alt="" />
                            ))}

                        </SliderCommon>
    );
};

export default SliderCommon; 