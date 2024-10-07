// Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserActions from './UserActions';
import SearchBar from './SearchBar';
import Menu from './Menu';
import AuthModal from './AuthModal';



const Header = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const searchRef = useRef(null);
  const menuRef = useRef(null);

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

  // Close search bar and menu when clicking outside
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
        <Logo />

        {/* Center: Navigation */}
        <Navigation />

        {/* Right: User Actions */}
        <UserActions
          isLoggedIn={isLoggedIn}
          userEmail={userEmail}
          toggleModal={toggleModal}
          toggleSearch={toggleSearch}
          toggleMenu={toggleMenu}
          setIsLoggedIn = {setIsLoggedIn}
          setUserEmail = {setUserEmail}
        />
      </header>

      {/* Search bar */}
      {isSearchOpen && <SearchBar searchRef={searchRef} />}

      {/* Dropdown Menu */}
      {isMenuOpen && <Menu menuRef={menuRef} />}

      {/* Modal for Login/Signup */}
      {isModalOpen && (
        <AuthModal
          isSignUp={isSignUp}
          toggleModal={toggleModal}
          toggleSignUp={toggleSignUp}
          setIsLoggedIn={setIsLoggedIn}
          setUserEmail={setUserEmail}
        />
      )}
    </>
  );
};

export default Header;
