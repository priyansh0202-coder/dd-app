
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Axios instance with default configurations
  const api = axios.create({
    baseURL: 'https://ecommercebackend-8gx8.onrender.com', // Backend URL
    withCredentials: true, // Include cookies in requests
  });


  useEffect(() => {
    const loadUser = () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        fetchUserName(userId)
          .then((name) => setUser({ name, userId }))
          .catch(() => setUser(null));
      } else {
        setUser(null);
      }
    };
    loadUser();
  }, []);

  const signup = async (name, email, password) => {
    try {
      const response = await api.post('/auth/signup', { name, email, password });
      const { userId } = response.data;

      sessionStorage.setItem('userId', userId);
      setUser({ name, email, userId });
      return userId;
    } catch (error) {
      console.error('Signup error:', error.response?.data?.error || error.message);
      throw new Error('Signup failed. Please try again.');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });

      if (response.data.message === 'Login successful') {
        const { userId } = response.data;

        sessionStorage.setItem('userId', userId);
        const name = await fetchUserName(userId);

        setUser({ name, email, userId });
        return 'Login successful';
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message;
      if (errorMessage === 'Account is suspended') {
        alert('Your account is suspended due to unusual activity.');
      } else if (errorMessage === 'Account is blocked') {
        alert('Your account has been terminated.');
      } else {
        alert('Login error. Please try again.');
      }
      console.error('Login error:', errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      sessionStorage.removeItem('userId');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error.response?.data?.error || error.message);
      throw new Error('Logout failed. Please try again.');
    }
  };

  const fetchUserName = async (userId) => {
    try {
      const response = await api.get(`/auth/user/${userId}`);
      return response.data.name;
    } catch (error) {
      console.error('Fetch user name error:', error.response?.data?.error || error.message);
      throw new Error('Failed to fetch user name.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, fetchUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
