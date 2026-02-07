import React from "react";
import { Facebook, Instagram, Twitter } from "../../Icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="max-w-480  w-full lg:px-12 px-9 pt-10 xl:px-20 lg:pt-15 xl:pt-20 bg-black text-white flex flex-col items-center">
      <div className="flex md:flex-row flex-col max-w-330 w-full justify-between items-center md:gap-0 gap-5 md:text-left text-center ">
        <div className=" flex flex-col justify-between">
          <div className="flex items-center ">
            <img
              src="assets/logo.png"
              alt=""
              className="sm:h-auto lg:w-24.5 lg:h-20 h-15 w-20 cursor-pointer"
            />
            <div className="sm:text-[36px] text-[27px] font-bold flex items-center leading-0  lg:ml-1.25 cursor-pointer">
              <p className="text-[rgba(44,73,254,1)]">Events</p>
              <span className="text-[rgba(1,200,255,1)]">Free</span>
            </div>
          </div>
          <p className="max-w-86.5 w-full font-normal text-[14px] mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            c{" "}
          </p>
          <div className="flex gap-3 mt-5 md:justify-start justify-center">
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Twitter />
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-col justify-center ">
          <table className="flex lg:flex-col flex-row  justify-center text-[12px] font-normal">
            <tbody>
              <tr className="flex md:flex-row flex-col mr-7 lg:gap-14 gap-8 py-3 text-[14px] font-semibold">
                <th className="w-18.5">SERVICES</th>
                <th className="w-18.5">EVENTS</th>
              </tr>
              <tr className="lg:flex hidden gap-14 py-1.5 ">
                <td className="w-18.5">
                  <a href="">About</a>
                </td>
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
              </tr>
              <tr className="lg:flex hidden gap-14 py-1.5">
                <td className="w-18.5">
                  <a href="">News</a>
                </td>
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
              </tr>
              <tr className="lg:flex hidden gap-14 py-1.5">
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
              </tr>
              <tr className="lg:flex hidden gap-14 py-1.5">
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
                <td className="w-18.5">
                  <a href="">ullamcorper</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="xl:ml-14 lg:ml-10 m-auto flex justify-center md:items-start items-center flex-col gap-3 lg:gap-2 lg:pt-9 pt-4 ">
            <div className="text-[14px] font-bold flex-start flex">GALLERY</div>
            <div className="grid lg:grid-rows-2 grid-rows grid-cols-2 lg:grid-cols-3 grid-flow-col gap-5">
              <img
                className="w-22.5 h-15.5 hidden lg:flex"
                src="assets/FooterImag1.jpg"
                alt=""
              />
              <img
                className="w-22.5 h-15.5"
                src="assets/FooterImage2.jpg"
                alt=""
              />
              <img
                className="w-22.5 h-15.5 hidden lg:flex"
                src="assets/FooterImage3.jpg"
                alt=""
              />
              <img
                className="w-22.5 h-15.5 hidden lg:flex"
                src="assets/FooterImage4.jpg"
                alt=""
              />
              <img
                className="w-22.5 h-15.5 hidden lg:flex"
                src="assets/FooterImage5.jpg"
                alt=""
              />
              <div className="relative flex justify-center items-center">
                <img
                  className="absolute top-0 h-15.5 w-22.5 "
                  src="assets/FooterImage6.png"
                  alt=""
                />
                <span className="text-[12px] font-bold">
                  Show <br /> More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full pt-15 pb-7  ">
        <p className="text-[14px] font-normal text-center">
          © Credits of companyName belong to companyName.
        </p>
      </div>
    </div>
  );
}

export default Footer;
