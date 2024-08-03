import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from 'react-icons/fa';





const Contact: React.FC = () => {

    const openFacebook = () => {
        window.open("https://www.facebook.com/maturalastminute/?locale=pl_PL", "_blank");
    }
    const openGoogleMap = () => {
        window.open("https://www.google.com/maps/place/Akademia+Maturzysty+i+%C3%93smoklasisty+-+korepetycje+na+ka%C5%BCdym+poziomie+nauczania/@50.276999,19.5627795,17z/data=!3m1!4b1!4m6!3m5!1s0x4716e32685a65cb7:0x899cbc09a4c4d068!8m2!3d50.276999!4d19.5627795!16s%2Fg%2F11n954ljk1?entry=ttu", "_blank");
    }

    return (
        <section id="contact" className="appear flex h-screen md:h-[600px] flex-col md:flex-row justify-center text-center items-center bg-teal-600 text-white font-Montserrat">
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full p-4  mb-4">
                    <FaFacebook className="hover:text-teal-500 cursor-pointer transition duration-300" onClick={openFacebook} size={70} />
                </div>
                <div>
                    <h1 className="text-lg font-bold">NAPISZ NA FACEBOOKU</h1>
                    <p>Napisz wiadomość - skontaktujemy się z tobą</p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 mb-4">
                    <BsFillTelephoneFill size={70} />
                </div>
                <div>
                    <h1 className="text-lg font-bold">ZADZWOŃ DO NAS</h1>
                    <p>Nr. tel: +48 692216682<br/>jeśli nie odbierzemy - napisz SMS. </p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center mb-2 md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 mb-4">
                    <IoMail size={70}/>
                </div>
                <div>
                    <h1 className="text-lg font-bold">NAPISZ MAILA</h1>
                    <p>Adres email: kontakt.akademia<br/>maturzysty@gmail.com</p>
                </div>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center items-center md:mb-0">
                <div className="bg-teal-200 rounded-full p-4 mb-4">
                    <FaBuilding className="hover:text-teal-500 transition duration-300 cursor-pointer" onClick={openGoogleMap} size={70}/>
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
