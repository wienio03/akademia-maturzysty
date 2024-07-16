import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center">
      <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none shadow-lg shadow-gray-400" style={{ objectPosition: "75%" }} />
      <div className="font-Montserrat relative z-10 flex flex-col lg:w-1/2 p-6 text-white text-center lg:text-left lg:ml-10 mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Witaj maturzysto!</h1>
        <p className="text-lg lg:text-xl mb-6">Twój sukces to nasz priorytet,<br />napisz maturę z nami!</p>
      </div>
      <div className="relative z-10 w-full max-w-md p-6 bg-white shadow-lg rounded-lg  lg:mt-0 mx-auto lg:mx-0 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-black">Wypełnij formularz</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Imię" className="p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Nazwisko" className="p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg" />
          <input type="password" placeholder="Numer telefonu" className="p-3 border border-gray-300 rounded-lg" />
          <select name="courses" id="courses-select" className="p-3 border rounded-lg border-gray-300">
            <option value= "">Wybierz kurs</option>
            <option value="kurs1">Matematyka 8 klasa</option>
            <option value="kurs2">Matematyka matura rozszerzona</option>
            <option value="kurs3">Matematyka matura podstawowa</option>
            <option value="kurs4">Chemia 8 klasa</option>
            <option value="kurs5">Chemia matura rozszerzona</option>
            <option value="kurs6">Informatyka matura rozszerzona</option>
            <option value="kurs7">Korepetycje z bieżącego materiału chemia/matematyka/informatyka</option>
          </select>
          <button type="submit" className="hover:bg-teal-300 transition duration-500 p-3 bg-black text-white rounded-lg hover:bg-blue-600">Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
