import React from "react";
import { Facebook, Instagram, Twitter } from "../../Icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="max-w-480  w-full p-20 bg-black text-white flex justify-center items-center">
      <div className="flex max-w-330 w-full justify-between ">
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
          <div className="flex gap-3 mt-5">
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
        <div className="flex justify-center ">
          <table className="flex flex-col text-[12px] font-normal">
            <tr className="flex gap-14 py-3 w-18.5 text-[14px] font-semibold">
              <th>SERVICES</th>
              <th>EVENTS</th>
            </tr>
            <tr className="flex gap-14 p-1 ">
              <td>About</td>
              <td>ullamcorper</td>
            </tr>
            <tr className="flex gap-14 p-1">
              <td>News</td>
              <td>ullamcorper</td>
            </tr>
            <tr className="flex gap-14 p-1">
              <td>ullamcorper</td>
              <td>ullamcorper</td>
            </tr>
            <tr className="flex gap-14 p-1">
              <td>ullamcorper</td>
              <td>ullamcorper</td>
            </tr>
          </table>
          <div className="ml-14 flex flex-col gap-2 mt-3">
            <th className="text-[14px] font-bold flex-start flex">GALLERY</th>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-5">
              <img  className="w-22.5 h-15.5" src="public/assets/FooterImag1.jpg" alt="" />
              <img className="w-22.5 h-15.5"  src="public/assets/FooterImage2.jpg" alt="" />
              <img className="w-22.5 h-15.5"  src="public/assets/FooterImage3.jpg" alt="" />
              <img  className="w-22.5 h-15.5" src="public/assets/FooterImage4.jpg" alt="" />
              <img  className="w-22.5 h-15.5" src="public/assets/FooterImage5.jpg" alt="" />
              <div className="relative">
                <img
                  className="absolute top-0 h-15.5 w-22.5"
                  src="public/assets/FooterImage6.png"
                  alt=""
                />
                <span className="absolute left-7 top-3 text-[12px] font-bold">
                  Show <br /> More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
