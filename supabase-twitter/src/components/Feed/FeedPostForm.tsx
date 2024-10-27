"use client"

import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const contentLimit = 40;
const tweetPlaceHolder = 'I feel like...'

const FeedPostForm = () => {
  const [input, setInput] = useState<string>("");
  const [contentHeight, setContentHeight] = useState<number>(1);
  const [numberOfChar, setNumberOfChar] = useState<number>(0);

  const checkRowsOfText = (text: string) => {
    let i = 0;
    let lines = 1;
    while ((i = text.indexOf("\n", i + 1)) >= 0) {
      lines++;
    }
    return lines;
  }

  const textareaOnChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= contentLimit) {
      setInput(e.target.value);
      setNumberOfChar(e.target.value.length);
    }
    setContentHeight(checkRowsOfText(e.target.value));
  }

  const doPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={doPost} className='border-b-2 border-gray-400 text-white px-8'>
      <div className='border-b-2 border-gray-400 flex items-start pb-3 mt-6 mb-3'>
        <AccountCircleIcon style={{ fontSize: 40 }} />
        <div className='px-4 grow'>
          <textarea onChange={textareaOnChange} value={input} name="content" rows={contentHeight} placeholder={tweetPlaceHolder} className='w-full bg-slate-700 outline-none text-2xl resize-none'></textarea>
        </div>
      </div>
      <div className='flex justify-between items-center mb-3'> {/* 中の項目が増えたらrow-reverseからspace-betweenの並べ方に変える */}
        <span className=''>{contentLimit - numberOfChar}</span>
        <button className='bg-sky-500 font-bold text-md rounded-lg px-3 py-1 outline-none'>Post</button>
      </div>
    </form>
  )
}

export default FeedPostForm