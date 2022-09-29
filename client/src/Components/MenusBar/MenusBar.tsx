import {GrTwitter} from "react-icons/gr";
import {MdPostAdd} from "react-icons/md";
import {BiHomeCircle} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import {CgList, CgProfile} from "react-icons/cg";
import {FiBell, FiBookmark, FiMail, FiMoreHorizontal} from "react-icons/fi";
import MenusTab from './MenusTab/MenusTab';
import { Link, NavLink  } from "react-router-dom";
import { useMyData } from '../../requests';




export default function MenusBar() {

 
  const {data} = useMyData();


  return (
    <div className='flex flex-col h-[100vh]  justify-between md:pr-[3rem] sticky top-0 bottom-0'>
      
      <div className='md:w-[12rem] w-[100%] md:p-3'> 
        <GrTwitter className="ml-1 w-[3rem] md:w-[3.5rem] h-[3.5rem] p-[6px] text-blue-500 text-4xl hover:bg-slate-200 rounded-full cursor-pointer" />
         
         <NavLink to="/" className={({isActive}) => isActive? "bg-slate-200  rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Home" icon={BiHomeCircle} />
        </NavLink> 
        
        <NavLink to="/Explore/Explore" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}  > 
        <MenusTab  title="Explore" icon={HiOutlineHashtag} />
        </NavLink>

        <NavLink to="/Notifications/Notifications" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Notifications" icon={FiBell} />
        </NavLink>

        <NavLink to="/messages" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>
        <MenusTab title="Messages" icon={FiMail} />
        </NavLink>

        <NavLink to="/Bookmarks/bookmarks" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}> 
        <MenusTab title="Bookmarks" icon={FiBookmark} />
        </NavLink> 

        <NavLink to="/Lists/l" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>   
        <MenusTab title="Lists" icon={CgList} />
        </NavLink>


        <NavLink to="/me" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"} > 
        <MenusTab title="Profile" icon={CgProfile} />
        </NavLink>

        <NavLink to="/More/m" className={({isActive}) => isActive? "bg-slate-200 rounded-3xl font-bold" : "font-normal"}>   
        <MenusTab title="More" icon={FiMoreHorizontal} />
        </NavLink>

        <Link to="/compose/tweet"> 
        <button className='hidden md:block w-full md:w-[13rem] rounded-3xl bg-blue-500 hover:bg-blue-600 text-2xl text-white font-semibold h-[3.2rem] mt-3'>Tweet</button>
        <MdPostAdd className=" mt-6 ml-2  md:w-[3.5rem] md:hidden p-[6px] text-white text-4xl hover:bg-blue-600 rounded-full cursor-pointer bg-blue-500" />

        </Link>
        </div>
       
        <div className=' md:flex mb-2  cursor-pointer  hover:bg-slate-300 rounded-3xl p-[0.3rem]  '>


        <div className='     md:h-12 rounded-full border border-lighter   text-center font-extralight '>
                <img className='w-12 h-12 rounded-full' src={data?.avatar} alt="" />
                </div>
          <div className='flex flex-col ml-2 '>
            <p className='hidden md:block text-lg font-bold text-gray-800'>{data?.name}</p>
            <span className='hidden md:block text-xs text-gray-600'>@{data?.username}</span>
          </div>
           </div>
    </div>
  )
}
