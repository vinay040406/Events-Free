import React, { useState } from "react";
import { Trash } from "../../../Icons";

const UsernameDummyImages = () => {
  const [comments,setComments] = useState([
    {
      id: 1,
      title:
        "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
    },
    {
      id: 2,
      title:
        "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
    },
    {
      id: 3,
      title:
        "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
    },
    {
      id: 4,
      title:
        "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus ",
    },
  ]);

  const handleClick = (id) => {
    setComments((prev) => prev.filter((comment) => comment !== id));
  };

  return comments.map((comment, index) => {
    return (
      <div
        className="lg:px-2 lg:py-3 p-5 rounded flex max-w-330 w-full justify-between items-start"
        key={index}
      >
        <img
          src={`https://picsum.photos/seed/${index + 1}/100/100`}
          alt="dummy"
          className="h-16 w-16 rounded-full bg-gray-400"
        />

        <div className="lg:w-[94%] w-[90%] flex flex-col gap-2">
          <div className="flex flex-col items-start gap-2 bg-gray-100 px-5 py-3 rounded-r-[20px] rounded-bl-[20px]">
            <h3 className="text-[16px] font-medium">Username</h3>

            <p className="text-[16px] font-normal opacity-60 text-left">
              {comment.title}
            </p>
          </div>

          <div className="w-50 flex gap-2 px-5 items-center text-black hover:text-red-700">
            <Trash />
            <span
              className="text-[16px] w-20 whitespace-nowrap font-normal cursor-pointer transition-all ease-in hover:font-bolder"
              onClick={() => handleClick(comment)}
            >
              Remove Comment
            </span>
          </div>
        </div>
      </div>
    );
  });
};

export default UsernameDummyImages;
