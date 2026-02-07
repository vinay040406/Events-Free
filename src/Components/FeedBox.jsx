import React from "react";

const FeedBox = ({ src }) => {
  return (
    <div className="flex lg:flex-row flex-col w-2/5 justify-center cursor-pointer transition-all ease-in-out duration-300 items-center gap-3  rounded-[20px] p-3 hover:shadow-[0px_8px_35px_0px_rgba(0,0,0,0.09)] ">
      <div className="h-28 w-full">
        <img
          src={src}
          alt=""
          className="h-full w-full rounded-[20px]"
        />  
      </div>

      <div className="flex-col flex  gap-2">
        <h3 className="text-[16px] font-bold">Augue etiam</h3>
        <p className="text-[12px] font-normal leading-5">
          Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae
          blandit sociis.
        </p>
      </div>
    </div>
  );
};

export default FeedBox;
