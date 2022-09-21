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
    axios.post("api/post/createPost", {
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

  // async function convertIDtoName(id: string) {
  //   await axios.get(`http://localhost:5000/api/user/convertIDtoUser/${id}`)
  //     .then((res) => {
  //       return res.data.name;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("api/post/getFeed", {
      headers: {
        "x-access-token": `${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        
        // setPostsCopy(res.data);
        // convert res.data.postedBy to name
        // res.data.map((post:any) => {
        //   post.postedBy = convertIDtoName(post.postedBy);
        // })
        setPostsCopy(res.data);

      }
      )
      .catch((err) => {
        console.log(err);
      }
      )
  }, [posts])
  


        
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

 

  

  console.log(postsCopy);

  




  return (
    <div className='bg-slate-100      '>
      <div className='container mx-auto flex  '>
    <MenusBar />
    <div className='flex flex-col h-full w-full'>
      <TweetHomeComponent changeText={onChange} text={value} tweet={handleSubmit} />
      <PostCardComponent name="name" username='username' text="Hello" comments={0} retweets={0} likes={0} date={new Date().toLocaleString()} />
      {postsCopy.map((post: any) => {
        return <PostCardComponent name={post.postedBy} username='uname' key={post._id} text={post.content} comments={post.comments} retweets={post.retweets} likes={post.likes} date={formatDate(post.date)} />
      })}
    </div>
    <TrendingForYouBar />
    </div>
    </div>

  )

      }
      

        

 
