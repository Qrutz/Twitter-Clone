import React from 'react';
import MenusBar from './Components/MenusBar/MenusBar';
import HomePage from './Components/HomePage/HomePage';
import ExplorePage from './Components/ExplorePage/ExplorePage';
import { Routes, Route } from 'react-router-dom';
import TrendingForYouBar from './Components/TrendingForYouBar/TrendingForYouBar';



export default function App() {
  return (
    <div className='bg-slate-100 h-screen w-screen     '>
      <div className='container mx-auto flex h-screen'>
      <MenusBar />
      <Routes> 
        <Route index element={<HomePage />} />
        <Route path="/Explore" element={<ExplorePage />} />
      </Routes>
      <TrendingForYouBar  />
        
      </div>
    </div>
  )
}
