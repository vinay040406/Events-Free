import React from "react";
import { Comment, Date, Like, Trash } from "../../Icons";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Button from "./Button";
import UsernameDummyImages from "./UsernameDummyImages";

const FeedPosts = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [fals, setfals] = useState(false);

  const handlePost = () => {
    if (comment.trim() === "") return;
    setComments((prev) => [...prev, comment]);
    setComment("");
  };
  const hanldleCommentClick = () => {
    setfals(!fals);
  };

  const [like, setLike] = useState(10);
  const handleTrashBtn = (val) => {
    setComments(comments.filter((comm) => comm !== val));
  };
  return (
    <div className="flex max-w-330 w-full flex-col gap-10 ">
      <div
        className={`flex  flex-col justify-between rounded-[30px]  p-5  ${fals ? "shadow-[0px_8px_35px_0px_rgba(0,0,0,0.15)]" : " border border-[rgba(0,0,0,0.2)]"}`}
      >
        <div className="flex lg:flex-row flex-col lg:items-start items-center">
          <div className="flex flex-col gap-4 lg:w-1/2 w-full">
            <div className="flex gap-5 items-center">
              <img
                className="h-=20 w-20 rounded-full"
                src="https://picsum.photos/seed/100/100"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-[25px] font-semibold ">Username</h2>
                <span className="text-[16px] font-normal opacity-60">
                  Post event name
                </span>
              </div>
            </div>
            <h4 className="mt-3 font-semibold text-[30px]">
              Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet
            </h4>
            <div className="flex gap-2 items-center">
              <Date />
              <span className="text-[16px] font-normal">10/02/2022</span>
            </div>
            <p className="text-[16px] tracking-wider leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              consectetur labore esse laboriosam in veniam ea eum, nesciunt
              deserunt modi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Possimus consectetur labore esse laboriosam in veniam ea
              eum, nesciunt deserunt modi.
            </p>
            <p className="text-[16px] tracking-wider leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              consectetur labore esse laboriosam in veniam ea eum, nesciunt
              deserunt modi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Possimus consectetur labore esse laboriosam in veniam ea
              eum, nesciunt deserunt modi.
            </p>
            <div className="flex gap-10">
              <div className="flex gap-2 items-center">
                <CiHeart
                  className="cursor-pointer"
                  onClick={() => setLike(like + 1)}
                />
                <span className="text-[16px]">{like}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Comment onClick={() => hanldleCommentClick()} />
                <span className="text-[16px]">{comments.length + 4}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 justify-center p-10">
            <div className="flex flex-col gap-8">
              <img
                className="h-57.75 w-75.75 rounded-[20px]"
                src="/assets/FeedImage1.jpg"
                alt=""
              />
              <img
                className="h-49.75 w-75.75 rounded-[20px]"
                src="/assets/FeedImage3.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-8">
              <img
                className="h-48.75 w-75.75 rounded-[20px]"
                src="/assets/FeedImage2.jpg"
                alt=""
              />
              <img
                className="h-59 w-75.75 rounded-[20px]"
                src="/assets/usernameImages/1st image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`${fals ? "flex" : "hidden"} flex-col gap-5 border-red-200`}
        >
          <span className="w-full h-0.5 bg-gray-400"></span>
          <div
            className={`flex justify-center w-full border border-[#9CA1BE] items-center rounded-[35px] p-1 `}
          >
            <img
              src={`https://picsum.photos/seed/200/100/100`}
              alt=""
              className="h-13.75 w-13.75 rounded-full"
            />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full  rounded outline-none font-normal text-[18px] px-3"
            />
            <Button
              text={" Post Comment"}
              font={
                "bg-[#2C49FE] text-[18px] cursor-pointer trasition-all ease-in hover:scale-102 text-white font-semibold hover:bg-[#2C29FE]  py-4 px-7 rounded-[36px]"
              }
              onClick={handlePost}
            />
          </div>
          <UsernameDummyImages />
          {comments.map((item, index) => (
            <div
              key={index}
              className="px-2 py-3 rounded flex w-330 justify-between items-start"
            >
              <img
                src={`https://picsum.photos/seed/${index + 5}/100/100`}
                alt="dummy"
                className="h-16 w-16 rounded-full bg-gray-400"
              />

              <div className="w-[94%] flex flex-col gap-2">
                <div className="flex flex-col items-start gap-2 bg-gray-100 px-5 py-3 rounded-r-[20px] rounded-bl-[20px]">
                  <h3 className="text-[16px] font-medium">Username</h3>

                  <p className="text-[16px] font-normal opacity-60 text-left">
                    {item}
                  </p>
                </div>

                <div className="w-full gap-2 px-5 flex items-center">
                  <Trash color={"black"} />
                  <span
                    className="text-[16px] font-normal cursor-pointer transition-all ease-in hover:text-red-700"
                    onClick={() => handleTrashBtn(item)}
                  >
                    Remove Comment
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedPosts;
