import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import { API_URL } from '../../requests';
import {  useQuery } from '@tanstack/react-query';

export default function UserPage() {
    const { username } = useParams();
    const token = localStorage.getItem("token");

    const userQuery = useQuery(['user', username], () => {
        return axios.get(`${API_URL}/api/user/fetchUser/${username}`, {
            headers: {
                "x-access-token": `${token}`
            },
        });
    });
 
    const postsQuery = useQuery(['posts', username], () => {
        return axios.get(`${API_URL}/api/post/getUserPosts/${username}`, {
            headers: {
                "x-access-token": `${token}`
            },
        });
    }); 



  return (
    
    <div className='container mx-auto flex  '> 
    <MenusBar />
    <div className='flex flex-col  w-full  '>
    <ProfileCard myProfile={false} name={userQuery.data?.data.name} username={userQuery.data?.data.username} avatar={userQuery.data?.data.avatar} bio={userQuery.data?.data.bio} website={userQuery.data?.data.website} following={userQuery.data?.data.following.length} followers={userQuery.data?.data.followers.length} joined={"December, 2022"} />
    {postsQuery.data?.data.map((post: any) => {
        return (
            <PostCardComponent postid={post._id} key={post._id} avatar={post.postedByUserData[0].avatar} name={post.postedByUserData[0].name} username={post.postedByUserData[0].username} text={post.content} comments={post.comments?.length} retweets={post.retweets} likes={post.likes?.length} date={post.date} />
        )
    }
    )}
    </div>
    <TrendingForYouBar />
    </div>
   
  )
    }


