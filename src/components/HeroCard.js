import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const HeroCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden px-12 py-6">
      <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
        <FontAwesomeIcon icon={faFile} size="2x" className="text-white" />
      </div>
      <div className="px-2 py-4">
        <div className="font-[PlayfairDisplay] font-bold text-xl mb-2">
          Robust Workflow
        </div>
        <p className="text-gray-600 text-base">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
