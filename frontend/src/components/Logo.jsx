// Logo.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Logo = () => (
  <div className="flex items-center space-x-4 flex-shrink-0">
    <img src={logo} alt="Logo" className="h-16 w-auto" />
    <span className="text-2xl font-bold">
      <span className="text-[#18141C]">TOGETHER</span>{' '}
      <span className="text-[#08D4B4]">'WE'</span>{' '}
      <span className="text-[#18141C]">LEARN</span>
    </span>
  </div>
);

export default Logo;
