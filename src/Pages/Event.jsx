import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import EventsFreeBox from "../Components/EventsFreeBox";
import Footer from "../Components/Footer";

function Event() {
  const EventsBox = [
    "Box1",
    "Box2",
    "Box3",
    "Box4",
    "Box5",
    "Box6",
    "Box7",
    "Box8",
    "Box9",
  ];
  return (
    <div className="w-full text-white text-4xl flex flex-col justify-center items-center ">
      <Navbar shadow={" bg-black/30 backdrop-blur-sm"} />
      <div className='max-w-440 w-full h-93 py-10 lg:text-left text-center  justify-center flex items-end bg-[linear-gradient(to_right,rgba(0,0,0,0.3)),url("/assets/EventsBgImage.jpg")]  bg-no-repeat bg-center bg-cover'>
        <div className="flex flex-col max-w-330 w-full  ">
          <div className="flex text-[16px] lg:justify-start justify-center  gap-2 font-normal ">
            <Link to="/">
              <span>Home</span>
            </Link>
            <span>&gt;</span>
            <Link to="/events">
              <span>Events</span>
            </Link>
          </div>
          <h1 className="text-[64px] font-semibold ">Events</h1>
        </div>
      </div>
      <div className="flex max-w-440 flex-col items-center h-auto lg:p-20 md:p-15 sm:p-10 p-5 ">
        <Line width={"w-[189px] h-5"} display={"justify-center"} />
        <h1 className="text-[48px] text-center font-bold text-black leading-20">
          Choose your next event
        </h1>
        <div className="max-w-330 w-full flex flex-wrap gap-6 justify-center mt-10">
          {EventsBox.map((box) => (
            <EventsFreeBox
              key={box}
              src={"/assets/EventsFreeBoxImage.jpg"}
              title={"Lorem ipsum dolar sit de"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
