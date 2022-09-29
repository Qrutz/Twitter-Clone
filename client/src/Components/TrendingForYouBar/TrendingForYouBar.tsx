import React from 'react';
import { trendingHashtags } from './examplehashs';
import SearchUsersComponent from './SearchUsersComponent';
import TrendingCard from './TrendingCard';

export default function TrendingForYouBar() {
    const [useHashtags, setUseHashtags] = React.useState(trendingHashtags);


    

  return (
    <div className='pt-2 gap-4 flex-col pl-6 w-[30%] hidden md:flex '>
        
        <form className="flex items-center">   
    <label  className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <SearchUsersComponent />
    </div>
    
</form>

        <div className='flex flex-col bg-slate-100 rounded-2xl border-2   gap-2 p-l-2'>
            <h1 className='mb-3 flex px-5 py-3 text-2xl font-bold text-gray-900'>Trends for you</h1>
            {  useHashtags.map((hashtag) => (
                <TrendingCard hashtag={hashtag.hashtag} tweets={hashtag.tweets} />
            ))}
          
            

        </div>

    </div>
  )
}
