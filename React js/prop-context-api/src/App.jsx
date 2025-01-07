// App.jsx
import React from 'react';
import { UserContext } from './UserContext';
import Dashboard from './Dashboard';

const App = () => {
  const user = {
    name: "Muhammad Anas Raheem",
    role: "Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
