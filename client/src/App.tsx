import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';




export default function App() {
  


  return (
    <div className='bg-slate-100 h-screen w-screen     '>
      <div className='container mx-auto flex h-screen'>
      <Routes> 
        <Route index element={<HomePage />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
     
        
      </div>
    </div>
  )
}
