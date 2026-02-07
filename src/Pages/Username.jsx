import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import Button from "../Components/Common/Button";
import {
  Date,
  Members,
  Location,
  Guitar,
  Coupon,
  Commas,
  Trash,
} from "../../Icons";
import Line from "../Components/Common/Line";
import UsernameDummyImages from "../Components/Username/UsernameDummyImages";

function Username() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  let images;

  const handlePost = () => {
    if (comment.trim() === "") return;

    setComments((prev) => [...prev, comment]);
    setComment("");
  };
  const handleTrashBtn = (id) => {
    setComments((prev) => prev.filter((comment) => comment !== id));
  };

  return (
    <div className="w-full h-auto  itemes-center text-black text-4xl flex justify-center items-center flex-col">
      <Navbar
        shadow={
          " shadow-[0px_8px_35px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm bg-white py-1"
        }
      />
      <div className="flex flex-col lg:gap-25">
        <div className="max-w-330 justify-between h-auto mt-[15vh] w-full flex lg:flex-row flex-col lg:items-start items-center lg:p-0 p-8 lg:text-left text-center gap-15">
          <img
            className="max-w-100.25 h-102 rounded-[30px] object-cover"
            src="/assets/usernameImages/1st image.jpg"
            alt=""
          />
          <div className="flex-col flex md:gap-8  gap-4 md:p-0 p-5">
            <div className="flex gap-2 lg:justify-start justify-center text-[16px] font-normal">
              <Link
                className="hover:opacity-100   hover:font-medium transition-all duration-300 opacity-60 "
                to="/"
              >
                Home
              </Link>
              <span>&gt;</span>
              <Link
                className="hover:opacity-100 hover:font-medium  duration-300  transition-all opacity-60 "
                to="/username"
              >
                Username
              </Link>
            </div>
            <div className="flex md:flex-row gap-3 flex-col md:p-0 p-5 justify-between">
              <h1 className="text-[48px] font-semibold">Jhone Doe</h1>
              <div className="flex gap-5 text-[16px] font-semibold ">
                <Button
                  text={"Unshow Journey of Feed"}
                  fo
                  font={
                    "bg-[#2C49FE1A] text-black md:px-8  p-5 hover:scale-103 hover:bg-[#2C79FE1A] rounded-[23px]"
                  }
                />
                <Button
                  text={"Show Journey of Feed"}
                  font={
                    " bg-[#2C49FE] text-white md:px-8 p-5 hover:scale-103 hover:bg-[#2C39FE] rounded-[23px]"
                  }
                />
              </div>
            </div>
            <p className="text-[16px] font-normal leading-6 md:p-0 px-10">
              Dictumst vulputate eget quisque iaculis hendrerit quis ut
              fringilla. Senectus gravida sed interdum pretium at quam morbi.
              Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in
              duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
            </p>
            <div className="flex lg:justify-start justify-center md:gap-7 gap-4 text-[16px] font-normal">
              <div className="flex gap-2 items-center">
                <Date />
                <span>10/02/2022</span>
              </div>
              <div className="flex gap-2  items-center">
                <Location />
                <span>Mumbai</span>
              </div>
              <div className="flex gap-2  items-center">
                <Members />
                <span>1,080</span>
              </div>
              <div className="flex gap-2  items-center">
                <Guitar />
                <span>1,080</span>
              </div>
              <div className="flex gap-2 items-center">
                <Coupon />
                <span>1,080</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center  gap-15 lg:p-0 px-10">
          <div className="flex flex-col justify-center gap-5 md:p-0 p-10 ">
            <Commas />
            <p className="text-[16px] font-normal max-w-154.75 w-full text-center md:text-left tracking-wide leading-7">
              Semper faucibus suscipit ultricies eleifend semper sit tellus
              gravida pretium. Cras cursus ut semper eleifend tortor lectus
              tristique turpis. Laoreet amet ultrices est lectus accumsan nibh
              cursus nunc. Faucibus orci, neque, pretium, massa volutpat
              convallis nisl pellentesque. Gravida in ultrices vitae tortor.
              Dignissim viverra volutpat neque gravida aliquet urna faucibus
              viverra vulputate. nibh cursus nunc. Faucibus orci, neque,
              pretium, massa volutpat convallis nisl pellentesque. Gravida in
              ultrices vitae tortor. Dignissim viverra volutpat neque gravida
              aliquet urna faucibus viverra vulputate.
            </p>
          </div>
          <img
            className="max-w-154.7 h-103.75 rounded-[23px] object-cover"
            src="assets/usernameImages/2ndImage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex max-w-330 w-full flex-col gap-15 lg:p-0 p-5 mt-10 items-center">
        <div>
          <Line width={"max-w-[115px] h-8"} display={"justify-center"} />
          <h1 className="text-[46px] font-semibold">Gallery</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 lg:h-276.5  max-w-330 w-full">
          <img
            className="lg:h-81.5 h-50 w-full object-cover rounded-[30px]"
            src="/assets/usernameImages/3rdImage.jpg"
            alt=""
          />
          <img
            className="lg:h-81.5 h-50 w-full object-cover rounded-[30px]"
            src="/assets/usernameImages/4thImage.jpg"
            alt=""
          />
          <img
            className="w-full lg:h-full h-50 object-cover lg:row-span-2 rounded-[30px] "
            src="/assets/EventsFreeBoxImage.jpg"
            alt=""
          />
          <img
            className="lg:h-96.5 h-50 w-full object-cover lg:col-span-2  rounded-[30px]"
            src="/assets/usernameImages/1st image.jpg"
            alt=""
          />
          <img
            className="lg:h-81.5 h-50 w-full object-cover  rounded-[30px]"
            src="/assets/usernameImages/5thImage.jpg"
            alt=""
          />
          <img
            className="lg:h-81.5 h-50 w-full object-cover lg:col-span-2 rounded-[30px] "
            src="/assets/usernameImages/2ndImage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex max-w-330 text-center w-full flex-col gap-15 mt-10 items-center">
        <div className="flex flex-col gap-3">
          <div>
            <Line width={"w-[115px] h-7"} display={"justify-center"} />
            <h1 className="text-[46px] font-semibold">Tell Us!</h1>
          </div>
          <p className="text-[16px] font-normal max-w-170">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center text-[20px] items-center ">
          <div className="flex w-full justify-center whitespace-nowrap ">
            <div className="flex justify-center w-full border rounded-[35px] p-1 border-[#9CA1BE] ">
              <img
                src={`https://picsum.photos/seed/${images}/100/100`}
                alt=""
                className="h-13.75 w-13.75 rounded-full"
              />
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full  rounded outline-none font-normal px-3"
              />
              <Button
                text={" Post Comment"}
                font={
                  "bg-[#2C49FE] cursor-pointer trasition-all ease-in hover:scale-102 text-white font-semibold hover:bg-[#2C29FE]  py-4 px-7 rounded-[36px]"
                }
                onClick={handlePost}
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-2 flex-col mt-4">
            <div className="w-full flex flex-col md:gap-4 gap-2 pb-20">
              <UsernameDummyImages index={1} />

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
      </div>
      <Footer />
    </div>
  );
}

export default Username;
