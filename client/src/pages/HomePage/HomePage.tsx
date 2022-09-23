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
  
  

  const {status, data} = useQuery(['posts'], async () => {
    const token = localStorage.getItem("token");
    const res =  await axios.get(`${API_URL}/api/post/getFeed`, {
      headers: {
        "x-access-token": `${token}`
      }
    })
    return res.data;
  },
  )
  // refetch the posts when mutation is done



  




  const addMutation = useMutation((value) => createPost(value), {
    
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMutation.mutate(value, {
      onSuccess: () => {
        setValue("");
      }
    })
  }



        
  // format date function 
  const formatDate = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const dt = d.getDate();
    return `${dt}/${month}/${year}`;
  }





 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

 
  const tweets = (status === 'loading') ? <h1>Loading...</h1> : (status === 'error') ? <span>Error: </span> :  data.map((post: any) => {
    return (
     <PostCardComponent name={post.postedBy} username='uname' key={post._id} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={formatDate(post.date)} />
    )
    })






  
  return (
    <div className='bg-slate-100      '>
      <div className='container mx-auto flex  '>
    <MenusBar />
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
      <PostCardComponent name="name" username='username' text="Hello" comments={0} retweets={0} likes={0} date={new Date().toLocaleString()} />
     {tweets}
    </div>
    <TrendingForYouBar />
    </div>
    </div>

  )
    }
  
  
  


  
    
        

 
