import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#111d2d] py-4">
      <div className="md:flex flex-col md:flex-row items-start md:items-center justify-evenly md:justify-between space-y-5 md:space-y-0">
        <div className="flex flex-row md:hidden justify-between">
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="#2472eb"
          >
            <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2"></path>
          </svg>

          <button onClick={toggleMenu} className="px-3 py-2">
            <svg
              className="w-6 h-6 fill-[#ffffff]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect y="4" width="24" height="2"></rect>
              <rect y="11" width="24" height="2"></rect>
              <rect y="18" width="24" height="2"></rect>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            showMenu ? "flex" : "hidden md:flex"
          } flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-5 space-y-5 md:space-y-0`}
        >
          <svg
            className={`${
              showMenu ? "hidden md:block" : "block"
            } w-8 h-8 text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="#2472eb"
          >
            <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2"></path>
          </svg>

          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-[#2472eb] px-3 py-2 text-md"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-[#2472eb] px-3 py-2 text-md"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-[#2472eb] px-3 py-2 text-md"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-[#2472eb] px-3 py-2 text-md"
            >
              Wall of Love
            </a>
          </li>
          <li>
            <select className="bg-transparent text-[#96a3b9] hover:text-[#2472eb] px-2 py-2 text-md">
              <option>Resources</option>
              <option>404</option>
              <option>Support</option>
            </select>
          </li>
        </ul>

        <ul
          className={`${
            showMenu ? "flex" : "hidden md:flex"
          } flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-5 space-y-5 md:space-y-0`}
        >
          <li>
            <a
              href="/"
              className="text-[#96a3b9] hover:text-[#2472eb] px-3 py-2 text-md"
            >
              Sign In
            </a>
          </li>
          <li className="flex flex-row items-center justify-between group">
            <a
              href="/"
              className="text-[#cbd5e1] hover:text-[#ffffff] px-3 text-lg"
            >
              Request a demo{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#2472eb] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
