import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  //TODO:  add dropdown menu functionality
  return (
    <nav className="bg-white text-black shadow-lg lg:flex lg:items-center lg:justify-between font-Montserrat">
      <div className="flex justify-between items-center">
        <span className="font-light lg:font-light text-xs lg:text-2xl">
          <img src={logo} alt="logo" className="px-4 inline" />
          AKADEMIA MATURZYSTY
        </span>
        <ul className="flex items-center justify-end text-white">
          <li className="lg:hidden font-bold px-3 py-2 text-xs rounded-full shadow shadow-teal-200 bg-black mr-4 hover:bg-teal-400 transition duration-500">
            <button>Zaloguj się</button>
          </li>
          <li className="lg:hidden px-2 text-black">
            <button>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:ml-4 lg:flex lg:items-center lg:justify-start flex-grow">
        <li className="lg:mx-4 ">
          <a href="#about" className="text-xl hover:text-cyan-300 transition duration-500">O NAS</a>
        </li>
        <li className="lg:mx-4 ">
          <a href="#service" className="text-xl hover:text-cyan-300 transition duration-500">OFERTA</a>
        </li>
        <li className="lg:mx-4 ">
          <a href="#contact" className="text-xl hover:text-cyan-300 transition duration-500">KONTAKT</a>
        </li>
      </ul>
      <ul className="hidden lg:flex lg:items-center lg:justify-between">
        <li className="lg:mx-4 lg:text-lg lg:px-2 lg:py-2 lg:rounded-full  lg:bg-black lg:shadow-md lg:shadow-teal-200 lg:hover:bg-teal-300 transition duration-500 lg:text-white lg:font-bold">
          <button>Zaloguj się</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;