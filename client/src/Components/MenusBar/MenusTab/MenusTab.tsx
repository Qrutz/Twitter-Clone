import React from 'react';
import {useParams} from "react-router-dom";

interface Data{
    icon?: any;
    title: string;

}

export default function MenusTab(props:Data) {
  


  return (
    <div className='flex items-center h-[3rem]  p-[13px]   hover:bg-slate-200 rounded-3xl cursor-pointer   '>
        <props.icon className="text-2xl" />
        <div className='ml-2 overflow-hidden  text-2xl '>{props.title}</div>
    </div>
  )
}
  