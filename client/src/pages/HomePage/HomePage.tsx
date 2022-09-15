import React, { useState } from 'react'
import PostCardComponent from './PostCardComponent/PostCardComponent';
import TweetHomeComponent from './TweetHomeComponent/TweetHomeComponent';




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
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
      <PostCardComponent text="Hello" comments={0} retweets={0} likes={0} date={new Date().toLocaleString()} />
      {posts.map((post) => {
        return <PostCardComponent text={post.text} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
      })}
    </div>

  )

      }
      

        

 
