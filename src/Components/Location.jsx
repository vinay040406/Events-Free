import React from "react";

const Location = ({ title, icon, info }) => {
  return (
    <div className="flex items-center m-auto ">
      <div><img className="h-7.75 max-w-7.75 w-full object-cover  bg-transparent rounded-2xl" src={`${icon}`} alt="" /></div>
      <div className="flex flex-col lg:ml-4  ml-1.5">
        <span className="text-[20px] font-medium ">{title}</span>
        <span className="text-[14px] font-normal whitespace-nowrap">{info}</span>
      </div>
      <div className="line w-18 rotate-90 bg-white border lg:ml-3"></div>
    </div>
  );
};

export default Location;
