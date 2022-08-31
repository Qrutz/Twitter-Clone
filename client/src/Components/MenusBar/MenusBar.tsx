import React from 'react';
import {GrTwitter} from "react-icons/gr";
import {BiHomeCircle} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import {CgList, CgProfile} from "react-icons/cg";
import {FiBell, FiBookmark, FiMail, FiMoreHorizontal} from "react-icons/fi";
import MenusTab from './MenusTab/MenusTab';
import { Routes, Route, Link } from "react-router-dom";



export default function MenusBar() {
  return (
    <div className='flex flex-col h-full w-[12rem] '>
        <GrTwitter className="ml-1 w-[3.5rem] h-[3.5rem] p-[6px] text-blue-500 text-4xl hover:bg-slate-200 rounded-full cursor-pointer" />
         
         <Link to="/">
        <MenusTab title="Home" icon={BiHomeCircle} />
        </Link> 
        
        <Link to="/Explore"> 
        <MenusTab title="Explore" icon={HiOutlineHashtag} />
        </Link>

        <Link to="/Notifications">
        <MenusTab title="Notifications" icon={FiBell} />
        </Link>

        <Link to="/Messages">
        <MenusTab title="Messages" icon={FiMail} />
        </Link>

        <Link to="/Bookmarks"> 
        <MenusTab title="Bookmarks" icon={FiBookmark} />
        </Link> 

        <Link to="/Lists">   
        <MenusTab title="Lists" icon={CgList} />
        </Link>


        <Link to="/Profile"> 
        <MenusTab title="Profile" icon={CgProfile} />
        </Link>

        <Link to="/More">   
        <MenusTab title="More" icon={FiMoreHorizontal} />
        </Link>
       
    </div>
  )
}
