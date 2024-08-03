import React from 'react';
import TeamMember from './TeamMember';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChalkboardTeacher, faEye, faBook, faComments, faPhone  } from '@fortawesome/free-solid-svg-icons';
import gabriel from '../assets/tutors/gabriel.jpg';
import joanna from '../assets/tutors/joanna.png';

const tutors = [
    {
        name: "Joanna",
        surname: "Nowak-Włodyga",
        speciality: "Chemia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus earum molestiae, iure, non repudiandae odio quis error, dolores quibusdam molestias odit? Voluptatibus dolores aut iste, provident reiciendis id facere. Minus.",
        img: joanna,
        socialLinks: [
            { href: "https://www.linkedin.com/in/joanna-nowak-w%C5%82odyga-381819282/", icon: FaLinkedinIn },
            { href: "https://www.facebook.com/profile.php?id=100001767911707", icon: FaFacebookF },
        ]
    },
    {
        name: "Gabriel",
        surname: "Nowak",
        speciality: "Matematyka, informatyka",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus earum molestiae, iure, non repudiandae odio quis error, dolores quibusdam molestias odit? Voluptatibus dolores aut iste, provident reiciendis id facere. Minus.",
        img: gabriel,
        socialLinks: [
            { href: "https://www.linkedin.com/in/gabriel-nowak-a83161124/", icon: FaLinkedinIn },
            { href: "https://www.facebook.com/profile.php?id=100045040252671", icon: FaFacebookF },
        ]
    },
];


const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center font-Montserrat text-black">
            <div className="text-center">
                <h3 className="font-medium text-3xl mt-20">O NAS</h3>
            </div>
            <div className="flex flex-wrap justify-center my-10">
                {tutors.map((tutor, index) => (
                    <TeamMember key={index} {...tutor} />
                ))}
            </div>
     <div className="flex flex-col lg:flex-row lg:justify-center w-full">
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faBullseye} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Naszą misją jest dostarczenie najwyższej jakości usług edukacyjnych, które pomagają uczniom osiągnąć ich pełny potencjał. Wierzymy, że każdy ma zdolność do nauki, a naszą rolą jest wspieranie i inspirowanie do ciągłego rozwoju.</p>
                </div>
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faEye} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Naszą wizją jest stworzenie społeczności uczniów, którzy są pewni swoich umiejętności i gotowi na przyszłe wyzwania. Dążymy do tego, aby edukacja była dostępna, angażująca i dostosowana do indywidualnych potrzeb każdego ucznia.</p>
                </div>
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faChalkboardTeacher} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Nasi nauczyciele to wykwalifikowani specjaliści z pasją do nauczania. Każdy z nich przeszedł rygorystyczny proces rekrutacji, aby zapewnić, że nasi uczniowie otrzymują edukację na najwyższym poziomie. Regularnie uczestniczą w szkoleniach, aby być na bieżąco z najnowszymi metodami nauczania.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center w-full">
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faBook} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Stosujemy innowacyjne metody nauczania, które są dostosowane do indywidualnych potrzeb uczniów. Wykorzystujemy różnorodne narzędzia edukacyjne, aby nauka była ciekawa i angażująca. Nasze podejście opiera się na praktycznych ćwiczeniach, interaktywnych lekcjach i regularnych ocenach postępów.</p>
                </div>
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faComments} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Opinie naszych uczniów są dla nas niezwykle ważne. Regularnie zbieramy feedback, aby doskonalić nasze usługi. Dzięki temu możemy zapewnić, że każdy uczeń otrzymuje indywidualne wsparcie i czuje się zmotywowany do nauki.</p>
                </div>
                <div className="flex flex-col items-center py-10 px-5 lg:w-1/3">
                    <FontAwesomeIcon icon={faPhone} size="6x" className="mb-5 text-teal-600" />
                    <p className="text-center">Jeśli masz jakiekolwiek pytania lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami. Jesteśmy dostępni telefonicznie, mailowo oraz poprzez nasze media społecznościowe. Chętnie odpowiemy na wszystkie pytania i pomożemy znaleźć najlepsze rozwiązanie edukacyjne dla Ciebie.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
