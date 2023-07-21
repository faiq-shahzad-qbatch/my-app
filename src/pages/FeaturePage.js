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
          <h1 className="font-[PlayfairDisplay] font-bold text-white text-5xl mb-4 text-center px-20 py-20">
            Simplify operating and manage
            <br />
            with transparency
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {cardData.map((item, index) => (
            <FeatureCard key={index} url={item.url} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturePage;
