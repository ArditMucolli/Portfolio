"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed z-10 top-0 w-full bg-white">
        <div className="max-w-7xl mx-auto p-5 flex items-center justify-center relative">
          {/* Navbar links hidden on mobile */}
          <div className="hidden lg:flex items-center font-bold space-x-4 gap-5 md:space-x-8">
            <a
              href="/"
              className={`${
                isActive("/") ? "font-bold" : "font-normal"
              } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`${
                isActive("/about") ? "font-bold" : "font-normal"
              } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
            >
              About
            </a>
            <a
              href="/work"
              className={`${
                isActive("/projects") ? "font-bold" : "font-normal"
              } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
            >
              Work
            </a>
            <a
              href="/projects"
              className={`${
                isActive("/projects") ? "font-bold" : "font-normal"
              } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
            >
              Projects
            </a>
            <a
              href="/contact"
              className={`${
                isActive("/contact") ? "font-bold" : "font-normal"
              } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute left-5">
            <button onClick={toggleMenu} className="text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-20 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>
          <div
            className="relative bg-white w-64 h-full p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="flex flex-col space-y-4 mt-20 gap-5 text-center">
              <a
                href="/"
                className={`${
                  isActive("/") ? "font-bold" : "font-normal"
                } text-black uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className={`${
                  isActive("/about") ? "font-bold" : "font-normal"
                } text-black hover:font-bold transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/projects"
                className={`${
                  isActive("/projects") ? "font-bold" : "font-normal"
                } text-black hover:font-bold transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`${
                  isActive("/contact") ? "font-bold" : "font-normal"
                } text-black hover:text-gray-600 transition-all duration-300 ease-in-out uppercase tracking-wide md:tracking-widest text-sm md:text-base`}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
