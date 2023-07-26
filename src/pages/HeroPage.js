import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroCard from "../components/HeroCard";

const HeroPage = () => {
  const cardData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-between lg:flex-row lg:justify-around">
        <div className="flex max-w-sm flex-none basis-1/2 flex-col items-center lg:max-w-lg lg:items-start">
          <h1 className="mb-4 whitespace-nowrap font-[PlayfairDisplay] text-4xl font-bold text-white lg:text-6xl">
            Create stunning <br /> web experiences
          </h1>

          <p className="max-w-lg text-justify text-lg text-[#96a3b9] lg:text-start lg:text-xl">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>

          <div className="mt-6 flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <button className="group h-12 w-[80vw] rounded-sm bg-[#2174EA] text-white transition duration-300 hover:bg-[#1D4ED8] sm:w-[50vw] lg:w-44">
              Request Demo{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#90C2FC] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </button>

            <button className="h-12 w-[80vw] rounded-sm bg-[#334155] text-white transition duration-300 hover:bg-[#1E293B] sm:w-[50vw] lg:w-44">
              Explore Product
            </button>
          </div>
        </div>

        <div className="relative mt-20 max-w-xs flex-none basis-1/2 lg:mt-0 lg:max-w-lg">
          <img
            src="https://preview.cruip.com/tidy/images/hero-image-01.jpg"
            alt="hero"
            className="relative z-20"
          />
          <div className="absolute inset-0 z-10 translate-x-4 translate-y-4 transform border-[2px] border-[#334155]"></div>
        </div>
      </div>

      <div className="mt-[20%] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item, index) => (
          <HeroCard key={index} />
        ))}
      </div>
    </>
  );
};

export default HeroPage;
