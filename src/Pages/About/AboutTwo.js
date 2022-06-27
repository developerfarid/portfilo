import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import "../../Share/Style.css";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import HomeCard from "../../Share/HomeCard";

const AboutTwo = () => {
  const { local, experienceArray } = UseData();

  return (
    <section>
      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]  ">
        <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          {/* About page title */}
          <h2 className="after-effect after:left-52">About Me</h2>
          <div className="lg:hidden">
            {/* Sidebar personal information for mobile devices */}
            <HomeCard />
          </div>
          <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
            <div className="col-span-12 space-y-2.5">
              <div className="lg:mr-16">
                <p className="text-gray-lite  dark:text-color-910 leading-7">
                  I'm Creative Director and UI/UX Designer from Sydney,
                  Australia, working in web development and print media. I enjoy
                  turning complex problems into simple, beautiful and intuitive
                  designs.
                </p>
                <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h3 className="text-[35px] dark:text-white font-medium pb-5">
            What I do!
          </h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">

                 {/* Experience information  */}

            {experienceArray.map((item) => (
              <AboutCard item={item} local={local} />
            ))}
          </div>
        </div>
        <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
 
 {/* Slick Slider call here  */}
 
          <SliderCommon />
        </div>
        
        {/* Common Footer call here */}

        <Footer bg={"#FFFF"} />
      </div>
    </section>
  );
};

export default AboutTwo;
