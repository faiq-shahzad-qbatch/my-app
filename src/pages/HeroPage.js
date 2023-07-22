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
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-4 whitespace-nowrap font-[PlayfairDisplay] text-[48px] font-bold leading-tight tracking-wide text-white md:text-[64px]">
            Create stunning <br /> web experiences
          </h1>

          <p className="max-w-lg text-justify text-[20px] leading-relaxed text-[#96a3b9] md:text-start">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>

          <div className="mt-6 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="group h-12 w-[80vw] rounded-sm bg-[#2174EA] text-white hover:bg-[#1D4ED8] md:w-44">
              Request Demo{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#90C2FC] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </button>

            <button className="h-12 w-[80vw] rounded-sm bg-gray-700 text-white hover:bg-gray-800 md:w-44">
              Explore Product
            </button>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-0">
          <img
            src="https://preview.cruip.com/tidy/images/hero-image-01.jpg"
            alt="hero"
            className="relative z-20 max-w-xs md:max-w-lg"
          />
          <div className="absolute inset-0 z-10 translate-x-4 translate-y-4 transform border-[2px] border-[#334155]"></div>
        </div>
      </div>

      <div className="mt-[20vh] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item, index) => (
          <HeroCard key={index} />
        ))}
      </div>
    </>
  );
};

export default HeroPage;
