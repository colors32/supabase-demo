import React from 'react'
import FeedPostForm from './FeedPostForm'
import Post from './Post'

const Feed = () => {
  return (
    <div className='bg-slate-700 grow overflow-scroll h-screen'>
      <div className='border-b-2 border-gray-400 p-3 text-white font-bold'>
        <p>Tweets</p>
      </div>
      <FeedPostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed