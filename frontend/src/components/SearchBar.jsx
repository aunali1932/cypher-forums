// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchRef }) => (
  <div
    ref={searchRef}
    className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-80 p-3 z-50"
  >
    <input
      type="text"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search"
    />
    <div className="text-sm text-gray-400 mt-1">
      filters by metadata (e.g. in:title, in:personal, in:pinned)
    </div>
  </div>
);

export default SearchBar;
