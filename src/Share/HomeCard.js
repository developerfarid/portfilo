import React from "react";
import {
  FaCalendarAlt,
  FaDribbble,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../images/avatar.jpg";

const HomeCard = () => {
  const socialArray = [
    { icon: FaFacebookF, color: "#1773EA", link: "https://www.facebook.com/" },
    { icon: FaTwitter, color: "#1C9CEA", link: "https://twitter.com/" },
    { icon: FaDribbble, color: "#e14a84", link: "https://dribbble.com/" },
    { icon: FaLinkedinIn, color: "#144679", link: "https://www.linkedin.com/" },
  ];
  return (
    <div className="w-full mb-6 lg:mb-0  mx-auto  relative bg-white text-center dark:bg-black px-6 rounded-[20px] ">
      <img
        src={img}
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
        alt=""
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
          Monalisa Ashley
        </h1>
        <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
          Ui/Ux Designer
        </h3>

        <div className="flex justify-center space-x-3">
          {socialArray.map((item, i) => {
            const Icon = item.icon;
            return (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
              <span className={`socialbtn text-[${item.color}]`}>
              <Icon />
            </span></a>
            );
          })}

          {/* <span className="socialbtn text-[#1C9CEA]">
            <FaTwitter />
          </span>
          <span className="socialbtn text-[#e14a84] ">
            <FaDribbble />
          </span>
          <span className="socialbtn text-[#144679]">
            <FaLinkedinIn />
          </span> */}
        </div>
        <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
          <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
            <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
              <FaMobileAlt />
            </span>
            <div className="text-left ml-2.5">
              <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Phone
              </p>
              <p className="dark:text-white">+123 456 7890</p>
            </div>
          </div>
          <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
            <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
              <FaEnvelopeOpenText />
            </span>
            <div className="text-left ml-2.5">
              <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Email
              </p>
              <p className="dark:text-white">example@mail.com</p>
            </div>
          </div>
          <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
            <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
              <FaMapMarkerAlt />
            </span>
            <div className="text-left ml-2.5">
              <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Location
              </p>
              <p className="dark:text-white">Hong kong china</p>
            </div>
          </div>
          <div className="flex  py-2.5">
            <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
              <FaCalendarAlt />
            </span>
            <div className="text-left ml-2.5">
              <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Birthday
              </p>
              <p className="dark:text-white">May 27, 1990</p>
            </div>
          </div>
        </div>
        <button className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
          <svg
            className="mr-3"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4219 19.3125C19.4219 19.5417 19.3359 19.7422 19.1641 19.9141C18.9922 20.0859 18.7917 20.1719 18.5625 20.1719C18.3333 20.1719 18.1328 20.0859 17.9609 19.9141C17.7891 19.7422 17.7031 19.5417 17.7031 19.3125C17.7031 19.0833 17.7891 18.8828 17.9609 18.7109C18.1328 18.5391 18.3333 18.4531 18.5625 18.4531C18.7917 18.4531 18.9922 18.5391 19.1641 18.7109C19.3359 18.8828 19.4219 19.0833 19.4219 19.3125ZM15.8125 18.4531C15.5833 18.4531 15.3828 18.5391 15.2109 18.7109C15.0391 18.8828 14.9531 19.0833 14.9531 19.3125C14.9531 19.5417 15.0391 19.7422 15.2109 19.9141C15.3828 20.0859 15.5833 20.1719 15.8125 20.1719C16.0417 20.1719 16.2422 20.0859 16.4141 19.9141C16.5859 19.7422 16.6719 19.5417 16.6719 19.3125C16.6719 19.0833 16.5859 18.8828 16.4141 18.7109C16.2422 18.5391 16.0417 18.4531 15.8125 18.4531ZM22 16.3906V20.8594C22 21.375 21.8138 21.819 21.4414 22.1914C21.069 22.5638 20.625 22.75 20.1094 22.75H1.89062C1.375 22.75 0.93099 22.5638 0.558594 22.1914C0.186198 21.819 0 21.375 0 20.8594V16.3906C0 15.875 0.186198 15.431 0.558594 15.0586C0.93099 14.6862 1.375 14.5 1.89062 14.5H6.14453L3.73828 12.0938C3.39453 11.7214 3.22266 11.306 3.22266 10.8477C3.2513 10.3893 3.42318 9.98828 3.73828 9.64453C4.05339 9.30078 4.45443 9.12891 4.94141 9.12891H7.21875V2.46875C7.21875 1.98177 7.3763 1.58073 7.69141 1.26562C8.03516 0.921875 8.45052 0.75 8.9375 0.75H13.0625C13.5495 0.75 13.9505 0.921875 14.2656 1.26562C14.6094 1.58073 14.7812 1.98177 14.7812 2.46875V9.12891H17.0586C17.5456 9.12891 17.9466 9.30078 18.2617 9.64453C18.5768 9.98828 18.7344 10.3893 18.7344 10.8477C18.763 11.306 18.6055 11.7214 18.2617 12.0938L15.8555 14.5H20.1094C20.625 14.5 21.069 14.6862 21.4414 15.0586C21.8138 15.431 22 15.875 22 16.3906ZM10.7422 17.1641C10.8281 17.2214 10.9141 17.25 11 17.25C11.0859 17.25 11.1719 17.2214 11.2578 17.1641L17.2734 11.1055C17.388 10.9909 17.4167 10.862 17.3594 10.7188C17.3021 10.5755 17.2018 10.5039 17.0586 10.5039H13.4062V2.46875C13.4062 2.38281 13.3633 2.3112 13.2773 2.25391C13.2201 2.16797 13.1484 2.125 13.0625 2.125H8.9375C8.85156 2.125 8.76562 2.16797 8.67969 2.25391C8.6224 2.3112 8.59375 2.38281 8.59375 2.46875V10.5039H4.94141C4.79818 10.5039 4.69792 10.5755 4.64062 10.7188C4.58333 10.862 4.61198 10.9909 4.72656 11.1055L10.7422 17.1641ZM20.625 16.3906C20.625 16.2474 20.5677 16.1328 20.4531 16.0469C20.3672 15.9323 20.2526 15.875 20.1094 15.875H14.4805L12.2031 18.1094C11.888 18.4531 11.487 18.625 11 18.625C10.513 18.625 10.112 18.4531 9.79688 18.1094L7.51953 15.875H1.89062C1.7474 15.875 1.61849 15.9323 1.50391 16.0469C1.41797 16.1328 1.375 16.2474 1.375 16.3906V20.8594C1.375 21.0026 1.41797 21.1172 1.50391 21.2031C1.61849 21.3177 1.7474 21.375 1.89062 21.375H20.1094C20.2526 21.375 20.3672 21.3177 20.4531 21.2031C20.5677 21.1172 20.625 21.0026 20.625 20.8594V16.3906Z"
              fill="white"
            />
          </svg>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
