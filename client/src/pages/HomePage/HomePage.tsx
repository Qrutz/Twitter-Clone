import React, { useState } from 'react'
import PostCardComponent from './PostCardComponent/PostCardComponent';
import TweetHomeComponent from './TweetHomeComponent/TweetHomeComponent';


export default function HomePage() {
  const examplePost = {
    text: "This is a test post",
    comments: 0,
    retweets: 0,
    likes: 0,
    date: 2021
  }

  const [posts] = useState(examplePost);



 

 



  return (
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent />
      <PostCardComponent text={posts.text} comments={posts.comments} retweets={posts.retweets} likes={posts.likes} date={posts.date} />
      <PostCardComponent text={posts.text} comments={posts.comments} retweets={posts.retweets} likes={posts.likes} date={posts.date} />

    </div>
  )
}


