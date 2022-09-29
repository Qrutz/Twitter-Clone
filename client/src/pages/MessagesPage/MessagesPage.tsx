import React, { useEffect, useRef } from 'react'
import MenusBar from '../../Components/MenusBar/MenusBar'
import TrendingForYouBar from '../../Components/TrendingForYouBar/TrendingForYouBar';
import {io} from 'socket.io-client';
import {GiOldMicrophone} from 'react-icons/gi';
import {AiOutlineSend} from 'react-icons/ai';
import {useMyData} from "../../requests";



export default function MessagesPage() {
   const socket = useRef(io("http://localhost:5000/messages"));
    const [value, setValue] = React.useState("");
    const [isConnected, setIsConnected] = React.useState("");
   

    const {data, isLoading } = useMyData();



    
      
  

    


    

    const handleSubmit = (e: any) => { 
        console.log(value);
        e.preventDefault();
        socket.current.emit('chat message', value);
        setValue("");
    }





  return (
    <div className='container mx-auto flex bg-white'>
        <MenusBar />
        <form onSubmit={handleSubmit} className="p:2 p-6 justify-between flex flex-col h-screen w-full border-x-2">
   <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div className="relative flex items-center space-x-4 ml-2 md:ml-0">
         <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              
            </span>
         <div   className="w-10 bg-gray-500 sm:w-16 h-10 sm:h-16 rounded-full"/>
         </div>
         <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
               <span className="text-gray-700 mr-3">name</span>
            </div>
            <span className="text-lg text-gray-600">@uname</span>
         </div>
      </div>
   </div>
   
    
      
   
    
   <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex">
         <span className="absolute inset-y-0 flex items-center">
                <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                <GiOldMicrophone className='text-2xl' />
                </button>
         </span>
         <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
         <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            
            <button type="submit" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
               <span className="font-bold">Send</span>
               
               <AiOutlineSend className='h-6 w-6 ml-2 transform ' />
            </button>
         </div>
      </div>
   </div>
</form>
        <TrendingForYouBar />
    </div>
  )
}
