import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import math1 from '../assets/courses/math1.jpg';
import math2 from '../assets/courses/math2.jpg';
import math3 from '../assets/courses/math3.jpg';
import cs1 from '../assets/courses/cs1.jpg';
import cs2 from '../assets/courses/cs2.jpg';
import general from '../assets/courses/general.jpg';
import chemistry1 from '../assets/courses/chemistry1.jpg';
import chemistry2 from '../assets/courses/chemistry2.jpg';

const service = [
    {
        name: "Matematyka - 8 kl.",
        img: math1,
        description: "Zajęcia przygotowujące do egzaminu ósmoklasisty z matematyki."
    },
    {
        name: "Matematyka - matura podst.",
        img: math2,
        description: "Zajęcia przygotowujące do matury podstawowej z matematyki."
    },
    {
        name: "Matematyka - matura rozsz.",
        img: math3,
        description: "Zajęcia przygotowujące do matury rozszerzonej z matematyki"
    },
    {
        name: "Informatyka - 8 kl.",
        img: cs1,
        description: "Zajęcia przygotowujące do zajęć na bieżąco i poszerzające wiedzę z informatyki."
    },
    {
        name: "Informatyka - matura rozsz.",
        img: cs2,
        description: "Zajęcia przygotowujące do matury rozszerzonej z informatyki"
    },
    {
        name: "Chemia - 8 kl.",
        img: chemistry1,
        description: "Zajęcia przygotowujące do zajęć na bieżąco i poszerzające wiedzę z chemii."
    },
    {
        name: "Chemia - matura rozsz.",
        img: chemistry2,
        description: "Zajęcia przygotowujące do matury rozszerzonej z chemii."
    },
    {
        name: "Bieżący materiał mat./inf./chem.",
        img: general,
        description: "Zajęcia przygotowujące do lekcji z bieżącego materiału."
    },
];

const Courses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (service.length/2));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + service.length) % (service.length/2));
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % (service.length/2));
    };

    return (
        <div id="service" className="w-11/12 lg:w-3/4 m-auto font-Montserrat flex flex-col mb-10">
            <div className="text-center items-center">
                <h3 className="font-medium text-3xl mt-20">OFERTA</h3>
            </div>
            <div className="rounded-lg bg-teal-600 mt-20 relative overflow-hidden shadow-2xl mb-10 hover:translate-y-[-10px] transition-transform">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}>
                    {service.map((s, index) => (
                        <div key={index} className="bg-transparent w-1/2 p-4 box-border flex-shrink-0">
                            <div className="bg-white h-[450px] text-black rounded-xl overflow-hidden">
                                <div className="h-56 bg-teal-600 flex justify-center items-center relative">
                                    <img src={s.img} alt={s.name} className="h-full w-full absolute object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-center text-lg lg:text-xl font-semibold">{s.name}</p>
                                    <p className="text-center text-sm lg:text-lg">{s.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="hover:bg-teal-300 transition duration-500 absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
                <button onClick={nextSlide} className="hover:bg-teal-300 transition duration-500 absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
            </div>
            <div className="text-start items-center text-sm">
                <h3>
                    Wszystkie zajęcia odbywają się na terenie Olkusza lub zdalnie - do uzgodnienia z prowadzącymi mailowo lub telefonicznie.
                    Wypełnij i prześlij <a href="#hero" className="text-teal-600 hover:text-teal-300 transition duration-500">formularz</a> na początku strony jeśli jesteś zainteresowany ofertą, skontaktujemy się z tobą jak najszybciej.
                    Przesłanie formularza nie zobowiązuje do brania udziału w kursie, jest dla nas jedynie wyrażeniem zainteresowania potencjalnym wzięciem udziału.
                </h3>
            </div>
        </div>
    );
};

export default Courses;
