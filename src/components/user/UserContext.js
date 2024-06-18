import React, { createContext, useState, useContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Replace null with actual user data if logged in

  const login = (userData) => {
    setUser(userData); // Log the user in
  };

  const logout = () => {
    setUser(null); // Log the user out
  };

  const loginPrompt = () => {
    // Implement your login prompt logic here
    alert('Please log in to confirm your appointment');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loginPrompt }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
