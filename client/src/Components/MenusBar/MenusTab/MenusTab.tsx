import React from 'react';


interface Data{
    icon?: any;
    title: string;

}

export default function MenusTab(props:Data) {
  


  return (
    <div className=' flex items-center h-[3rem] justify-center md:justify-start      hover:bg-slate-200 rounded-3xl cursor-pointer   '>
        <props.icon className="text-2xl" />
        <div className='ml-2 overflow-hidden hidden md:block    text-2xl '>{props.title}</div>
    </div>
  )
}
  