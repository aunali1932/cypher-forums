// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex flex-1 justify-end space-x-3 text-gray-700">
    <button className="hover:underline">HELP</button>
    <Link to="/faq" className="hover:underline">
      FAQ
    </Link>
    <span>-</span>
    <a href="https://x.com/CyanoMeme" className="hover:underline">
      memes{' '}
      <span role="img" aria-label="frog">
        🐸
      </span>
      <span role="img" aria-label="skull">
        💀
      </span>
    </a>
  </nav>
);

export default Navigation;
