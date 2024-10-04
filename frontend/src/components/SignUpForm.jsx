// SignUpForm.jsx
import React from 'react';

const SignUpForm = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  handleSignUpSubmit,
  toggleSignUp,
  errorMessage,
  successMessage,
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
    {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
    {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
    <form onSubmit={handleSignUpSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          pattern="^\S+$"
          title="Username should not contain spaces."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          title="Password must be at least 6 characters long."
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign Up
      </button>
    </form>
    <p className="mt-4 text-center text-gray-600">
      Already have an account?{' '}
      <button onClick={toggleSignUp} className="text-blue-600 hover:underline">
        Log In
      </button>
    </p>
  </div>
);

export default SignUpForm;
