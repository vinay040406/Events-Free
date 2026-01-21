import React from "react";

const Button = ({ text, bgColor, textColor, rounded, p, textSize, font }) => {
  
  return (
    <button
      className={` whitespace-nowrap hover:scale-108 duration-200 ease-in-out  cursor-pointer ${font} ${textSize} ${bgColor} ${textColor} ${rounded} ${p}`}
    >
      {text}
    </button>
  );
};

export default Button;
