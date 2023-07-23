import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../components/FeatureCard";

const FeaturePage = () => {
  const cardData = [
    {
      url: "https://preview.cruip.com/tidy/images/features-home-3-01.jpg",
      icon: fa1,
    },
    {
      url: "https://preview.cruip.com/tidy/images/features-home-3-02.jpg",
      icon: fa2,
    },
    {
      url: "https://preview.cruip.com/tidy/images/features-home-3-03.jpg",
      icon: fa3,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="max-w-2xl pb-12 pt-16 text-center font-[PlayfairDisplay] text-[48px] font-bold leading-tight text-white">
            Simplify operating and manage with transparency
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((item, index) => (
            <FeatureCard key={index} url={item.url} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturePage;
