import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent'
import MenusBar from '../../Components/MenusBar/MenusBar'
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { API_URL, editUser, useMyData } from '../../requests'
import axios from 'axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React from 'react'
import EditProfileModal from './EditProfileModal'

export default function ProfilePage() {
    const queryClient = useQueryClient();
   
    const {data, isLoading} = useMyData();


  
   const [toggle, setToggle] = React.useState(false);
   const [nameEdit , setName] = React.useState("");
   const [bioEdit , setBio] = React.useState("");
   const [avatarEdit , setAvatar] = React.useState("");

    const name = isLoading ? "" : data.name;
    const bio = isLoading ? "" : data.bio;
    const avatar = isLoading ? "" : data.avatar;
    const username = isLoading ? "" : data.username;
    const followers = isLoading ? 0 : data.followers.length;
    const following = isLoading ? 0 : data.following.length;
    
   
   

   const myPostsQuery = useQuery(['myPosts'], () => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/post/getMyPosts/`, {
        headers: {
            "x-access-token": `${token}`
        },

    });
} 
);
console.log(myPostsQuery.data?.data.length);
    const myTweets = (myPostsQuery.isLoading) ?  <h1>Loading...</h1> : myPostsQuery.data?.data.map((post:any) => {
        return (
            <PostCardComponent key={post._id} postid={post._id} avatar={post.postedByUserData[0].avatar} name={name} username={username} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
        )
    });


    const editUserMutation = useMutation((value:any) => editUser(nameEdit, bioEdit, avatarEdit), {
        onSuccess: () => {
            queryClient.invalidateQueries(['myPosts']);
            queryClient.invalidateQueries(['currentUser']);

        }
    });


            




    const handleSubmit = (e:any) => {
        e.preventDefault();
        // mutation mutate function here 
        editUserMutation.mutate(nameEdit, {
            onSuccess: () => {
                setToggle(false);
                
            }
        });
    }





    

    
  return (
    <>
   {toggle? <EditProfileModal handleSaveChanges={handleSubmit} nameVal={nameEdit} onChangeName={(e:any) => setName(e.target.value)} onChangeBio={(e:any) => setBio(e.target.value)} onChangeAvatarVAL={(e:any) => setAvatar(e.target.value)} bioVal={bioEdit} avatarVal={avatarEdit} avatar={avatar} name={name} bio={bio} handleExit={() => setToggle(false)} /> : null}
    <div className={toggle ?  'container mx-auto flex opacity-50 pointer-events-none  ' : 'container mx-auto flex '  }> 

    
    
    <MenusBar />
    
    <div className='flex flex-col  w-full scroll-smooth '>
    <div className='flex gap-6  items-center border-b-2 p-3 h-[4rem] bg-white sticky top-0 bottom-0 z-40 '>
          
          <div>        
     <Link to = {'/'}> 
    <AiOutlineArrowLeft className='ml-1 w-[2.5rem] md:w-[3rem] h-[3rem] p-[6px]  text-2xl hover:bg-slate-200 rounded-full cursor-pointer  ' />
    </Link>
    </div>
    <div className='flex flex-col '>
    <h1 className='text-2xl font-semibold'>{name}</h1>
    <p>{myPostsQuery.data?.data.length} Tweets </p>
    </div>
    </div>
  
        <ProfileCard handleOnEdit={() => setToggle(!toggle)} name={name} username={username} avatar={avatar} 
        bio={bio} website='' following={following} followers={followers} joined="December, 2022" />
           
        
        
        {/* fetch users posts */}
        
        
        {myTweets}
                
    </div>
    <TrendingForYouBar />
    </div>
    </>

  )
}




