import React from "react";

function Section2Box({ image, title, info ,margin }) {
  return (
    <div className={`flex relative bg-white max-w-65 ${margin}  z-50  `}>
      <div className="h-49.5 w-full cursor-pointer flex flex-col justify-end text-center py-1 mt-5 hover:text-white hover:bg-[#2C49FE] duration-600 ease-in-out    bg-white text-[#2D3CAE] border border-[#2D3CAE] items-center px-5  rounded-sm z-10">
        <div className="flex absolute -top-5 h-19.75 w-19.75 justify-center items-center bg-white rounded-full shrink-0 border-[#2C49FE] border">
          <div className="rounded-full">{image}</div>
        </div>
        <h4 className="font-medium text-[25px] leading-6 ">{title}</h4>
        <p className="font-normal text-[16px]  p-3 ">{info}</p>
      </div>
    </div>
  );
}

export default Section2Box;
