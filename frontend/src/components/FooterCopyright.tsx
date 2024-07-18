import React from 'react';
import { FaGithub } from 'react-icons/fa';

const FooterCopyright = () => {
  return (
    <footer className="bg-white text-black py-4 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2">
        <p>Stworzone przez wienio03</p>
        <a href="https://github.com/wienio03" target="_blank" rel="noopener noreferrer" className="text-black hover:text-teal-500">
          <FaGithub size={20} />
        </a>
        <p>&copy; 2024</p>
      </div>
    </footer>
  );
};

export default FooterCopyright;
