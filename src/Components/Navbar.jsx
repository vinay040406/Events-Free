import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogout] = useState("Log In");

  const [userLogin, setUserLogin] = useState(true);
  let tl = gsap.timeline();

  function handleLogout() {
    if (userLogin) {
      setTimeout(() => {
        setLogout("Log Out", false);
        setUserLogin(false);
      }, 1000);
    } else if (!userLogin) {
      setTimeout(() => {
        setLogout("Log In", true);
        setUserLogin(true);
      }, 1000);
    }
  }

  return (
    <nav
      className={`fixed max-w-330 w-full flex justify-between mt-2 sm:mt-4  min-h-16.5 top-0 `}
    >
      <div className={`md:hidden fixed right-5 top-8 sm:top-14`}>
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          icon={faBars}
          className="cursor-pointer text-3xl font-bold"
        />
      </div>
      <div className="flex items-center ">
        <img
          src="assets/logo.png"
          alt=""
          className="sm:h-auto w-24.5 h-20 cursor-pointer"
        />
        <div className="sm:text-[36px] text-[30px] font-bold flex items-center leading-0  lg:ml-1.25 cursor-pointer">
          <p className="text-[rgba(44,73,254,1)]">Events</p>
          <span className="text-[rgba(1,200,255,1)]">Free</span>
        </div>
      </div>
      <ul
        className={`md:flex hidden gap-10  md:flex-row md:justify-between items-center lg:gap-12.5 md:gap-4 text-[16px] `}
      >
        <a className="font-normal hover:font-bold  duration-200 " href="">
          HOME
        </a>
        <a className="font-normal hover:font-bold duration-200 " href="">
          EVENTS
        </a>
        <a className="font-normal hover:font-bold duration-200m " href="">
          FEED
        </a>
        <a className="font-normal hover:font-bold duration-200  " href="">
          USER NAME
        </a>

        <Button
          text={login}
          textColor="text-white"
          bgColor="bg-[rgba(44,73,254,1)]"
          p="p-[10px_30px]"
          rounded="rounded-[23px]"
          font="font-[600]"
          onClick={handleLogout}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
