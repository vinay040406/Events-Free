import React from "react";

const Button = ({ text, bgColor, textColor, rounded, p, font, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap hover:font-bolder   duration-400 ease-in-out  cursor-pointer ${font}  ${bgColor} ${textColor} ${rounded} ${p}`}
    >
      {text}
    </button>
  );
};

export default Button;
