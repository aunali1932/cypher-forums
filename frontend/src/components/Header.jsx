import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png'; // Path to the logo
import { Link } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the menu

  const searchRef = useRef(null);
  const menuRef = useRef(null); // Ref for menu

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close search bar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef, menuRef]);

  return (
    <>
      <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-start">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
          <span className="text-2xl font-bold">
            <span className="text-[#18141C]">TOGETHER</span>{' '}
            <span className="text-[#08D4B4]">'WE'</span>{' '}
            <span className="text-[#18141C]">LEARN</span>
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-1 justify-end space-x-3 text-gray-700">
          <button href="#" className="hover:underline">HELP</button>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <span>-</span>
          <a href="https://x.com/CyanoMeme" className="hover:underline">
            memes <span role="img" aria-label="frog">🐸</span><span role="img" aria-label="skull">💀</span>
          </a>
        </nav>

        {/* Right: Sign Up / Log In and icons */}
        <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
          <button onClick={toggleModal} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <span role="img" aria-label="user" className="mr-2">👤</span> Sign Up / Log In
          </button>
          <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700">
            <span role="img" aria-label="search" className="text-xl">🔍</span>
          </button>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
            <span role="img" aria-label="menu" className="text-xl">☰</span>
          </button>
        </div>
      </header>

      {/* Search bar */}
      {isSearchOpen && (
        <div ref={searchRef} className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-80 p-3 z-50">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <div className="text-sm text-gray-400 mt-1">filters by metadata (e.g. in:title, in:personal, in:pinned)</div>
        </div>
      )}

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-80 p-4 z-50">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 mb-4">
            <li className="text-pink-600">Give-Away and Freebies</li>
            <li className="text-blue-600">Tools & Scripts</li>
            <li className="text-purple-600">Discussion & Support</li>
            <li className="text-orange-600">Tutorials & Mentoring</li>
            <li className="text-gray-600">News & Articles</li>
            <li className="text-gray-500">All categories</li>
          </ul>
          <h3 className="font-semibold mb-2">Tags</h3>
          <ul className="space-y-1">
            <li className="text-gray-700">#coupon</li>
            <li className="text-gray-700">#freebie</li>
            <li className="text-gray-700">#guide</li>
            <li className="text-gray-700">#tips-tricks</li>
            <li className="text-gray-700">#solved</li>
            <li className="text-gray-500">All tags</li>
          </ul>
        </div>
      )}

      {/* Modal for Login/Signup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
            {/* Close button */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50" onClick={toggleModal}>
              ✕
            </button>

            {/* Modal content */}
            {isSignUp ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter your username" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded" placeholder="Enter your password" />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                  Already have an account?{' '}
                  <button onClick={toggleSignUp} className="text-blue-600 hover:underline">Log In</button>
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Log In</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter your username" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded" placeholder="Enter your password" />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log In</button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                  Not a user?{' '}
                  <button onClick={toggleSignUp} className="text-blue-600 hover:underline">Sign Up</button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
