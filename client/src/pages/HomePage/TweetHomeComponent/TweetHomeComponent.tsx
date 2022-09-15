import React from 'react';
import {BsStars, BsEmojiDizzy} from "react-icons/bs";
import {MdPermMedia} from "react-icons/md"
import {AiOutlineFileGif, AiOutlineSchedule} from "react-icons/ai"
import {CgPoll} from "react-icons/cg"

export default function TweetHomeComponent() {
  return (
    <div className='flex flex-col border-b-2'>


        
    <div className='flex justify-between  items-center border-b-2 p-3  '>
    
    <h1 className='text-3xl font-semibold'>Home</h1>
    <BsStars className=' hover:bg-slate-200 rounded-full cursor-pointer text-3xl p-[4px]' />
    </div>

   
            <div className='flex p-3 '>
                <div className='  w-12 h-12 rounded-full border border-lighter   text-center '>
                
                </div>
                
                <div className='ml-3 flex-col w-full px-4 relative   '>
                    
                    <textarea className='w-full focus:outline-none bg-slate-100' placeholder='Whats happening'></textarea>

                    <div className='border-t-2 flex justify-between items-center   '>
                      <div className='flex  w-full  text-2xl p-2'>  
                      <MdPermMedia className='ml-2 cursor-pointer' />
                      <AiOutlineFileGif className=" ml-2 cursor-pointer" />
                      <CgPoll className='ml-2 cursor-pointer'/>
                      <BsEmojiDizzy className='ml-2 cursor-pointer' />
                      <AiOutlineSchedule className='ml-2 cursor-pointer' />
                      </div>

                      <button className=' h-[2.5rem] w-[6rem] rounded-3xl bg-blue-500 hover:bg-blue-600 text-xl mt-2 text-white mr-3'>Tweet</button>
                    </div>


                </div>
            </div>
    </div>

  
  )
}
