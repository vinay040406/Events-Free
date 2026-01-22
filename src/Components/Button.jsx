import React from "react";


const Button = ({text,bgColor,textColor,rounded,p,font,onClick,toast}) => {
  return (
    <button
    onClick={onClick}
      className={`whitespace-nowrap text-[20px] hover:scale-108 duration-200 ease-in-out  cursor-pointer ${font}  ${bgColor} ${textColor} ${rounded} ${p}`}
    >
      {text}
    </button>
  );
};

export default Button;
