import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import FeedBox from "../Components/FeedBox";
import Line from "../Components/Line";
import FeedPosts from "../Components/FeedPosts";

function Feed() {
  const username = ["one", "two", "three", "four", "five", "six"];
  return (
    <div className="w-full max-w-440 flex-col gap-10 h-screen bg-white text-4xl flex  items-center text-black">
      <Navbar
        shadow={
          " shadow-[0px_8px_35px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm bg-white py-1"
        }
      />
      <div className="flex flex-col gap-25 ">
        <div className="max-w-330 lg:justify-between lg:items-start items-center lg:text-left text-center h-auto mt-[15vh] w-full flex lg:flex-row flex-col  md:px-8  px-2  gap-15">
          <img
            className="max-w-100.25 h-102 rounded-[30px] object-cover"
            src="/assets/usernameImages/1st image.jpg"
            alt=""
          />
          <div className="flex-col lg:items-start items-center flex gap-8">
            <div className="flex gap-2 text-[16px] font-normal">
              <Link
                className="hover:opacity-100   hover:font-medium transition-all duration-300 opacity-60 "
                to="/"
              >
                Home
              </Link>
              <span>&gt;</span>
              <Link
                className="hover:opacity-100 hover:font-medium  duration-300  transition-all opacity-60 "
                to="/feed"
              >
                Feed
              </Link>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[48px] font-semibold">Jhone Doe</h1>
            </div>
            <p className="text-[16px] font-normal leading-6">
              Dictumst vulputate eget quisque iaculis hendrerit quis ut
              fringilla. Senectus gravida sed interdum pretium at quam morbi.
              Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in
              duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-semibold opacity-60">
                Following Events :
              </h3>
              <div className="flex w-full gap-4">
                <FeedBox src={`assets/usernameImages/1st image.jpg`} />
                <FeedBox src={`assets/EventsFreeBoxImage.jpg`} />
                <div className="h-34.5 w-42.75 gap-3 rounded-[20px] flex justify-center items-center flex-col bg-[#EAEDFF]">
                  <h2 className="text-[36px] font-semibold opacity-60">+15</h2>
                  <span className="text-[16px] font-normal opacity-60">
                    more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:items-start items-center gap-5 max-w-330 w-full">
        <Line
          width={"w-[189px] h-2.5 lg:px-0 px-10"}
          display={"lg:justify-start justify-center"}
        />
        <h1 className="text-[46px] font-bold">New Posts</h1>
      </div>
      <div className="lg:p-0 p-5 flex flex-col gap-5">
        {username.map((index) => {
          return <FeedPosts key={index} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Feed;
