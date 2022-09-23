import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent'
import MenusBar from '../../Components/MenusBar/MenusBar'
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar'
import {  useCurrentUser } from '../../context/CurrentUserContext'
import { useQuery } from '@tanstack/react-query'
import { API_URL } from '../../requests'
import axios from 'axios'

export default function ProfilePage() {
   


   const {name, username, bio, avatar, following, followers} = useCurrentUser();

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
            <PostCardComponent postid={post._id} avatar={post.postedByUserData[0].avatar} name={name} username={username} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
        )
    });

  return (
    <div className='bg-slate-100      '>
    <div className='container mx-auto flex  '> 
    <MenusBar />
    <div className='flex flex-col bg-slate-100 w-full  '>
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

