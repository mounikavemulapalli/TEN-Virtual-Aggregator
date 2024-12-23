import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Scientific Events", path: "/scientific-events" },
    { id: 2, label: "Journals", path: "/journals" },
    { id: 3, label: "Add Events", path: "/add-events" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setHoveredItem(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const activeStyle = "text-gray-400 font-semibold";
  const inactiveStyle = "text-[#fff]";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#80011f] text-white relative z-50 navbar">
      <div className="flex items-center">
      <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 243.913 230.792"
          xmlns="http://www.w3.org/2000/svg"
          data-type="ugc"
          role="presentation"
          aria-hidden="true"
          className="w-12 h-12 lg:w-14 lg:h-14 mr-2"
        >
          <g>
            <g opacity=".86">
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#e9b00d"
                d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z"
              ></path>
            </g>
          </g>
        </svg>
        <div className="font-bold text-white text-sm sm:text-xl lg:text-xl">
          TEN VIRTUAL AGGREGATOR
        </div>
      </div>

      <ul className="hidden lg:flex space-x-6 relative">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Home
          </NavLink>
        </li>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="relative flex items-center cursor-pointer"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="hover:text-gray-400">{item.label}</span>
           
            {hoveredItem === item.id && (
              <div
                className={`flex flex-col absolute top-full bg-white text-black p-4 rounded shadow-lg gap-4 mt-0`}
                style={{
                  zIndex: 1000,
                  ...(item.label === "  Add Events" &&
                  window.innerWidth >= 1024
                    ? { left: "50%", transform: "translateX(-50%)" }
                    : { right: 0 }),
                }}
              >
                <button
                  onClick={() => handleNavigation(`${item.path}/india`)}
                  className="p-2 bg-gray-100 hover:bg-[#80011f] hover:text-white rounded w-28"
                >
                  
                India  
                </button>
                <button
                  onClick={() => handleNavigation(`${item.path}/international`)}
                  className="p-2 bg-gray-100 hover:bg-[#80011f] hover:text-white rounded w-28"
                >
                
                  International
                </button>
              </div>
            )}
          </li>
        ))}
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {mobileMenuOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-[#80011f] text-white flex flex-col space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Home
            </NavLink>
          </li>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center cursor-pointer">
                <span>{item.label}</span>
                
              </div>
              {hoveredItem === item.id && (
                <div
                  className="flex flex-col gap-2 mt-2 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => handleNavigation(`${item.path}/india`)}
                    className="p-2 bg-gray-100 hover:bg-[#80011f] hover:text-white rounded text-[#000]"
                  >
                    
                    India
                  </button>
                  <button
                    onClick={() =>
                      handleNavigation(`${item.path}/international`)
                    }
                    className="p-2 bg-gray-100 hover:bg-[#80011f] hover:text-white rounded text-[#000]"
                  >
                    International
                  </button>
                </div>
              )}
            </li>
          ))}
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;