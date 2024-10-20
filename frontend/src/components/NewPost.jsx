import React, { useState, useEffect } from 'react';

const NewPost = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in
  const [category, setCategory] = useState(''); // Selected category
  const [postContent, setPostContent] = useState(''); // Post content

  // Simulate checking if the user is logged in (based on localStorage for now)
  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // Check if the user has an access token
    if (token) {
      setIsLoggedIn(true); // Set logged-in state if token is found
    } else {
      setIsLoggedIn(false); // If no token, user is not logged in
    }
  }, []);

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submit (for now, we'll just handle frontend)
  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (!category) {
      alert('Please select a category before posting.');
      return;
    }
    // Later, the post will be sent to the backend here
    console.log('Post Content:', postContent);
    console.log('Selected Category:', category);
  };

  if (!isLoggedIn) {
    return <p className="text-center text-lg">Kindly log in first to post.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      
      {/* Dropdown for category selection */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select a Category</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select Category --</option>
          <option value="1">Give-Away and Freebies</option>
          <option value="2">Tutorials & Methods</option>
          <option value="3">Tools & Scripts</option>
          <option value="4">News & Articles</option>
          <option value="5">Discussions & Solutions</option>
        </select>
      </div>

      {/* Textarea for post content */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Your Post</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          placeholder="Share your thoughts, questions, or solutions here..."
          rows="5"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>

      {/* Post button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default NewPost;
