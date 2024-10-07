import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode

  const accessToken = localStorage.getItem('accessToken'); // Get token from localStorage

  useEffect(() => {
    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/profile/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          console.error('Unauthorized: Token might be invalid or expired');
        }

        if (response.ok) {
          const data = await response.json();
          setBio(data.bio);
          setLocation(data.location);
          setDateOfBirth(data.date_of_birth);
          setIsProfileComplete(true); // Profile exists, set to true
        } else {
          console.error('Failed to fetch profile:', response.status);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [accessToken]);

  // Save profile data (PUT request)
  const handleSave = async (event) => {
    event.preventDefault();

    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    const profileData = {
      bio,
      location,
      date_of_birth: dateOfBirth,
    };

    try {
      const response = await fetch('http://localhost:8000/users/profile/', {
        method: 'PUT', // Change method to PUT for updating data
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.status === 401) {
        console.error('Unauthorized: Token might be invalid or expired');
      }

      if (response.ok) {
        console.log('Profile updated successfully');
        setIsEditing(false); // Switch back to view mode after saving
      } else {
        console.error('Failed to update profile:', response.status);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Edit mode toggle
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

      {isProfileComplete && !isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <p><strong>Bio:</strong> {bio || 'No bio set'}</p>
          <p><strong>Location:</strong> {location || 'No location set'}</p>
          <p><strong>Date of Birth:</strong> {dateOfBirth || 'No date of birth set'}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            onClick={handleEdit}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form className="bg-white rounded-lg shadow p-6" onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Profile
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
