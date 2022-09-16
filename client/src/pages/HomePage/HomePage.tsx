import React, { useState } from 'react'
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import TweetHomeComponent from '../../Components/TweetHomeComponent/TweetHomeComponent';




export default function HomePage() {
  


  const [posts, setPosts] = useState(Array<Post>);

  const [value, setValue] = useState("");




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") return;

    const newPost:Post = {
      text: value,
      comments: 0,
      retweets: 0,
      likes: 0,
      date: new Date().toLocaleString()
    }
    setPosts([...posts, newPost]);
    setValue("");
  }




 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };



  return (
    <div className='bg-slate-100 h-screen w-screen     '>
      <div className='container mx-auto flex h-screen '>
    <MenusBar />
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
      <PostCardComponent text="Hello" comments={0} retweets={0} likes={0} date={new Date().toLocaleString()} />
      {posts.map((post) => {
        return <PostCardComponent text={post.text} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
      })}
    </div>
    <TrendingForYouBar />
    </div>
    </div>

  )

      }
      

        

 
