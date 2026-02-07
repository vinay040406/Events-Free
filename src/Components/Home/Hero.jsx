import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Common/Navbar";
import Button from "../Common/Button";
import Location from "../Username/Location";
import Line from "../Common/Line";

const Hero = () => {
  return (
    <div className="relative max-w-480 w-full min-h-246.5 overflow-hidden  ">
      <div
        className=" bg-[linear-gradient(to_right,rgba(0,0,0,0.7),transparent),url(/assets/BackgroundImage.jpg)] bg-no-repeat bg-cover min-h-full 
      bg-center  absolute scale-x-[-1] w-screen inset-0"
      ></div>
      <div className=" text-white md:flex-col flex relative  items-center px-5">
        <Navbar />
        <div className="hero mt-40 md:mt-62.5 max-w-330 w-full flex flex-col md:items-start items-center">
          <div className="heading  text-[45px] text-center md:text-left  md:text-[50px] lg:text-[64px] font-bold text-white leading-[1.4]">
            <h1>Sed tortor in quisque morbi </h1>
            <Line
              display={" sm:justify-end justify-center"}
              width={"lg:w-102.5 md:w-90  sm:w-70 w-50 "}
            />
            <h1>scelerisque etiam eu.</h1>
          </div>
          <p
            style={{ opacity: 100 }}
            className="max-w-191.25  w-full text-[16px] sm:text-[20px] font-normal  m-[30px_0px] flex "
          >
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
              rounded="rounded-[28px] hover:bg-[rgb(35,74,214)] hover:scale-105"
            />
            <a className="font-normal text-[20px] whitespace-nowrap ">
              Learn more
            </a>
          </div>
          <footer className="md:flex grid lg:gap-8  md:gap-6 gap-8 grid-flow-row grid-cols-1  md:max-w-240.5 md:w-full justify-between  bg-[rgba(44,73,254,0.74)] rounded-4xl md:rounded-[150px] sm:p-[40px_80px] md:px-8 md:py-5 px-10 py-5 mb-5 items-center md:mt-35 sm:mt-30 mt-25 ">
            <div>
              <Location
                title="Location"
                info="Search by city"
                icon="assets/location.png"
              />
            </div>
            <div>
              <Location title="Date" info="20/01/2026" icon="assets/date.png" />
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
              p="lg:p-[12px_40px] p-4"
              bgColor="bg-white"
              textColor="text-[#2C49FE]"
              rounded="rounded-[150px] hover:scale-104 hover:shadow-lg"
              font="font-bold"
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
