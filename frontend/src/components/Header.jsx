import React from 'react';
import logo from '../assets/logo.png'; // Path to the logo

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-start">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        {/* Increase the size of the logo to make the text readable */}
        <img src={logo} alt="Logo" className="h-16 w-auto" /> {/* Adjusted logo size */}
        {/* Change the color scheme of "TOGETHER 'WE' LEARN" */}
        <span className="text-2xl font-bold">
          <span className="text-[#08D4B4]">TOGETHER</span>{' '}
          <span className="text-[#18141C]">'WE'</span>{' '}
          <span className="text-[#08D4B4]">LEARN</span>
        </span>
      </div>

      {/* Center: Navigation */}
      <nav className="flex flex-1 justify-end space-x-3 text-gray-700">
        <a href="#" className="hover:underline">HELP</a>
        <a href="#" className="hover:underline">FAQ</a>
        <span>-</span>
        <a href="#" className="hover:underline">
          memes <span role="img" aria-label="frog">🐸</span><span role="img" aria-label="skull">💀</span>
        </a>
      </nav>

      {/* Right: Sign Up / Log In and icons */}
      <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <span role="img" aria-label="user" className="mr-2">👤</span> Sign Up / Log In
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <span role="img" aria-label="search" className="text-xl">🔍</span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <span role="img" aria-label="menu" className="text-xl">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
