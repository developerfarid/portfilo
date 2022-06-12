import React from "react";

const CommonContact = ({ conditon }) => {
  return (
    <div className= {`${conditon ? 'm-8 p-20' :" mb-16 mx-16 p-16 dark:border-[#212425] dark:border-2 "} bg-color-810 rounded-xl dark:bg-black`} >
      <h3 className="text-4xl  ">
        <span className="text-gray-lite dark:text-[#A6A6A6] ">
          I’M ALWAYS OPEN TO DISCUSSING PRODUCT
        </span>
        <br />
        <span className="font-semibold dark:text-white">
          DESIGN WORK OR PARTNERSHIPS.{" "}
        </span>
      </h3>
      <div className="relative  z-0 w-full mb-8 group">
        <input
          type="text"
          name="floating_text"
          className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_text"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name *
        </label>
      </div>
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="email"
          name="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email *
        </label>
      </div>
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="email"
          name="floating_message"
          className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message *
        </label>
      </div>
      <input
        type="submit"
        className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
        value="Submit"
      />
    </div>
  );
};

export default CommonContact;
