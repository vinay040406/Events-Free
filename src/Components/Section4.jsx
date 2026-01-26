import React from "react";
import Line from "./Line";
import Section4Box from "./Section4Box";
import Button from "./Button";


function Section4() {
  return (
    <div className="xl:p-20 lg:p-15 md:p-10 p-8 max-w-480 w-full flex flex-col justify-center items-center xl:gap-20 gap-15">
      <div className="max-w-330 w-full flex xl:flex-row flex-col xl:justify-between justify-center items-center">
        <div className="flex flex-col xl:items- gap-3 xl:items-start items-center mb-10">
          <Line
            width={"max-w-[189px] w-full h-[10px] "}
            display={"xl:justify-start justify-center"}
          />
          <h1 className="xl:text-[48px] text-[40px] font-bold tracking-0 leading-14">
            Explore our <br /> latest events
          </h1>
          <p className="max-w-133.75 text-[16px] font-normal tracking-wider w-full lg:px-0 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue lacinia vitae nec arcu.
          </p>
          <a className="text-[16px] font-bold" href="">
            LEARN MORE
          </a>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 justify-start">
          <Section4Box
            title={"Lorem ipsum"}
            date={"09/23/2021"}
            image={"assets/Section4Image1.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
            }
          />
          <Section4Box
            title={"Lorem ipsum"}
            date={"01/24/2026"}
            image={"assets/Section4Image2.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
            }
          />
        </div>
      </div>
      <div className="max-w-330  flex  w-full lg:flex-row flex-col items-center xl:justify-between ">
        <img
          className="lg:p-8 p-5 md:mb-4 flex justify-center"
          src="assets/Section4Image3.png"
          alt=""
        />
        <div className="flex flex-col lg:items-start mt-8 justify-center items-center ">
          <Line width="w-[189px]" display={"lg:justify-start justify-center"} />
          <h1 className="font-bold text-[48px]">Join Us !</h1>
          <p className="flex max-w-143.5 tracking-wider pr-7 tex-[16px] font-normal lg:px-0 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue
          </p>
          <form className="max-w-143.5 w-full lg:text-left text-center mt-2.5 text-[16px] font-normal lg:px-0 px-4">
            <label className="text-[35px] font-bold " htmlFor="">
              Sign Up
            </label>
            <br />
            <div className="flex w-full gap-4 mt-3">
              <input
                className="w-1/2 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-1/2 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="w-full p-2 mt-3 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
              type="text"
              placeholder="Email Address"
            />
            <div className="flex w-full gap-4 mt-3">
              <input
                className="w-1/2 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                type="text"
                placeholder="Password"
              />
              <input
                className="w-1/2 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                type="text"
                placeholder="Confirm Password"
              />
            </div>
            <textarea
              className="w-full min-h-31 mt-3 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
              placeholder="About Me"
            ></textarea>
            <Button
              text="Sign up"
              textColor={
                "max-w-143.5 hover:shadow-xl text-white font-semibold text-[16px] rounded-[23px] hover:scale-101 py-2.5 w-full mt-5 bg-[#2C49FE] flex justify-center"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section4;
