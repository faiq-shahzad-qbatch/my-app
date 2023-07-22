import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = (props) => {
  const { url, icon } = props; // Destructure the url prop from the props object

  return (
    <div className="mx-auto max-w-sm overflow-hidden bg-transparent px-4">
      <div className="relative left-8 top-8 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
        <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
      </div>

      <div className="group relative">
        <img src={url} alt="feature" className="relative z-20" />
        <div className="absolute inset-0 z-10 -translate-y-4 translate-x-4 transform border-[2px] border-[#212E40] transition-transform duration-300 ease-in-out group-hover:-translate-x-0 group-hover:translate-y-0"></div>
      </div>

      <div className="px-2 py-4">
        <div className="mb-2 font-[PlayfairDisplay] text-xl font-bold">
          Advanced Features
        </div>
        <p className="text-base text-gray-600">
          Lorem ipsum is placeholder text used in the graphic, print, and
          publishing for previewing layouts.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
