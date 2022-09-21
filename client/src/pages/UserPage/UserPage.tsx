import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import MenusBar from '../../Components/MenusBar/MenusBar';
import PostCardComponent from '../../Components/PostCardComponent/PostCardComponent';
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';

export default function UserPage() {
    const { username } = useParams();

    const [user, setUser] = React.useState<any>(null);

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`api/user/fetchUser/${username}`, {
            headers: {
                "x-access-token": `${token}`
            }
        })

            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                // user doesnt exist  
                console.log(err);
                
            })
    }, [username])

    console.log(user);

    
    const name = user ? user.name : ""; 
    const uname = user ? user.username : "";
    const bio = user ? user.bio : "";
    const avatar = user ? user.avatar : "";
    const following = user ? user.following.length : 0;  
    const followers = user ? user.followers.length : 0;
            

  return (
     <div className='bg-slate-100 h-screen w-screen     '>
    <div className='container mx-auto flex h-screen '> 
    <MenusBar />
    <div className='flex flex-col bg-slate-100 w-full  '>
        <ProfileCard name={name} username={uname} avatar={avatar} 
        bio={bio} website='www.qrutz123.com' following={following} followers={followers} joined="December, 2022" />
        
        {/* fetch users posts */}
        <PostCardComponent name={name} username={uname} text='myPost' comments={9} retweets={0} likes={2} date="2022-01-2" />
    </div>
    <TrendingForYouBar />
    </div>
    </div>
  )
}
