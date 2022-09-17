import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';




export default function App() {
  


  return (
    
     
      <Routes> 
        <Route index element={<HomePage />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      
     
        
     
  )
}
