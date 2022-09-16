import React from 'react';
import MenusBar from './Components/MenusBar/MenusBar';
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import { Routes, Route } from 'react-router-dom';
import TrendingForYouBar from './Components/TrendingForYouBar/TrendingForYouBar';
import ProfilePage from './pages/ProfilePage/ProfilePage';



export default function App() {
  return (
    <div className='bg-slate-100 h-screen w-screen     '>
      <div className='container mx-auto flex h-screen'>
      <MenusBar />
      <Routes> 
        <Route index element={<HomePage />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <TrendingForYouBar  />
        
      </div>
    </div>
  )
}
