import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from 'react-icons/fa';


const Contact: React.FC = () => {
    return (
        <section id="contact" className="flex h-screen md:h-[600px] flex-col md:flex-row justify-center text-center items-center bg-teal-600 text-white font-Montserrat">
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full shadow-md p-4 shadow-teal-100 mb-4">
                    <FaFacebook size={70} />
                </div>
                <div>
                    <h1 className="text-lg font-bold">NAPISZ NA FACEBOOKU</h1>
                    <p>Napisz wiadomość - skontaktujemy się z tobą</p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 shadow-md shadow-teal-100 mb-4">
                    <BsFillTelephoneFill size={70} />
                </div>
                <div>
                    <h1 className="text-lg font-bold">ZADZWOŃ DO NAS</h1>
                    <p>Nr. tel: +48 692216682<br/>jeśli nie odbierzemy - napisz SMS. </p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 shadow-md shadow-teal-100 mb-4">
                    <IoMail size={70}/>
                </div>
                <div>
                    <h1 className="text-lg font-bold">NAPISZ MAILA</h1>
                    <p>Adres email: ak.mat@gmail.com<br/>Odpowiemy w 24h.</p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 shadow-md shadow-teal-100 mb-4">
                    <FaBuilding size={70}/>
                </div>
                <div>
                    <h1 className="text-lg font-bold">NASZ ADRES</h1>
                    <p>ul. Szpitalna 42<br/>32-200 Olkusz, Polska</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
