import React from 'react';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import LineItem from './LineItem';
import ResumeCard from './ResumeCard';

const ResumeTwo = () => {
    
  const { local, lineArray, resumeArray } = UseData();
    return (
        <>
      <section className="bg-white  rounded-2xl dark:bg-black">
        <div className="container  sm:px-5 md:px-10 lg:px-14">
          <div className="py-12 px-4 md:px-0">
            <h2 className="after-effect after:left-44">Resume</h2>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
              
              
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-4">
              {resumeArray.slice(0,2).map((item, i) => <ResumeCard item={item} key={i} /> )}
            </div>
          </div>
        </div>
        <div className="container bg-color-810 dark:bg-black py-12 px-2 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-6">
                Working Skills
              </h4>

              {lineArray.map((item, i) => <LineItem item={item} key={i} /> )}
            </div>
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                Knowledges
              </h4>
              <div className="flex gap-y-6 gap-x-4 flex-wrap">
                <button className="resume-btn">Digital Design</button>
                <button className="resume-btn">Marketing</button>
                <button className="resume-btn">Social Media</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button>
                {/* <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button> */}
              </div>
            </div>
          </div>
        </div>
        <Footer bg={"#FFFF"} />
      </section>
      {/* Working and Knowledges Section Start */}
      <section className=""></section>

      {/* Working and Knowledges Section End */}
    </>
    );
};

export default ResumeTwo;