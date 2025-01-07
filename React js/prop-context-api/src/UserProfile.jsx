// UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserProfile;
