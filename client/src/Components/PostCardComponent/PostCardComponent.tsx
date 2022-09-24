import React from 'react'
import {FiMessageSquare, FiShare} from "react-icons/fi"
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';




interface Props {
  name: string;
  username: string;
  text:  string,
  comments: number;
  retweets: number;
  likes: number;
  date: string;
  avatar: string;
  postid: string;
}



export default function PostCardComponent(props:Props) {
  return (
  <Link to={`/${props.username}/status/${props.postid}`}>
    <div className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-start px-3 py-2 space-x-4 border-b-2">
    <div className='md:flex mb-2  cursor-pointer   rounded-3xl p-[0.3rem] '>
      <div className=" md:h-12 rounded-full border border-lighter   text-center font-extralight">
        <Link to = {`/${props.username}`}>
        <img className="rounded-full w-12 h-12  " src={props.avatar} alt="profilepci" />
        </Link>
      </div>
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex justify-between">
        <div className="text-sm flex items-center space-x-2">
          <div className="flex items-center space-x-2 group">
            <div className="font-semibold group-hover:underline">{props.name}</div>
            <div className="text-gray-500">{props.username}</div>
          </div>
          <div className="text-gray-500">{props.date}</div>
        </div>
        <div className="text-gray-500">
          {/* <DotsHorizontalIcon className="w-4 h-4" /> */}
        </div>
      </div>
      <div>{props.text}</div>
      <div className="flex justify-between mr-3">
        <div className='flex gap-3 items-center'> 
        <FiMessageSquare />
        {props.comments}
        </div>
        <div className='flex gap-3 items-center'> 
        <AiOutlineRetweet />
        {props.retweets}
        </div>
        
        <div className='flex gap-3 items-center'> 
        <AiOutlineHeart />
        {props.likes}
        </div>

        <div className='flex gap-3 items-center'> 
        <FiShare />

        
        
        </div>
        
      </div>
    </div>
  </div>
  </Link>
  )
}
