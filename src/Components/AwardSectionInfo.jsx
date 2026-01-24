import React from "react";

function AwardSectionInfo({ svg, numbers, info }) {
  return (
    <div className="flex flex-col max-w-30.5 h-31.5 justify-between items-center">
      <div className="h-4.5 w-8.5 flex justify-center items-center">{svg}</div>
      <h3 className="font-bold text-[35px]">{numbers}</h3>
      <span className="text-[18px] font-normal">{info}</span>
    </div>
  );
}

export default AwardSectionInfo;
