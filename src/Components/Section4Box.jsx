import React from "react";

function Section4Box({ image, date, title, text,divStyle,spanStyle,h3Style,imgStyle,pStyle }) {
  return (
    <div className={`${divStyle}`}>
      <img className={`${imgStyle}`} src={image} alt="" />
      <span className={`${spanStyle}`}>{date}</span>
      <h3 className={`${h3Style}`}>{title}</h3>
      <p className={`${pStyle}`}>{text}</p>
    </div>
  );
}

export default Section4Box;
