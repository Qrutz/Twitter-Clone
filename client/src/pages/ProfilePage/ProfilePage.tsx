import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent'
import MenusBar from '../../Components/MenusBar/MenusBar'
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar'
import {  useCurrentUser } from '../../context/CurrentUserContext'
import { useQuery } from '@tanstack/react-query'
import { API_URL } from '../../requests'
import axios from 'axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React from 'react'

export default function ProfilePage() {
   


   const {name, username, bio, avatar, following, followers} = useCurrentUser();
   const [tweetsN, setTweetsN] = React.useState(0);

   const { data, isLoading } = useQuery(['user'], () => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/post/getMyPosts/`, {
        headers: {
            "x-access-token": `${token}`
        },

    });
} 
);
    const myTweets = (isLoading) ?  <h1>Loading...</h1> : data?.data.map((post:any) => {
        return (
            <PostCardComponent key={post._id} postid={post._id} avatar={post.postedByUserData[0].avatar} name={name} username={username} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
        )
    });

    
  return (
    <div className='bg-slate-100      '>
    <div className='container mx-auto flex  '> 
    <MenusBar />
    
    <div className='flex flex-col bg-slate-100 w-full  '>
    <div className='flex gap-6  items-center border-b-2 p-3  '>
          
          <div>        
     <Link to = {'/'}> 
    <AiOutlineArrowLeft className='ml-1 w-[2.5rem] md:w-[3rem] h-[3rem] p-[6px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer  ' />
    </Link>
    </div>
    <div className='flex flex-col '>
    <h1 className='text-3xl font-semibold'>{name}</h1>
    <p>{tweetsN} Tweets </p>
    </div>
    </div>
        <ProfileCard name={name} username={username} avatar={avatar} 
        bio={bio} website='' following={following.length} followers={followers.length} joined="December, 2022" />
        
        {/* fetch users posts */}
        
        {myTweets}
                
    </div>
    <TrendingForYouBar />
    </div>
    </div>
  )
}

