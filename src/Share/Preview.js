import React from "react";
import logo from "../images/logo.png";
import img from "../images/homeonelight.png";
import img1 from "../images/homeonedark.png";
import img2 from "../images/hometwolight.png";
import img3 from "../images/hometwodark.png";
import previewimg from "../images/preview.png";
import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";
import reactLogo from "../images/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-removebg-preview.png";
import tailwindLogo from "../images/Tailwind_CSS_Logo.svg.png";

const Preview = () => {
  const { handleTheme } = UseData();

  // dark and light mode control

  const handle = (e) => {
    handleTheme(e);
  };

  // preview Home page element

  const previewArray = [
    { img: img, title: "Home Light 1", link: "/homeTwo", id: "1" },
    { img: img1, title: "Home Dark 1", link: "/homeTwo", id: "2" },
    { img: img2, title: "Home Light 2", link: "/home", id: "3" },
    { img: img3, title: "Home Dark 2", link: "/home", id: "4" },
  ];

  // features array

  const features = [
    {
      icon: reactLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: tailwindLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: tailwindLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: reactLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: tailwindLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: tailwindLogo,
      title: "React 17.0.2",
      description:
        "We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.",
    },
  ];

  return (
    <>
      <section className="bg-previewBg">
        <div className="text-center  pt-[100px] pb-[90px]">
          {/* Site logo */}
          <img
            className="inline-block h-[26px] lg:h-[32px]"
            src={logo}
            alt=""
          />
          <p className="text-[32px] text-white  pt-[40px] ">
            Resume / CV / vCard & Personal Portfolio <br />
            <span className="text-[#F95054]">Tailwind</span> &{" "}
            <span className="text-[#F95054]">React</span> Template
          </p>
          <button className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-[14px] text-lg text-white rounded-[35px] mt-10">
            Purchase Now
          </button>
        </div>
      </section>

      <section className="">
        <div>
          <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
            <h1 className="text-[#FA5252] text-[45px] font-semibold ">
              Home Demo
            </h1>
            <img className=" block mx-auto " src={previewimg} alt="" />
            <h3 className="text-[32px] font-semibold  ">
              02 Unique Light & Dark Demo
            </h3>
            <p className="text-lg text-[#696666] font-medium w-full md:w-2/3 lg:w-[50%] mx-auto mt-2.5 ">
              Criptic is a NFT Crypto Dashboard Template build with React, Next
              JS & TypeScript with web3 authentication support .
            </p>
          </div>
        </div>
        <div className="container px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[80px]  pb-[100px]">

          {/* previewimg element start */}

          {previewArray.map((item) => {
            const mode = item.id % 2 === 0 ? "dark" : "light";
            return (
              <div
                onClick={() => handle(mode)}
                className="text-center w-full mx-auto shadow-xl shadow-zinc-400  rounded-[12px]  "
                key={item.id}
              >
                <Link to={item.link} target="_blank">
                  <img
                    className=" w-full  cursor-pointer "
                    src={item.img}
                    alt=""
                  />
                </Link>
                <h3 className="bg-gradient-to-r from-[#FA5252] rounded-b-[6px] to-[#DD2476] w-full  text-white uppercase py-5   text-[24px]    ">
                  {item.title}
                </h3>
              </div>
            );
          })}

             {/* previewimg element start */}

        </div>
      </section>

{/* Features section start */}

      <section className="bg-[#111111]">
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#FA5252] text-[45px] font-semibold ">
            Features
          </h1>
          <img className=" block mx-auto " src={previewimg} alt="" />
          <h3 className="text-[32px] text-white font-semibold  ">
            Bostami All Features
          </h3>
          <p className="text-lg [text-[#9197a0] font-medium w-full md:w-2/3 lg:w-[50%] mx-auto mt-2.5 ">
            Criptic is a NFT Crypto Dashboard Template build with React, Next JS
            & TypeScript with web3 authentication support .
          </p>
        </div>
        <div className=" container px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-[80px] ">

          {/* features element */}
          
          {features.map((item) => (
            <div
              key={Math.random()}
              className="bg-[#1c1d24] rounded-xl transition-all duration-300 ease-linear group p-8"
            >
              <div className="w-16 h-16 rounded-full flex justify-center items-center transition-all duration-300 ease-linear group-hover:bg-white bg-[#33343a] mb-5 ">
                <img className="w-12" src={item?.icon} alt="" />
              </div>
              <h3 className="text-white text-[22px] ">{item?.title}</h3>
              <p className="text-[#9197a0] transition-all duration-300 ease-linear mt-3 group-hover:text-white ">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features section start */}

      <section className="text-center bg-previewBg py-[90px]">
        <p className="text-[32px] text-white font-medium  pt-[40px] mx-auto w-full sm:w-3/4 lg:w-1/3 px-4 ">
          Purchase Bostami & Build Your Dream Portfolio{" "}
          <span className="text-[#F95054]">React JS</span> &{" "}
          <span className="text-[#F95054]">Tailwind</span> & CSS Based Portfolio
          Template.
        </p>
        <button className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-[14px] text-lg text-white rounded-[35px] mt-10">
          Purchase Now
        </button>
      </section>
      <footer className="  bg-[#090E17]">
        <p className="text-center py-4 text-white ">
          © 2022 All Rights Reserved by{" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            ib-themes
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Preview;
