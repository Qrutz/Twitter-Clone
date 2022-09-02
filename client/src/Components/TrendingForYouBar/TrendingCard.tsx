import React from 'react'

export default function TrendingCard() {
  return (
    
    <div className='flex flex-col border-b border-slate-300 p-1 cursor-pointer'>
    <div className='flex justify-between'>
    <span className='px-5 text-xs text-gray-600'>Trending in Sweden</span>
    <span className='cursor-pointer px-5 text-xs text-gray-600'>...</span>
    </div>
    <p className='px-5 text-lg font-bold text-gray-800'>#OMEGA</p>
    <span className='px-5 text-xs text-gray-600'>1,4K Tweets</span>

    </div>
  )
}
