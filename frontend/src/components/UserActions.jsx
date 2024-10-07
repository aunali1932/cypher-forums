import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
  

const UserActions = ({ isLoggedIn,userEmail,toggleModal, toggleSearch, toggleMenu,setIsLoggedIn,setUserEmail}) => {

    const navigate = useNavigate();
    useEffect(() => {
        const temp = localStorage.getItem('userEmail');
        if (temp) {
          setUserEmail(temp);  // Moved setUserEmail into useEffect
        }
      }, [setUserEmail]);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        //const email = localStorage.getItem('userEmail'); // Get the stored email if needed
        
        //console.log("temp", temp)
        if (token) {
          setIsLoggedIn(true);
           // Restore the user email
        }
        //console.log(userEmail);
      }, [setIsLoggedIn,userEmail]); // This will run once when the component is mounted
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userEmail, setUserEmail] = useState('');
    const handleLogout = () => {
        // Remove the access token from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('refreshToken')
      
        // Update the login state
        setIsLoggedIn(false);
        setUserEmail('');
        navigate('/'); // This will redirect to the home route
        window.location.reload(); // This ensures a complete refresh of the web app
      };
      const goToProfile = () => {
        navigate('/profile'); // Navigate to the profile page
      };
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  return (
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
        <div className="relative" ref={profileRef}>
          <div
            className="profile-circle bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={toggleProfileMenu}
          >
            {console.log("test",userEmail)}
            {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
          </div>

          {isProfileMenuOpen && (
            <div className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-80 p-4 z-50">
              <ul className="space-y-2">
                <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-2 rounded" onClick={goToProfile} >
                  My Profile
                </li>
                <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-2 rounded">
                  My Posts
                </li>
                <li
                  className="text-red-600 hover:bg-red-100 cursor-pointer p-2 rounded"
                  onClick={handleLogout} // Call your logout function here
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
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
};

export default UserActions;

// // UserActions.jsx
// import React from 'react';

// const UserActions = ({ isLoggedIn, userEmail, toggleModal, toggleSearch, toggleMenu }) => (
//   <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
//     {!isLoggedIn ? (
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         <span role="img" aria-label="user" className="mr-2">
//           👤
//         </span>{' '}
//         Sign Up / Log In
//       </button>
//     ) : (
//       <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//         {userEmail ? userEmail[0].toUpperCase() : ''}
//       </div>
//     )}

//     <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700">
//       <span role="img" aria-label="search" className="text-xl">
//         🔍
//       </span>
//     </button>
//     <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
//       <span role="img" aria-label="menu" className="text-xl">
//         ☰
//       </span>
//     </button>
//   </div>
// );

// export default UserActions;
