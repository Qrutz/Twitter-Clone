import React from 'react'
import { fetchUsers, useUsers } from '../../requests';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function SearchUsersComponent() {
  const queryClient = useQueryClient();

  const [toggle, setToggle] = React.useState(false);
  const [search, setSearch] = React.useState<any>('');

  const { status, data } = useUsers();
 

  if(status === 'loading') {
    return <div>Loading...</div>
  }


  function DropDown() {
    return (
      <div className="absolute bg-white  w-full border text-center   ">
       
      

        {data.map((user: any) => {
          return (
            <div key={user._uid} className='border-b hover:bg-gray-200 cursor-pointer p-2'>
            <Link to={`/${user.username}`} >
        
            <div className="flex mx-2   ">
              <img
                className="w-12 h-12 rounded-full"
                src={user.avatar}
                alt="avatar"
              />
              <div className="flex flex-col ">
                <p className="text-sm font-bold ml-2">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
                <p className='text-xs text-gray-700'>{user.bio}</p>
              </div>
             
            </div>
            </Link>
            </div>
          );
        })}
      </div>
    );
        
  }
  
  



  return (
    <> 
    <input onBeforeInput={() => setToggle(!toggle)}  type="text" id="simple-search" className="bg-slate-200 border focus-within:bg-slate-100 border-gray-300 text-gray-900 text-sm rounded-3xl  block w-full pl-10 p-2.5 " placeholder="Search Twitter" required />
    {toggle ? <DropDown /> : null}
    </>
  );
  

}
