// AuthModal.jsx
import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const AuthModal = ({ isSignUp, toggleModal, toggleSignUp, setIsLoggedIn, setUserEmail }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    const payload = { username, email, password };
    try {
      const response = await fetch('http://localhost:8000/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        setSuccessMessage('Sign up successful! Please log in.');
        setUsername('');
        setEmail('');
        setPassword('');
        toggleSignUp(); // Switch to login form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to sign up.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    const payload = { email, password };
    try {
      const response = await fetch('http://localhost:8000/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const accessToken = data.access; // Extract the 'access' token
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', data.refresh);
        setIsLoggedIn(true);
        localStorage.setItem('userEmail', email);
        //setUserEmail(email);
        setSuccessMessage('Login successful!');
        toggleModal();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to log in.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50"
          onClick={toggleModal}
        >
          ✕
        </button>

        {/* Modal content */}
        {isSignUp ? (
          <SignUpForm
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignUpSubmit={handleSignUpSubmit}
            toggleSignUp={toggleSignUp}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
        ) : (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLoginSubmit={handleLoginSubmit}
            toggleSignUp={toggleSignUp}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
