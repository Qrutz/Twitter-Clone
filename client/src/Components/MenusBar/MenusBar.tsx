import React, {useState} from 'react';
import {GrTwitter} from "react-icons/gr";
import {BiHomeCircle} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import {CgList, CgProfile} from "react-icons/cg";
import {FiBell, FiBookmark, FiMail, FiMoreHorizontal} from "react-icons/fi";
import MenusTab from './MenusTab/MenusTab';
import { Link, NavLink  } from "react-router-dom";




export default function MenusBar() {


    


  return (
    <div className='flex flex-col h-full border-r-2 w-1/5 justify-between'>
      
      <div> 
        <GrTwitter className="ml-1 w-[3.5rem] h-[3.5rem] p-[6px] text-blue-500 text-4xl hover:bg-slate-200 rounded-full cursor-pointer" />
         
         <NavLink to="/" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Home" icon={BiHomeCircle} />
        </NavLink> 
        
        <NavLink to="/Explore" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}  > 
        <MenusTab  title="Explore" icon={HiOutlineHashtag} />
        </NavLink>

        <NavLink to="/Notifications" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Notifications" icon={FiBell} />
        </NavLink>

        <NavLink to="/Messages" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Messages" icon={FiMail} />
        </NavLink>

        <NavLink to="/Bookmarks" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}> 
        <MenusTab title="Bookmarks" icon={FiBookmark} />
        </NavLink> 

        <NavLink to="/Lists" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>   
        <MenusTab title="Lists" icon={CgList} />
        </NavLink>


        <NavLink to="/Profile" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"} > 
        <MenusTab title="Profile" icon={CgProfile} />
        </NavLink>

        <NavLink to="/More" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>   
        <MenusTab title="More" icon={FiMoreHorizontal} />
        </NavLink>

        <Link to="/compose/tweet"> 
        <button className=' w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-2xl text-white h-[2.75rem] mt-3'>Tweet</button>
        </Link>
        </div>
        <div className='flex mb-4  cursor-pointer hover:bg-slate-300 rounded-3xl p-[0.5rem] w-[90%] '>


        <div className='  w-12 h-12 rounded-full border border-lighter   text-center '>
                
                </div>
          <div className='flex flex-col ml-2 '>
            <p className='text-lg font-bold text-gray-800'>Qrutz</p>
            <span className='text-xs text-gray-600'>@qrutz</span>
          </div>

          

          

          
           </div>

        
    </div>
  )
}
