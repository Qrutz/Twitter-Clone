import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MenusBar from '../../Components/MenusBar/MenusBar';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import { API_URL } from '../../requests';
import {AiOutlineArrowLeft, AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {FaRegComment} from "react-icons/fa";
import { useCurrentUser } from '../../context/CurrentUserContext';


export default function ClickOnPostPage() {
   const {id} = useParams();
   const user = useCurrentUser();
   console.log(user);

   const {status, data} = useQuery(['post', id], async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/api/post/fetchPost/${id}`, {
        headers: {
            "x-access-token": `${token}`
        }
    })
    console.log(res.data);
    return res.data;
});

    // create function that transforms the date "2022-09-23T15:45:19.940Z" to "time - 23 Sep 2022"
    const transformDate = (date: string) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = newDate.getMonth();
        const day = newDate.getDate();
        const hours = newDate.getHours();
        const minutes = newDate.getMinutes();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return (`${hours}:${minutes} PM - ${months[month]} ${day}, ${year}`);


    }
    



        



    // const post = (postQuery.isLoading || postQuery.isError) ? <div> loading </div> : postQuery.data;

    if (status === "loading") {
        return <div> loading </div>
    }

    
   

    
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto flex'>
        <MenusBar />
        <div className='flex flex-col h-full w-full' >


        <div className='flex gap-6  items-center border-b-2 p-3  '>
          
          <div>        
     <Link to = {'/'}> 
    <AiOutlineArrowLeft className='ml-1 w-[2.5rem] md:w-[3rem] h-[3rem] p-[6px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer  ' />
    </Link>
    </div>
    <h1 className='text-3xl font-semibold'>Tweet</h1>
    </div>


        <div className='flex flex-col gap-4 p-3 border-b '>
        <div className='flex gap-4 items-center'> 
        <img src={data.postedByUserData[0].avatar} alt="" className='w-12 h-12 rounded-full' />
        <div className='flex flex-col'>
        <h1 className='font-semibold text-lg'>{data.postedByUserData[0].name}</h1>
        <h1 className='text-gray-500 text-sm'>@{data.postedByUserData[0].username}</h1>

      
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='text-lg'>{data.content}</h1>
        {/* <img src={"post.image"} alt="" className='w-full h-[400px] object-cover' /> */}
        
        <div>
        <h1 className='text-gray-500 text-sm'>{transformDate(data.date)}</h1>
        
        </div>
        

        </div>
        
        </div>
        
        <div className='flex border-b'>
        <div className='flex gap-4 items-center p-3 '>
        <h1 className='text-lg '> <span className='font-bold'>{data.retweets} </span> Retweets</h1>
        <h1 className='text-lg'> <span className='font-bold'> {data.likes} </span> Likes</h1>  
        </div>
        </div>



        
        <div className='flex justify-around  items-center p-3 border-b'>
        <FaRegComment className='text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineRetweet className='text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineHeart className='text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <FiShare className='text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />

        </div>

        <div className='flex p-4 border-b '>
        <img src={user?.avatar} alt="" className='w-12 h-12 rounded-full' />
        <input type="text" placeholder='Tweet your reply' className='font-semibold text-xl  w-full h-12 bg-slate-100   border-gray-300 focus:outline-none focus:border-blue-500 pl-4' />

        <button className='bg-blue-500 text-white font-semibold rounded-full px-4 py-2 ml-2 h-[2.5rem] w-[6rem]'>Reply</button>
        

        </div>

        


       
      {/*hardcode a twitter comment card  */}
      <div className='flex flex-col gap-4  border-b '>
      <div className="flex flex-shrink-0 p-4 pb-0 ">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src={data.postedByUserData[0].avatar} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium ">
                        {data.postedByUserData[0].name}
                        <span className="text-sm leading-5 ml-1 font-medium text-gray-400 group-hover:text-gray-300   ">
                            @{data.postedByUserData[0].username} · 20h
                          </span>
                           </p>
                           <p className='text-sm font-light'>Replying to <span className='cursor-pointer text-blue-500'> @user123</span></p>
                    </div>
                    
                  </div>
               
            </div>
            <div className='pl-16'>
              <p className='text-base width-auto '>This is a Comment.</p>
            </div>

            <div className='flex justify-between   items-center p-1 border-b pl-14'>
        <FaRegComment className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineRetweet className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineHeart className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <FiShare className='text-gray-500 ml-1 md:w-[2rem] md:h-[2rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />

        </div>
            </div>





    


        </div>
        <TrendingForYouBar />
      </div>
    </div>
  )
}
