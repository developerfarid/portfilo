import React from 'react';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import LineItem from './LineItem';
import ResumeCard from './ResumeCard';

const ResumeTwo = () => {
    
  const {  lineArray, resumeArray } = UseData();
    return (
        <>
      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div className="container  sm:px-5 md:px-10 lg:px-14">
          <div className="py-12 px-4 md:px-0">
            {/*Resume page title */}
            <h2 className="after-effect after:left-44">Resume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">

              {/* resume items map */}
              
              {resumeArray.slice(0,2).map((item, i) => <ResumeCard item={item} key={i} /> )}
            </div>
          </div>
        </div>
        <div className="container bg-color-810 dark:bg-[#0D0D0D] pt-12 px-2 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-6">
                Working Skills
              </h4>
              {/* Experience percent element */}
              {lineArray.map((item, i) => <LineItem item={item} key={i} /> )}
            </div>

            {/* knowledge section start */}

            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                Knowledges
              </h4>

              {/* Knowledges items */}

              <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                <button className="resume-btn">Digital Design</button>
                <button className="resume-btn">Marketing</button>
                <button className="resume-btn">Social Media</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button>
              </div>
            </div>

              {/* knowledge section end */}

          </div>
        </div>
        <Footer condition={false} bg={"#FFFF"} />
      </section>
    </>
    );
};

export default ResumeTwo;