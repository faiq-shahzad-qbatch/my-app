import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const HeroCard = () => {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white px-12 py-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500">
        <FontAwesomeIcon icon={faFile} size="2x" className="text-white" />
      </div>
      <div className="px-2 py-4">
        <div className="mb-2 font-[PlayfairDisplay] text-xl font-bold">
          Robust Workflow
        </div>
        <p className="text-base text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
