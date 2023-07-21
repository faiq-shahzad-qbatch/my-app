import React from "react";

const Tailwind = () => {
  return (
    <nav className="bg-[#111d2d] p-4">
      <div className="flex items-center justify-between px-4 md:px-20">
        <ul className="flex space-x-4">
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 7.172a4 4 0 10-5.656 5.656 4 4 0 005.656-5.656z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.828a4 4 0 105.656-5.656 4 4 0 00-5.656 5.656z"
            />
          </svg>
          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
            >
              Wall of Love
            </a>
          </li>
          <li>
            <select>
              <option>Resources</option>
            </select>
          </li>
        </ul>

        <div className="text-white font-bold text-xl">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-[#96a3b9] hover:text-gray-300 px-3 py-2 text-sm"
              >
                Request a demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Tailwind;
