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
      <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-around mt-4 md:mt-20">
        <div className="flex flex-col items-center md:items-start mb-20 sm:mb-0">
          <h1 className="mb-4 font-[PlayfairDisplay] font-bold text-white text-6xl">
            Create stunning
            <br />
            web experiences
          </h1>

          <p className="text-[#96a3b9] text-xl leading-relaxed">
            Our landing page template works on all devices, so
            <br />
            you only have to set it up once, and get beautiful
            <br />
            results forever.
          </p>

          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-6">
            <button className="items-center justify-between bg-[#2174EA] hover:bg-[#1D4ED8] h-12 w-44 rounded-sm text-white group">
              Request a demo{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#90C2FC] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </button>

            <button className="bg-gray-700 hover:bg-gray-800 h-12 w-44 rounded-sm text-white">
              Explore Product
            </button>
          </div>
        </div>

        <div className="relative flex">
          <img
            src="https://preview.cruip.com/tidy/images/hero-image-01.jpg"
            alt="hero"
            className="relative w-[512px] h-[400px] z-20"
          />
          <div className="absolute inset-0 border-2 border-[#96a3b9] z-10 transform translate-x-6 translate-y-4"></div>
        </div>
      </div>

      <div className="mt-[35vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <HeroCard key={index} />
        ))}
      </div>
    </>
  );
};

export default HeroPage;
