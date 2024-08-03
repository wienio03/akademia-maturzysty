import React from 'react';
import { IconType } from 'react-icons';

interface SocialLink {
    href: string;
    icon: IconType;
}

interface TeamMemberProps {
    name: string;
    surname: string;
    speciality: string;
    description: string;
    img: string;
    socialLinks: SocialLink[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, surname, speciality, description, img, socialLinks }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl m-4 w-full sm:w-80">
            <div>
                <img className="w-full h-auto object-cover" src={img} alt={`${name} ${surname}`} />
            </div>
            <div className="text-center p-5">
                <h3 className="text-xl font-bold">{name} {surname}</h3>
                <h4 className="text-teal-600">{speciality}</h4>
                <p className="text-gray-600">{description}</p>
                <div className="mt-3 flex justify-center space-x-4">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                            <link.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
