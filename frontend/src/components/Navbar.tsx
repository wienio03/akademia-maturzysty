import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 bg-white text-black shadow-lg lg:flex lg:items-center lg:justify-between font-Montserrat top-0 sticky">
      <div className="flex justify-between items-center p-4 lg:p-0">
        <span className="font-light lg:font-light text-s lg:text-2xl">
          <img src={logo} alt="logo" className="inline h-8 lg:h-12" />
          AKADEMIA MATURZYSTY
        </span>
        <button
          className="lg:hidden font-Inter text-lg mr-4 px-2 py-1 rounded-full bg-black text-white shadow-md shadow-teal-200 hover:bg-teal-300 transition"
          onClick={toggleMenu}
        >
          MENU
        </button>
      </div>
      <ul className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between flex-grow">
        <li className="lg:ml-20">
          <a href="#about" className="text-xl hover:text-cyan-300 transition duration-500">O NAS</a>
        </li>
        <li className="lg:mx-2">
          <a href="#service" className="text-xl hover:text-cyan-300 transition duration-500">OFERTA</a>
        </li>
        <li className="lg:mr-20">
          <a href="#contact" className="text-xl hover:text-cyan-300 transition duration-500">KONTAKT</a>
        </li>
      </ul>
      {isMenuOpen && (
        <ul className="z-20 lg:hidden flex flex-col items-center bg-white shadow-md absolute top-16 left-0 w-full">
          <li className="w-full text-center py-2 border-b border-gray-200">
            <a href="#about" className="text-xl hover:text-cyan-300 transition duration-500">O NAS</a>
          </li>
          <li className="w-full text-center py-2 border-b border-gray-200">
            <a href="#service" className="text-xl hover:text-cyan-300 transition duration-500">OFERTA</a>
          </li>
          <li className="w-full text-center py-2 border-b border-gray-200">
            <a href="#contact" className="text-xl hover:text-cyan-300 transition duration-500">KONTAKT</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
