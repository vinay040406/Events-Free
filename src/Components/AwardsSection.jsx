import React from "react";
import AwardSectionInfo from "./AwardSectionInfo";
import { Awards, Participants, Speakers, Topics } from "../../Icons";

function AwardsSection() {
  return (
    <div className='bg-[url("public/assets/AwardsSectionBgImage.jpg")] bg-cover bg-center bg-no-repeat h-full w-full'>
      <div className="max-w-480  h-full p-10 flex justify-center items-center border bg-[#2C49FECC] text-white text-center ">
        <div className="max-w-330 md:h-128.25 flex flex-col justify-evenly items-center">
          <h1 className="font-bold text-[48px] leading-12">
            Lorem ipsum dolor sit amet, <br /> consectetur
          </h1>
          <p className="md:mt-0 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. <br /> Suspendisse maximus ipsum
            sem. Donec ut justo et leo congue lacinia vitae nec{" "}
          </p>
          <div className="w-full grid md:grid-rows-1 sm:grid-rows-2  grid-rows-4 grid-flow-col md:justify-between justify-center md:gap-0 gap-10 md:p-0 sm:py-14 py-8 items-center">
            <AwardSectionInfo
              svg={<Participants />}
              info={"PARTICIPANTS"}
              numbers={8800}
            />
            <AwardSectionInfo svg={<Topics />} info={"TOPICS"} numbers={300} />
            <AwardSectionInfo
              svg={<Speakers />}
              info={"SPEAKERS"}
              numbers={50}
            />
            <AwardSectionInfo svg={<Awards />} info={"AWARDS"} numbers={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
