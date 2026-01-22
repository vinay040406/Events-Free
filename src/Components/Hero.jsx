import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Location from "./Location";

const Hero = () => {
  return (
    <div className="relative max-w-480 w-full min-h-246.5 overflow-hidden  ">
      <div
        className="bg-[linear-gradient(to_right,rgba(0,0,0,0.7),transparent),url(/assets/BackgroundImage.jpg)] bg-no-repeat bg-cover min-h-full 
      bg-center  absolute scale-x-[-1] w-screen inset-0"
      ></div>
      <div className=" text-white md:flex-col flex relative  items-center px-5">
        <Navbar />
        <div className="hero mt-40 md:mt-62.5 max-w-330 w-full flex flex-col md:items-start items-center">
          <div className="heading  text-[45px] text-center md:text-left  md:text-[50px] lg:text-[64px] font-bold text-white leading-[1.4]">
            <h1>Sed tortor in quisque morbi </h1>
            <div className="flex sm:justify-end justify-center max-w-196  w-ful">
              <svg
                className="lg:w-102.5 md:w-90  sm:w-70 w-50 "
                height="8"
                viewBox="0 0 472 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2.49805" width="469.503" height="8" fill="#01C8FF" />
                <rect width="414.561" height="8" fill="#2C49FE" />
              </svg>
            </div>
            <h1>scelerisque etiam eu.</h1>
          </div>
          <p className="max-w-191.25 w-full text-[16px] sm:text-[20px] font-normal  m-[30px_0px] flex ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit,
            malesuada id suscipit cursus,
          </p>

          <div className="flex gap-5 items-center">
            <Button
              text="Get Started"
              textColor="text-white"
              bgColor="bg-[rgba(44,73,254,1)]"
              p="p-[12px_30px]"
              font="font-[600]"
              rounded="rounded-[28px]"
            />
            <a className="font-normal text-[20px] ">Learn more</a>
          </div>
          <footer className="md:flex grid gap-8  grid-flow-row grid-cols-1   md:max-w-240.5 md:w-full   lg:justify-between  bg-[rgba(44,73,254,0.74)] rounded-4xl md:rounded-[150px] md:px-5 md:py-5 p-[40px_80px] mb-5 items-center md:mt-35 sm:mt-30 mt-25 ">
            <div>
              <Location
                title="Location"
                info="Search by city"
                icon="assets/location.png"
              />
            </div>
            <div>
              <Location
                title="Date"
                info="20/01/2026"
                icon="assets/date.png"
              />
            </div>
            <div>
              <Location
                title="Capicity"
                info="Search by city"
                icon="assets/members.png"
              />
            </div>
            <Button
              text="GO CHECK"
              p="md:p-[12px_40px] p-4"
              bgColor="bg-white"
              textColor="text-[#2C49FE]"
              rounded="rounded-[150px]"
              font="font-bold"
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
