import React, { useState } from "react";
import hero from "../assets/hero.jpg";
import axios from "axios";
import Drawer from "./Drawer";  

const Hero: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const consentCheckbox = document.getElementById("consent") as HTMLInputElement;

    if (!consentCheckbox.checked) {
      alert("Należy wyrazić zgodę na przetwarzanie danych osobowych zgodnie z Polityką Prywatności.");
    } else if (form.checkValidity() === false) {
      alert("Należy wypełnić wszystkie wymagane pola.");
    } else {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        course: formData.get("course"),
      };
      try {
        const response = await axios.post("http://127.0.0.1:5000/send-email", data, {
          headers: {
            "Content-Type": "application/json",
          }
        });
        alert("Dane pomyślnie przesłane!");
      } catch (error: any) {
        alert("Błąd przy wysyłaniu danych:\n" + error.message);
      }
    }
  };

  return (
    <section id="hero" className="appear relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center">
      <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none shadow-lg shadow-gray-400" style={{ objectPosition: "75%" }} />
      <div className="font-Montserrat relative z-10 flex flex-col lg:w-1/2 p-6 text-white text-center lg:text-left lg:ml-10 mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Witaj maturzysto!</h1>
        <p className="text-lg lg:text-xl mb-6">Twój sukces to nasz priorytet,<br />napisz maturę z nami!</p>
      </div>
      <div className="relative z-10 w-full max-w-md p-6 bg-white shadow-lg rounded-lg lg:mt-0 mx-auto lg:mx-0 lg:w-1/3 hover:translate-y-[-10px] transition-transform">
        <h2 className="text-2xl font-bold text-black mb-5">Wypełnij formularz</h2>
        <form method="POST" className="flex flex-col space-y-4" noValidate onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Imię" className="p-3 border border-gray-300 rounded-lg" required />
          <input name="surname" type="text" placeholder="Nazwisko" className="p-3 border border-gray-300 rounded-lg" required />
          <input name="email" type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg" required />
          <input name="phone" type="text" placeholder="Numer telefonu" className="p-3 border border-gray-300 rounded-lg" required />
          <select name="course" id="courses-select" className="p-3 border rounded-lg border-gray-300" required>
            <option value="">Wybierz rodzaj zajęć</option>
            <option value="kurs1">Matematyka 8 klasa</option>
            <option value="kurs2">Matematyka matura rozszerzona</option>
            <option value="kurs3">Matematyka matura podstawowa</option>
            <option value="kurs4">Chemia 8 klasa</option>
            <option value="kurs5">Chemia matura rozszerzona</option>
            <option value="kurs6">Informatyka matura rozszerzona</option>
            <option value="kurs7">Korepetycje z bieżącego materiału chemia/matematyka/informatyka</option>
          </select>
          <div className="flex items-start">
            <input type="checkbox" id="consent" className="mt-1 mr-2" required />
            <label htmlFor="consent" className="text-sm">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu nawiązania kontaktu i omówienia szczegółów zapisów na kursy zgodnie z <a href="#!" onClick={handleDrawerOpen} className="text-teal-500 underline">Polityką Prywatności</a>.
            </label>
          </div>
          <button type="submit" className="hover:bg-teal-300 transition duration-500 p-3 bg-black text-white rounded-lg">Wyślij</button>
        </form>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <h2 className="text-xl font-bold mb-4">Polityka Prywatności</h2>
        <p>
          treeeeeśććććć zrobić
        </p>
      </Drawer>
    </section>
  );
};

export default Hero;
