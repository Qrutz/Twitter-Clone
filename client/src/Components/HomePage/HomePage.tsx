import React from 'react'
import PostCardComponent from './PostCardComponent/PostCardComponent';
import TweetHomeComponent from './TweetHomeComponent/TweetHomeComponent';


export default function HomePage() {
  return (
    <div className='flex flex-col h-full w-full'>
        <TweetHomeComponent />
        <PostCardComponent />
        <PostCardComponent />
        

       
    </div>
  )
}
