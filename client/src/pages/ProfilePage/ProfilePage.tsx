import React, {useContext} from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent'
import MenusBar from '../../Components/MenusBar/MenusBar'
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar'
import { CurrentUserContext } from '../../context/userContext'

export default function ProfilePage() {
    const {currentUser} = useContext(CurrentUserContext);

   
    const name = currentUser ? currentUser.name : ""; 
    const username = currentUser ? currentUser.username : "";
    const bio = currentUser ? currentUser.bio : "";
    const avatar = currentUser ? currentUser.avatar : "";

  return (
    <div className='bg-slate-100 h-screen w-screen     '>
    <div className='container mx-auto flex h-screen '> 
    <MenusBar />
    <div className='flex flex-col bg-slate-100 w-full  '>
        <ProfileCard name={name} username={username} avatar={avatar} 
        bio={bio} website='www.qrutz123.com' following={13} followers={200} joined="December, 2022" />
        
        {/* fetch users posts */}
        <PostCardComponent text='myPost' comments={9} retweets={0} likes={2} date="2022-01-2" />
    </div>
    <TrendingForYouBar />
    </div>
    </div>
  )
}
