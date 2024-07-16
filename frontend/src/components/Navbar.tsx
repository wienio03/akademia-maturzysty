import React from "react";

import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  //TODO:  add dropdown menu functionality
  return (
    <nav className="bg-white text-black shadow-lg lg:flex lg:items-center lg:justify-between font-Montserrat">
      <div className="flex justify-between items-center">
        <span className="font-light lg:font-light text-s lg:text-2xl">
          <img src={logo} alt="logo" className="px-4 inline" />
          AKADEMIA MATURZYSTY
        </span>
        <ul className="flex items-center justify-end text-white">
          <li className="lg:hidden font-Inter text-lg mr-4 px-2 py-1 rounded-full bg-black shadow-md shadow-teal-200 hover:bg-teal-300 transition ">
            <button>
              MENU
            </button>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between flex-grow">
        <li className="lg:ml-20">
          <a href="#about" className="text-xl hover:text-cyan-300 transition duration-500">O NAS</a>
        </li>
        <li className="lg:mx-2 ">
          <a href="#service" className="text-xl hover:text-cyan-300 transition duration-500">KURSY</a>
        </li>
        <li className="lg:mr-20">
          <a href="#contact" className="text-xl hover:text-cyan-300 transition duration-500">KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
