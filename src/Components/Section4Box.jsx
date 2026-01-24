import React from "react";

function Section4Box({ image, date, title, text }) {
  return (
    <div className="flex px-2 py-3 flex-col justify-between  max-w-84.75 hover:shadow-[2px_9px_32px_0px_rgba(0,0,0,0.06)] hover:cursor-pointer duration-300  ease-in-out rounded-md">
      <img className="xl:w-78.25 object-cover h-43.25 " src={image} alt="" />
      <span className="text-[14px] font-normal ml-3 mt-3">{date}</span>
      <h3 className="text-[24px] font-medium ml-3">{title}</h3>
      <p className="text-[16px] font-normal w-[80%] ml-3">{text}</p>
    </div>
  );
}

export default Section4Box;
