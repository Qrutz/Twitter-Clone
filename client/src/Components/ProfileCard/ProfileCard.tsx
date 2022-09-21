import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { CurrentUserContext } from '../../context/userContext';
import axios from 'axios';


export default function ProfileCard(props:User) {
    const [myProfile, setMyProfile] = useState(false);
    const [following, setFollowing] = useState(false);
    

    const { username } = useParams();

    

    const {currentUser} = useContext(CurrentUserContext);


    const token = localStorage.getItem("token");

  

   


    const uname = currentUser ? currentUser.name : "";

    useEffect(() => {
        if ((uname === username) || (username === undefined)) {
            setMyProfile(true);
        } else {
            setMyProfile(false);
        }
    }, [username, uname])

    useEffect(() => {
        if (username===undefined) {
            return;
        }   


        axios.get(`api/user/doIfollowUser/${username}`, 
            {
                headers: {  
                    "x-access-token": `${token}`
                }
            })
            .then((res) => {
                if (res.data.message === "yes") {
                    setFollowing(true);
                } else if (res.data.message === "no") {
                    setFollowing(false);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [username, token])
 

    async function followUser() {
        axios.put(`api/user/follow/${username}`, {},
            {
                headers: {
                    "x-access-token": `${token}`
                }
            })
            .then((res) => {
                console.log(res);
                setFollowing(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async function unfollowUser() {
        axios.put(`api/user/unfollow/${username}`, {},
            {
                headers: {
                    "x-access-token": `${token}`
                }
            })
            .then((res) => {
                console.log(res);
                setFollowing(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    const handleOnClick = () => {
        if (following) {
            unfollowUser();
        } else {
            followUser();
        }
    }




   const x = !following ? "Follow" : "Unfollow";


    const showEditButton = () => {
        if (myProfile) {
            return (
                <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded-full max-w-max border bg-transparent font- border-gray-700  hover:border-blue-800  items-center hover:shadow-lg font-semibold py-2 px-4 mr-0 ml-auto">
                    Edit profile
                </button>
            )
        } else {
            return (
                <button onClick={handleOnClick} className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded-full max-w-max border bg-transparent font- border-gray-700  hover:border-blue-800  items-center hover:shadow-lg font-semibold py-2 px-4 mr-0 ml-auto">
                    {x}
                </button>


            )
        }
    }

        


 


  return (
    
     
      <div className='border-b-2'>
    <div className="w-full bg-cover bg-no-repeat bg-center h-[200px] bg-slate-700"  > 
       {/* IMAGE BANNER HERE */}
    </div>
    <div className="p-4">
        <div className="relative flex w-full">
         
            <div className="flex flex-1">
                <div className='mt-[-6rem]'>
                    <div  className="md rounded-full relative avatar h-[9rem] w-[9rem]">
                        <img  className="h-[9rem] w-[9rem] md rounded-full relative border-4 border-gray-900" src={props.avatar} alt="" />
                        <div className="absolute"></div>
                    </div>
                </div>
            </div>
         
            <div className="flex flex-col text-right">
                {showEditButton()}
            </div>
        </div>

   
        <div className="space-y-1 justify-center w-full mt-3 ml-3">
  
            <div>
                <h2 className="text-xl leading-6 font-bold ">{props.name}</h2>
                <p className="text-sm leading-5 font-medium text-gray-600">@{props.username}</p>
            </div>
  
            <div className="mt-3">
                <p className=" leading-tight mb-2">{props.bio}</p>
                <div className="text-gray-600 flex">
                    <span className="flex mr-2"><svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg> <div className="cursor-pointer leading-5 ml-1 text-blue-400">{props.website}</div></span>
                    <span className="flex mr-2"><svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg> <span className="leading-5 ml-1">Joined {props.joined}</span></span>
                </div>
            </div>
            <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                <div className="text-center pr-3"><span className="font-bold ">{props.following}</span><span className="text-gray-600"> Following</span></div>
                <div className="text-center px-3"><span className="font-bold ">{props.followers} </span><span className="text-gray-600"> Followers</span></div>
            </div>
        </div>
    </div>
   
</div>
   
      
       
  )
}
