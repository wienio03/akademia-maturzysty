import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faChalkboardTeacher, faBook, faComments, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div id="about" className="flex justify-between items-center flex-col font-Montserrat text-black">
            <div className="text-center items-center">
                <h3 className="font-medium text-3xl mt-20">O NAS</h3>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-between">
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faBullseye} size="6x" className="mb-5 text-teal-200"/>
                    <p>Naszą misją jest dostarczenie najwyższej jakości usług edukacyjnych, które pomagają uczniom osiągnąć ich pełny potencjał. Wierzymy, że każdy ma zdolność do nauki, a naszą rolą jest wspieranie i inspirowanie do ciągłego rozwoju.</p>
                </div>
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faEye} size="6x" className="mb-5 text-teal-200" />
                    <p>Naszą wizją jest stworzenie społeczności uczniów, którzy są pewni swoich umiejętności i gotowi na przyszłe wyzwania. Dążymy do tego, aby edukacja była dostępna, angażująca i dostosowana do indywidualnych potrzeb każdego ucznia.</p>
                </div>
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faChalkboardTeacher} size="6x" className="mb-5 text-teal-200" />
                    <p>Nasi nauczyciele to wykwalifikowani specjaliści z pasją do nauczania. Każdy z nich przeszedł rygorystyczny proces rekrutacji, aby zapewnić, że nasi uczniowie otrzymują edukację na najwyższym poziomie. Regularnie uczestniczą w szkoleniach, aby być na bieżąco z najnowszymi metodami nauczania.</p>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-between">
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faBook} size="6x" className="mb-5 text-teal-200" />
                    <p>Stosujemy innowacyjne metody nauczania, które są dostosowane do indywidualnych potrzeb uczniów. Wykorzystujemy różnorodne narzędzia edukacyjne, aby nauka była ciekawa i angażująca. Nasze podejście opiera się na praktycznych ćwiczeniach, interaktywnych lekcjach i regularnych ocenach postępów.</p>
                </div>
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faComments} size="6x" className="mb-5 text-teal-200"/>
                    <p>Opinie naszych uczniów są dla nas niezwykle ważne. Regularnie zbieramy feedback, aby doskonalić nasze usługi. Dzięki temu możemy zapewnić, że każdy uczeń otrzymuje indywidualne wsparcie i czuje się zmotywowany do nauki.</p>
                </div>
                <div className="py-20 px-32 text-center">
                    <FontAwesomeIcon icon={faPhone} size="6x" className="mb-5 text-teal-200" />
                    <p>Jeśli masz jakiekolwiek pytania lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami. Jesteśmy dostępni telefonicznie, mailowo oraz poprzez nasze media społecznościowe. Chętnie odpowiemy na wszystkie pytania i pomożemy znaleźć najlepsze rozwiązanie edukacyjne dla Ciebie.</p>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-center">
            </div>
        </div>
    );
}

export default About;
