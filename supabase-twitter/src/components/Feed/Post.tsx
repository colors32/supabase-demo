import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Post = () => {
  return (
    <div className='border-b-2 border-gray-400 text-white px-8'>
      <div className='flex pb-3 mt-6'>
        <AccountCircleIcon style={{fontSize: 40}} />
        <div className='px-4 grow'>
          <p className='w-full text-xl font-bold'>Shimeji Yaki</p>
          <p className='w-full text-lg'>Hello World!!!</p>
        </div>
      </div>
      <div className='flex mb-3'>
        <div>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default Post