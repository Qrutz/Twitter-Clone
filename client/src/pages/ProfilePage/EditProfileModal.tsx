import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai';

export default function EditProfileModal(props:any) {
  return (
   
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-[1000]   ">
    <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden"></div>
    
    <div className=" bg-white w-11/12 md:w-[42rem] mx-auto rounded shadow-lg z-50 overflow-y-auto">
    


     
        
        <div className="flex justify-between items-center  border p-1 ">
            <div className='flex items-center gap-5 p-2'>
        <svg onClick={props.handleExit} className="mt-2 cursor-pointer hover:bg-slate-400 rounded-full h-[2rem] w-[2rem] p-1 fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          <p className="text-2xl font-bold mt-2">Edit profile</p>
          </div> 

          <button className='bg-black text-white rounded-full h-[2.3rem] w-[4rem] mr-3'>Save</button>
         
        </div>
        
        {/* image banner*/} 
        <div className="flex justify-center items-center">
        <div className="w-full bg-cover bg-no-repeat bg-center h-[200px] bg-slate-700"  >
            // IMAGE BANNER HERE
        
        </div>
        </div>

        {/* half of avatar should be on top of image banner, put text on avatar */}
        <div className="flex  items-center    ">
        <div className="mt-[-4rem]  ">
        <div className="cursor-pointer  ml-5 rounded-full relative h-[9rem] w-[9rem]    "> 
        <img className=" h-[9rem] w-[9rem] shadow-2xl    rounded-full relative border-4    z-10" src={props.avatar} alt="" />
         <div className='h-[100%] w-[100%] absolute top-0  text-center z-[1000]   '>
            <AiOutlineCamera className='top-[65px] left-[65px] text-slate-300 h-full w-full p-[3.6rem]  text-4xl '>H </AiOutlineCamera>
         </div>
     
        </div>
        </div>
        </div>

        {/* name */}
        <div className='p-3 flex-col'>
        <div className="relative z-0">
    <input type="text"  className="block pt-4 pb-2 pl-[4px]  w-full   bg-transparent rounded-sm border border-gray-200 appearance-none outline-none    placeholder:text-gray-800 " placeholder={props.name}  />
    <label  className="absolute  text-gray-500    top-0 -z-10 origin-[0] left-1 text-xs   ">Name</label>
</div>
        </div>

        <div className='p-3 flex-col'>
        <div className="relative z-0">
    <input type="text"  className="block pt-4 pb-14  pl-[4px]  w-full   bg-transparent rounded-sm border border-gray-200 appearance-none outline-none    placeholder:text-gray-800 " placeholder={props.bio}  />
    <label  className="absolute  text-gray-500    top-0 -z-10 origin-[0] left-1 text-xs   ">Bio</label>
</div>
        </div>

        

       
            








     
        
      </div>
    </div>


    











    











  )
}
