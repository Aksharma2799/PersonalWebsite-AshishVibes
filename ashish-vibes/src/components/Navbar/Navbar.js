import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-transparent-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="w-72 h-42" src="https://i.ibb.co/PmwMRCf/logo.png" alt="Logo" />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="ml-4 flex items-center md:ml-6 font-semibold">
              <NavLink to="/" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                About
              </NavLink>
              <NavLink to="/contact" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                Contact Us
              </NavLink>
              <NavLink to="/projects" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                Projects
              </NavLink>
              <NavLink to="/blogs" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                Blogs
              </NavLink>
              <a href="https://youtube.com/@ashishvibes19?si=77J-RHHbUZLiDanm" onClick={closeMobileMenu} className="text-gray-300  nav-hover px-3 py-2 rounded-md text-sm">
                YouTube
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4H18V5H6V4ZM6 11H18V12H6V11ZM6 18H18V19H6V18Z"
                    fill="white"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V5H4V6ZM4 12H20V11H4V12ZM4 18H20V17H4V18Z"
                    fill="white"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={closeMobileMenu} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </NavLink>
            <NavLink to="/projects" onClick={closeMobileMenu} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </NavLink>
            <a href="https://youtube.com/@ashishvibes19?si=77J-RHHbUZLiDanm" onClick={closeMobileMenu} className="text-gray-300  nav-hover block px-3 py-2 rounded-md text-base font-medium">
              YouTube
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
