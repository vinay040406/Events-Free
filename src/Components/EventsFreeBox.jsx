import React from "react";
import Button from "./Button";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Date, Location, Members } from "../../Icons";

function EventsFreeBox({ src, title }) {
  return (
    <div className=" group flex flex-col px-9 py-8 gap-4 text-black border border-[#00000033] rounded-[30px] hover:shadow-xl duration-300 ease-in transition">
      <img
        className="group-hover:rounded-none max-w-86 w-full h-63 object-cover  rounded-[20px] transition-all duration-600"
        src={src}
        alt=""
      />
      <h1 className="text-[24px] font-semibold py-1 text-center ">{title}</h1>
      <div className="flex flex-col  justify-center gap-3 text-[16px] font-normal">
        <div className="flex gap-3 items-center">
          <Date />
          <span>10/02/2022</span>
        </div>
        <div className="flex gap-3 items-center">
          <Location />
          <span>Mumbai</span>
        </div>
        <div className="flex gap-3 items-center">
          <Members />
          <span>1,080</span>
        </div>
      </div>
      <Button
        font={
          "font-semibold  text-white bg-[#2C49FE]  mt-3 py-3 rounded-[23px] w-[108px] text-[16px]"
        }
        text={"Go Check"}
      />
    </div>
  );
}

export default EventsFreeBox;
