import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = (props) => {
  const { url, icon } = props; // Destructure the url prop from the props object

  return (
    <div className="max-w-sm mx-auto bg-transparent overflow-hidden px-4">
      <div className="relative top-8 left-8 flex items-center justify-center bg-blue-500 rounded-full w-16 h-16 z-30">
        <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
      </div>

      <div className="relative">
        <img src={url} alt="feature" className="relative z-20" />
        <div className="absolute inset-0 border-2 border-[#96a3b9] z-10 transform translate-x-4 -translate-y-4"></div>
      </div>

      <div className="px-2 py-4">
        <div className="font-[PlayfairDisplay] font-bold text-xl mb-2">
          Advanced Features
        </div>
        <p className="text-gray-600 text-base">
          Lorem ipsum is placeholder text used in the graphic, print, and
          publishing for previewing layouts.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
