import React from "react";

const Line = ({ display, width }) => {
  return (
    <div className={`flex max-w-196 ${display}  w-full`}>
      <svg
        className={`${width} h-[8px]`}
        viewBox="0 0 472 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2.49805" width="469.503" height="20" fill="#01C8FF" />
        <rect width="414.561" height="20" fill="#2C49FE" />
      </svg>
    </div>
  );
};

export default Line;
