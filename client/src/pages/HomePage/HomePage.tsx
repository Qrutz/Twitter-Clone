import React, { useEffect, useState } from 'react'
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import TweetHomeComponent from '../../Components/TweetHomeComponent/TweetHomeComponent';
import axios from 'axios';




export default function HomePage() {
  


  const [posts, setPosts] = useState(Array<any>);

  const [postsCopy, setPostsCopy] = useState(posts);

  const [value, setValue] = useState("");




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if  (value === "") return;
    axios.post("http://localhost:5000/api/post/createPost", {
       content: value 
      },
      {
        headers: {
          "x-access-token": `${token}`
        }
      }
   

    )
      .then((res) => {
        console.log(res);
        setValue("");
        setPosts([res.data, ...posts]);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      )



  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/post/getFeed", {
      headers: {
        "x-access-token": `${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        setPostsCopy(res.data);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      )
  }, [posts])
  


        




 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  



  return (
    <div className='bg-slate-100      '>
      <div className='container mx-auto flex  '>
    <MenusBar />
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
      <PostCardComponent name="name" username='username' text="Hello" comments={0} retweets={0} likes={0} date={new Date().toLocaleString()} />
      {postsCopy.map((post) => {
        return <PostCardComponent name={post.postedBy} username='uname' key={post._id} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={post.date} />
      })}
    </div>
    <TrendingForYouBar />
    </div>
    </div>

  )

      }
      

        

 
