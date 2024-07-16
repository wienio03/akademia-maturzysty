import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const courses = [
    {
        name: "Matematyka - 8 kl.",
        img: "../assets/courses/math1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Matematyka - matura podst.",
        img: "../assets/courses/math2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Matematyka - matura rozsz.",
        img: "../assets/courses/math3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Informatyka - 8 kl.",
        img: "../assets/courses/cs1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Informatyka - matura rozsz.",
        img: "../assets/courses/cs2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Chemia - 8 kl.",
        img: "../assets/courses/chemistry1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
    {
        name: "Chemia - matura rozsz.",
        img: "../assets/courses/chemistry2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem distinctio, esse ducimus nam voluptatem id rem consequuntur quas fugit quod voluptates hic. Cumque voluptates officia earum natus quae dolore."
    },
];

const Courses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + courses.length) % courses.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % courses.length);
    };

    return (
        <div className="w-3/4 m-auto font-Montserrat">
            <div className="mt-20 relative">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {courses.map((c, index) => (
                        <div key={index} className="min-w-full p-4 box-border">
                            <div className="bg-white h-[450px] text-black rounded-xl">
                                <div className="h-56 rounded-t-xl bg-teal-300 flex justify-center items-center">
                                    <img src={c.img} alt="NULL" className="h-44 w-44 rounded-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{c.name}</p>
                                    <p>{c.description}</p>
                                    <button className="bg-black text-white text-lg px-3 py-1 rounded-xl">Więcej</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
            </div>
        </div>
    );
};

export default Courses;
