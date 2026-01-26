import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [login, setLogout] = useState("Log In");
  const [isOpen, setIsOpen] = useState(false);

  const [userLogin, setUserLogin] = useState(true);

  function handleLogout() {
    setTimeout(() => {
      userLogin
        ? setLogout("Log Out", setUserLogin(false))
        : setLogout("Log In", setUserLogin(true));
    }, 1000);
  }
 

  return (
    <nav
      className={`fixed max-w-330 z-100 w-full flex justify-between mt-0 md:mt-4 -ml-4  min-h-16.5 top-0 bg-black/30 backdrop-blur-sm rounded-lg`}
    >
      <div className={`md:hidden fixed sm:right-5 right-2 top-1 sm:top-3 `}>
        <button
          className={`text-[35px] font-bolder duration-900 ease-in-out z-auto`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        {/* <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer text-3xl font-bold"
        /> */}
      </div>
      <div className="flex items-center ">
        <img
          src="assets/logo.png"
          alt=""
          className="sm:h-auto lg:w-24.5 lg:h-20 h-15 w-20 cursor-pointer"
        />
        <div className="sm:text-[36px] text-[27px] font-bold flex items-center leading-0  lg:ml-1.25 cursor-pointer">
          <p className="text-[rgba(44,73,254,1)]">Events</p>
          <span className="text-[rgba(1,200,255,1)]">Free</span>
        </div>
      </div>
      <ul
        className={`
          ${isOpen ? "block showMenu translate-0 " : "md:flex hidden gap-10 md:flex-row md:justify-between items-center lg:gap-12.5 md:gap-4 text-[16px] md:px-4 lg:p-2 p-4 "}
          
         `}
      >
        {["HOME", "EVENTS", "FEED", "USER NAME"].map((item) => (
          <a
            key={item}
            className="font-normal hover:font-bold  duration-200 "
            href=""
          >
            {item}
          </a>
        ))}

        <Button
          text={login}
          textColor="text-white"
          bgColor="bg-[rgba(44,73,254,1)]"
          p="p-[10px_30px]"
          rounded="rounded-[23px]"
          font="font-[600] hover:scale-105 hover:bg-[rgb(35,74,214)]"
          onClick={handleLogout}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
