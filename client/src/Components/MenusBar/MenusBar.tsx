import React from 'react';
import {GrTwitter} from "react-icons/gr";
import {BiHomeCircle} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import {CgList, CgProfile} from "react-icons/cg";
import {FiBell, FiBookmark, FiMail, FiMoreHorizontal} from "react-icons/fi";
import MenusTab from './MenusTab/MenusTab';


export default function MenusBar() {
  return (
    <div className='flex flex-col h-full w-[12rem] '>
        <GrTwitter className="ml-1 w-[3.5rem] h-[3.5rem] p-[6px] text-blue-500 text-4xl hover:bg-slate-200 rounded-full cursor-pointer" />
        <MenusTab title="Home" icon={BiHomeCircle} />
        <MenusTab title="Explore" icon={HiOutlineHashtag} />
        <MenusTab title="Notifications" icon={FiBell} />
        <MenusTab title="Messages" icon={FiMail} />
        <MenusTab title="Bookmarks" icon={FiBookmark} />
        <MenusTab title="Lists" icon={CgList} />
        <MenusTab title="Profile" icon={CgProfile} />
        <MenusTab title="More" icon={FiMoreHorizontal} />
    </div>
  )
}
