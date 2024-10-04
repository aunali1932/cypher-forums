// Menu.jsx
import React from 'react';

const Menu = ({ menuRef }) => (
  <div
    ref={menuRef}
    className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-80 p-4 z-50"
  >
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
);

export default Menu;
