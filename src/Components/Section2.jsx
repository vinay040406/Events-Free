import React from "react";
import Line from "./Line";
import { useState, useRef } from "react";
import Section2Box from "./Section2Box";
import { Help, Info, Sharing } from "../../Icons";

function Section2() {
  const [play, setPlay] = useState(false);
  const youtube = useRef(null);

  return (
    <>
      <section className="max-w-480  w-full flex items-center justify-center">
        <main className="max-w-330 w-full flex flex-col xl:flex-row gap-20 justify-center items-center lg:py-20 py-10 mt-10">
          <div className="xl:max-w-156 xl:w-full xl:p-6 lg:p-5 p-0 w-[80vw] h-119.25 relative">
            {play ? (
              <iframe
                ref={youtube}
                className="rounded-lg "
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BRW2qLi9YDM?si=2K6thfytiATK3-4v"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
            ) : (
              <div className="xl:absolute relative flex justify-center top-0 left-0 bg-white cursor-pointer">
                <img
                  className="image"
                  onClick={(handleCLick) => {
                    setPlay(true);
                  }}
                  src="assets/Section2Image.png"
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="flex flex-col align-start max-w-158.25 w-full xl:justify-start xl:items-start  items-center justify-center xl:text-start text-center">
            <Line
              display={"xl:justify-start justify-center"}
              width={"max-w-[189px] w-full"}
            />
            <h1 className="md:text-[48px] sm:text-[38px] text-[28px] font-bold mt-3">
              What make us special ?
            </h1>
            <p className="text-[16px] font-normal opacity-70 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
              Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit
              elit, malesuada id suscipit cursus,
            </p>
            <div className=" flex flex-col ">
              <div className="flex md:flex-row flex-col md:gap-10 ">
                <Section2Box
                  image={<Sharing />}
                  margin={"mt-14"}
                  title={"Sharing"}
                  info={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
                  }
                />
                <Section2Box
                  image={<Info />}
                  margin={"md:mt-14 mt-8"}
                  title={"Info"}
                  info={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
                  }
                />
              </div>
              <div className="flex justify-center  xlLmr-19">
                <Section2Box
                  image={<Help />}
                  margin={"mt-8"}
                  title={"Help"}
                  info={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Section2;
