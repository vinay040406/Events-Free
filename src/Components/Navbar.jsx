import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ shadow }) => {
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
      className={`${shadow} fixed max-w-440 lg:p-4 z-100 w-full flex lg:justify-around md:justify-between lg:gap-20  min-h-16.5 left-0 top-0 rounded-lg duration-500 ease-in`}
    >
      <div
        className={`md:hidden fixed sm:right-5 right-2 top-1 sm:top-3  duration-900 ease-in-out`}
      >
        <button
          className={`text-[35px] font-bolder duration-900 ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className="flex items-center">
        <div className="h-16.5 w-24.5 flex justify-center items-center">
          <img
            src="assets/logo.png"
            alt=""
            className="sm:h-auto lg:w-24.5 lg:h-20 h-15 w-20 cursor-pointer object-center object-cover"
          />
        </div>
        <div className="sm:text-[36px] text-[27px] font-bold flex items-center leading-0  lg:ml-1.25 cursor-pointer">
          <p className="text-[rgba(44,73,254,1)]">Events</p>
          <span className="text-[rgba(1,200,255,1)]">Free</span>
        </div>
      </div>
      <ul
        className={` duration-900 ease-in-out gap-10 md:flex md:flex-row md:justify-between items-center lg:gap-12.5 md:gap-4 text-[16px] flex md:px-4 lg:p-2 p-4 

          ${isOpen ? "block showMenu text-white translate-x-0 " : "hidden"}
          
         `}
      >
        {["HOME", "EVENTS", "FEED", "USER NAME"].map((item) => (
          <Link
            to={
              (item === "HOME" && "/") ||
              (item === "EVENTS" && "/events") ||
              (item === "FEED" && "/feed") ||
              (item === "USER NAME" && "/username")
            }
            key={item}
            className="font-normal hover:font-bold  duration-200 "
            href=""
          >
            {item}
          </Link>
        ))}

        <Button
          text={login}
          textColor="text-white"
          bgColor="bg-[rgba(44,73,254,1)]"
          p="p-[12px_30px]"
          rounded="rounded-[23px]"
          font="font-[600] hover:scale-105 hover:bg-[rgb(35,74,214)]"
          onClick={handleLogout}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
