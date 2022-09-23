import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import { API_URL } from '../../requests';
import { useQuery } from '@tanstack/react-query';

export default function UserPage() {
    const { username } = useParams();
    const token = localStorage.getItem("token");

    const { data, isLoading, error } = useQuery(['user', username], () => {
        return axios.get(`${API_URL}/api/user/fetchUser/${username}`, {
            headers: {
                "x-access-token": `${token}`
            },
        });
    } 
    );

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: :( </div>;
    } else {


  return (
     <div className='bg-slate-100 h-screen w-screen     '>
    <div className='container mx-auto flex h-screen '> 
    <MenusBar />
    <div className='flex flex-col bg-slate-100 w-full  '>
        <ProfileCard name={data?.data.name} username={data?.data.name} avatar={data?.data.avatar} 
        bio={data?.data.bio} website='www.qrutz123.com' following={(data?.data.following).length} followers={(data?.data.followers).length} joined="December, 2022" />
        
        {/* fetch users posts */}
        {/* <PostCardComponent name={name} username={uname} text='myPost' comments={9} retweets={0} likes={2} date="2022-01-2" /> */}
    </div>
    
    </div>
    </div>
  )
    }
}

