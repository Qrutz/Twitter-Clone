import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MenusBar from '../../Components/MenusBar/MenusBar';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import { API_URL, createComment } from '../../requests';
import {AiOutlineArrowLeft, AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {FaRegComment} from "react-icons/fa";
import { useCurrentUser } from '../../context/CurrentUserContext';
import CommentCard from './CommentCard';


export default function ClickOnPostPage() {
   const {id} = useParams();
   const user = useCurrentUser();
   const [value, setValue] = React.useState("");

   const TweetQuery = useQuery(['post', id], async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/api/post/fetchPost/${id}`, {
        headers: {
            "x-access-token": `${token}`
        }
    })
    return res.data;
});

    const CommentQuery = useQuery(['comment', id], async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/comments/getComments/${id}`, {
            headers: {
                "x-access-token": `${token}`
            }
        })
        return res.data;
    }); 


    // create an addComment mutation
    const addCommentMutation = useMutation((value:any) => createComment(value, id), {
        onSuccess: () => {
            CommentQuery.refetch();
        }
    })

    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === "") {
            return;
        }
        addCommentMutation.mutate(value, {
            onSuccess: () => {
                setValue("");
            }
        })



    }



    function CommentCardShow() {
      if (CommentQuery.status === "loading") {
        return <div>Loading...</div>
      }
    else if (CommentQuery.status === "success") {
    // return <CommentCard content={CommentQuery?.data[0].content} name={CommentQuery?.data[0].postedByUserData.name} username={CommentQuery?.data[0].postedByUserData.username} postUsername={TweetQuery.data.postedByUserData[0].username} avatar={CommentQuery.data[0].postedByUserData.avatar} />
    return CommentQuery?.data.map((comment:any) => {
      return <CommentCard key={comment._id} content={comment.content} name={comment.postedByUserData.name} username={comment.postedByUserData.username} postUsername={TweetQuery.data.postedByUserData[0].username} avatar={comment.postedByUserData.avatar}
      />
    })
    }
  }

        

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

    if (TweetQuery.status === "loading") {
        return <div> loading </div>
    }



   

    
  return (
  
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
        <img src={TweetQuery.data.postedByUserData[0].avatar} alt="" className='w-12 h-12 rounded-full' />
        <div className='flex flex-col'>
        <h1 className='font-semibold text-lg'>{TweetQuery.data.postedByUserData[0].name}</h1>
        <h1 className='text-gray-500 text-sm'>@{TweetQuery.data.postedByUserData[0].username}</h1>

      
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='text-lg'>{TweetQuery.data.content}</h1>
        {/* <img src={"post.image"} alt="" className='w-full h-[400px] object-cover' /> */}
        
        <div>
        <h1 className='text-gray-500 text-sm'>{transformDate(TweetQuery.data.date)}</h1>
        
        </div>
        

        </div>
        
        </div>
        
        <div className='flex border-b'>
        <div className='flex gap-4 items-center p-3 '>
        <h1 className='text-lg '> <span className='font-bold'>{TweetQuery.data.retweets} </span> Retweets</h1>
        <h1 className='text-lg'> <span className='font-bold'> {TweetQuery.data.likes} </span> Likes</h1>  
        </div>
        </div>



        
        <div className='flex justify-around  items-center p-3 border-b'>
        <FaRegComment className='transition  delay-75 duration-300 text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineRetweet className='transition  delay-75 duration-300 text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <AiOutlineHeart className='transition  delay-75 hover:text-red-600 duration-300   text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />
        <FiShare className='transition  delay-75 duration-300 text-gray-500 ml-1 md:w-[2.5rem] md:h-[2.5rem]  p-[8px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer w-[2rem] h-[2rem]' />

        </div>

        <form onSubmit={handleSubmit}  className='flex p-4 border-b '>
        <img src={user?.avatar} alt="" className='w-12 h-12 rounded-full' />
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Tweet your reply' className='font-semibold text-xl  w-full h-12    border-gray-300 focus:outline-none focus:border-blue-500 pl-4' />

        <button type='submit' className='bg-blue-500 text-white font-semibold rounded-full px-4 py-2 ml-2 h-[2.5rem] w-[6rem]'>Reply</button>
        

        </form>

        


       
      {/*hardcode a twitter comment card  */}
      {CommentCardShow()}
      





    


        </div>
        <TrendingForYouBar />
      </div>
 
  )
}
