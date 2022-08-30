import React from 'react'

interface Data{
    icon?: any;
    title: string
}

export default function MenusTab(props:Data) {
  return (
    <div className='flex items-center h-[3rem]  hover:font-bold p-[13px]  mt-3 hover:bg-slate-200 rounded-3xl cursor-pointer font-normal  '>
        <props.icon className="text-2xl" />
        <div className='ml-2 overflow-hidden  text-2xl '>{props.title}</div>
    </div>
  )
}
 