import React, { useState } from "react";
import Line from "./Line";
import Section4Box from "./Section4Box";
import Button from "./Button";
import Input from "./Input";

function Section4() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const saveToLocal = () => {
    localStorage.setItem("user_details", JSON.stringify(user));
  };

  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    let newErrors = { ...errors };

    if (name === "firstname" && value.trim().length < 6) {
      newErrors.firstname =
        "username must be included @ and at least 6 characters";
    } else delete newErrors.firstname;

    if (name === "email" && !emailRegex.test(value)) {
      newErrors.email = "Please enter valid mail id ";
    } else delete newErrors.email;

    if (name === "password" && !passwordRegex.test(value)) {
      newErrors.password =
        "Password must contains 1 letter,1 special character,1 number and at least 8 characters long";
    } else delete newErrors.password;

    if (name === "confirmPassword" && value !== user.password) {
      newErrors.confirmPassword = "Passwords do not match , Try again";
    } else delete newErrors.confirmPassword;

    if (!user.firstname) newErrors.firstname = "please enter username";

    if (!user.email) newErrors.email = "please enter email id";

    if (!user.password) newErrors.password = "please enter password ";

    if (!passwordRegex.test(user.password))
      newErrors.password = "please enter password ";

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const el in user) {
      if (user[el] == "") return;
      else {
        saveToLocal();
      }
    }
    const data = JSON.parse(localStorage.getItem("user_details"));
    console.log(data.email);
  };
  return (
    <div className="xl:p-20 lg:p-15 md:p-10 p-8 max-w-480 w-full flex flex-col justify-center items-center xl:gap-20 gap-15">
      <div className="max-w-330 w-full flex xl:flex-row flex-col xl:justify-between justify-center items-center">
        <div className="flex flex-col xl:items- gap-3 xl:items-start items-center mb-10">
          <Line
            width={"max-w-[189px] w-full h-[10px] "}
            display={"xl:justify-start justify-center"}
          />
          <h1 className="xl:text-[48px] text-[40px] font-bold tracking-0 leading-14">
            Explore our <br /> latest events
          </h1>
          <p className="max-w-133.75 text-[16px] font-normal tracking-wider w-full lg:px-0 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue lacinia vitae nec arcu.
          </p>
          <a className="text-[16px] font-bold" href="">
            LEARN MORE
          </a>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 justify-start">
          <Section4Box
            title={"Lorem ipsum"}
            date={"09/23/2021"}
            image={"assets/Section4Image1.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
            }
          />
          <Section4Box
            title={"Lorem ipsum"}
            date={"01/24/2026"}
            image={"assets/Section4Image2.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
            }
          />
        </div>
      </div>
      <div className="max-w-330  flex  w-full lg:flex-row flex-col items-center xl:justify-between ">
        <img
          className="lg:p-8 p-5 md:mb-4 flex justify-center"
          src="assets/Section4Image3.png"
          alt=""
        />
        <div className="flex flex-col lg:items-start mt-8 justify-center items-center ">
          <Line width="w-[189px]" display={"lg:justify-start justify-center"} />
          <h1 className="font-bold text-[48px]">Join Us !</h1>
          <p className="flex max-w-143.5 tracking-wider pr-7 tex-[16px] font-normal lg:px-0 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-143.5 w-full lg:text-left text-center mt-2.5 text-[16px] font-normal lg:px-0 px-4"
          >
            <label className="text-[35px] font-bold " htmlFor="">
              Sign Up
            </label>
            <br />
            <div className="flex w-full gap-4 mt-3">
              <div className="flex w-1/2 flex-col">
                <Input
                  typee={"text"}
                  placeholder={"First Name"}
                  value={user.firstname}
                  name={"firstname"}
                  onChange={handleChange}
                  Class={
                    "w-full p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                  }
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{errors.firstname}</p>
                )}
              </div>
              <div className="flex w-1/2 flex-col">
                <Input
                  typee={"text"}
                  placeholder={"Last Name"}
                  value={user.lastname}
                  name={"lastname"}
                  onChange={handleChange}
                  Class={
                    " p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                  }
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{errors.lastname}</p>
                )}
              </div>
            </div>
            <Input
              typee={"email"}
              placeholder={"Email"}
              value={user.email}
              name={"email"}
              onChange={handleChange}
              autoComplete={"email"}
              Class={
                "w-full p-2 border-[rgba(0,0,0,0.4)] mt-3 outline-none border rounded-lg"
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <div className="flex gap-4 mt-3">
              <div className="flex w-1/2 flex-col">
                <Input
                  typee={"password"}
                  placeholder={"Password"}
                  value={user.password}
                  name={"password"}
                  autoComplete={"password"}
                  onChange={handleChange}
                  Class={
                    "p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                  }
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="flex w-1/2 flex-col">
                <Input
                  typee={"password"}
                  placeholder={"Confirm Password"}
                  value={user.confirmPassword}
                  name={"confirmPassword"}
                  autoComplete={"confirmPassword"}
                  onChange={handleChange}
                  Class={
                    " p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
                  }
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            <textarea
              className="w-full min-h-31 mt-3 p-2 border-[rgba(0,0,0,0.4)] outline-none border rounded-lg"
              placeholder="About Me"
            ></textarea>
            <Button
              text="Sign up"
              textColor={
                "max-w-143.5 hover:shadow-xl text-white font-semibold text-[16px] rounded-[23px] hover:scale-101 py-2.5 w-full mt-5 bg-[#2C49FE] flex justify-center"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section4;
