import React from 'react'
import {FiMessageSquare, FiShare} from "react-icons/fi"
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai"

export default function PostCardComponent() {
  return (
    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer flex items-start px-3 py-2 space-x-4 border-b-2">
    <div>
      <div className="bg-slate-200 rounded-full h-12 w-12"></div>
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex justify-between">
        <div className="text-sm flex items-center space-x-2">
          <a className="flex items-center space-x-2 group">
            <div className="font-semibold group-hover:underline">Name</div>
            <div className="text-gray-500">username</div>
          </a>
          <div className="text-gray-500">date</div>
        </div>
        <div className="text-gray-500">
          {/* <DotsHorizontalIcon className="w-4 h-4" /> */}
        </div>
      </div>
      <div>Tweet text</div>
      <div className="flex justify-between mr-3">
        <div className='flex gap-3 items-center'> 
        <FiMessageSquare />
        2
        </div>
        <div className='flex gap-3 items-center'> 
        <AiOutlineRetweet />
        2
        </div>
        
        <div className='flex gap-3 items-center'> 
        <AiOutlineHeart />
        2
        </div>

        <div className='flex gap-3 items-center'> 
        <FiShare />
        2
        </div>
        
      </div>
    </div>
  </div>
  )
}
