import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FeedPostForm = () => {
  return (
    <div className='border-b-2 border-gray-400 text-white px-8'>
      <div className='border-b-2 border-gray-400 flex pb-3 mt-6 mb-3'>
        <AccountCircleIcon style={{fontSize: 40}} />
        <div className='px-4 grow'>
          <textarea rows={1} placeholder='type tweet here' className='w-full bg-slate-700 outline-none text-2xl resize-none'></textarea>
        </div>
      </div>
      <div className='flex flex-row-reverse mb-3'> {/* 中の項目が増えたらrow-reverseからspace-betweenの並べ方に変える */}
        <button className='bg-sky-500 font-bold text-md rounded-lg px-3 py-1 outline-none'>Post</button>
      </div>
    </div>
  )
}

export default FeedPostForm