// UserActions.jsx
import React from 'react';

const UserActions = ({ isLoggedIn, userEmail, toggleModal, toggleSearch, toggleMenu }) => (
  <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
    {!isLoggedIn ? (
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <span role="img" aria-label="user" className="mr-2">
          👤
        </span>{' '}
        Sign Up / Log In
      </button>
    ) : (
      <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        {userEmail ? userEmail[0].toUpperCase() : ''}
      </div>
    )}

    <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700">
      <span role="img" aria-label="search" className="text-xl">
        🔍
      </span>
    </button>
    <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
      <span role="img" aria-label="menu" className="text-xl">
        ☰
      </span>
    </button>
  </div>
);

export default UserActions;
