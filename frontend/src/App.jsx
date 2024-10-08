import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import FAQ from './pages/Faq'; // Import FAQ component (assuming you have created it)
//import Home from './Pages/Home'; // Move Home to a separate file (e.g., Home.jsx)
import ProfilePage from './pages/ProfilePage'; // Import FAQ component (assuming you have created it)

// Static posts data for the Home page
const posts = [
  {
    id: 1,
    title: 'GET 1k+ Cyber Security & Hacking Books',
    views: '2.4k',
    replies: 244,
    lastActivity: '11h',
    tags: ['giveaways', 'security'],
  },
  {
    id: 2,
    title: 'Youtube 0 Views',
    views: 77,
    replies: 1,
    lastActivity: '8h',
    tags: ['video', 'youtube'],
  },
  // Add more posts here
];

// Post component for displaying individual posts
const Post = ({ post }) => (
  <div className="border-b py-4 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-blue-600">{post.title}</h3>
      <div className="flex space-x-2 text-sm text-gray-500">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-100 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
    <div className="flex space-x-8 text-sm">
      <div>Replies: {post.replies}</div>
      <div>Views: {post.views}</div>
      <div>Last Activity: {post.lastActivity}</div>
    </div>
  </div>
);

// Main Home component
const HomePage = () => (
  <div className="bg-gray-50 min-h-screen py-8 px-6">
        <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Latest Posts</h2>
      
      {/* +New Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        + New
      </button>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        {/* The Header is always visible at the top */}
        <Header />

        {/* The pages are rendered below the header */}
        <div className="container mx-auto mt-6">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Default Home Page */}
            <Route path="/faq" element={<FAQ />} /> {/* FAQ Page */}
            <Route path="/profile" element={<ProfilePage />} />
            {/* You can add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
