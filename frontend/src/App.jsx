import './App.css';

import React from 'react';

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

const Header = () => (
  <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
    <div className="text-2xl font-bold text-red-600">1Hack</div>
    <div>
      <button className="mr-4 text-blue-600 hover:underline">Login</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
  </header>
);

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

const Home = () => (
  <div className="bg-gray-50 min-h-screen py-8 px-6">
    <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
    <div className="bg-white rounded-lg shadow p-6">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;

