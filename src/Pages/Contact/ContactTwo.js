import React from "react";
import Footer from "../../Share/Footer";
import CommonContact from "./CommonContact";

const ContactTwo = () => {
  return (
    <>
      <div className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        {/* Contact page title */}
        <h2 className="after-effect after:left-60 after:top-[70px] md:mb-[30px] pl-4 md:pl-[60px] pt-12">
          Contact
        </h2>
        <CommonContact condition={true} />
        <Footer bg={"#F8FBFB"} />
      </div>
    </>
  );
};

export default ContactTwo;
