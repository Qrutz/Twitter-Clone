import React, {  useState } from 'react'
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import TweetHomeComponent from '../../Components/TweetHomeComponent/TweetHomeComponent';
import axios from 'axios';
import {API_URL, createPost} from "../.././requests";
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query';







export default function HomePage() {
  const queryClient = useQueryClient();
  const [value, setValue] = useState<any>("");

  
  

  // const [posts, setPosts] = useState(Array<any>);
  
  

  const {status, data, isLoading} = useQuery(['posts'], async () => {
    const token = localStorage.getItem("token");
    const res =  await axios.get(`${API_URL}/api/post/getFeed`, {
      headers: {
        "x-access-token": `${token}`
      }
    })
    return res.data;
  },
  )
  
  



  




  const addMutation = useMutation((value) => createPost(value), {
    
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") { 
      return;
    }
    addMutation.mutate(value, {
      onSuccess: () => {
        setValue("");
      }
    })
  }

  



 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

 
  const tweets = (status === 'loading') ? <h1>Loading...</h1> : (status === 'error') ? <span>Error: </span> :  data.map((post: any) => {
    return (
     <PostCardComponent postid={post._id} name={post.postedByUserData[0].name} username={post.postedByUserData[0].username} avatar={post.postedByUserData[0].avatar} key={post._id} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes?.length} date={post.date} />
    )
    })




   

  
  return (
    
      <div className='container mx-auto flex bg-white  '>
    <MenusBar />
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
     {tweets}
    </div>
    <TrendingForYouBar />
    </div>


  )
    }
  
  
  


  
    
        

 
