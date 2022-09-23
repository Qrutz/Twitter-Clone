import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'

export default function CommentCard(props:any) {
  return (
    <div className='flex flex-col gap-4  border-b '>
      <div className="flex flex-shrink-0 p-4 pb-0 ">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src={props.avatar} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium ">
                        {props.name}
                        <span className="text-sm leading-5 ml-1 font-medium text-gray-400 group-hover:text-gray-300   ">
                            @{props.username} · 20h
                          </span>
                           </p>
                           <p className='text-sm font-light'>Replying to <span className='cursor-pointer text-blue-500'> @{props.postUsername}</span></p>
                    </div>
                    
                  </div>
               
            </div>
            <div className='pl-16'>
              <p className='text-base width-auto '>{props.content}.</p>
            </div>

            <div className='flex justify-between   items-center p-1 border-b pl-14'>
        <FaRegComment className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineRetweet className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineHeart className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <FiShare className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />

        </div>
            </div>
  )
}
