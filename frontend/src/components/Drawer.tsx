import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-end ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-80 bg-white shadow-lg h-full overflow-auto">
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          ×
        </button>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
