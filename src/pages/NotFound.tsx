import React from 'react'
import { Link } from 'react-router-dom'
import {SiDevrant} from 'react-icons/si';

export default function NotFound() {
  return (
    <div className='relative'>
      <h3 className='font-main text-4xl absolute
        left-1/2 translate-x-[-50%] top-14'>
        <SiDevrant className='w-9 h-9' /> 페이지를 찾을 수 없습니다.
      </h3>
      <img src="/images/source/notfound.jpg" alt="" 
        className='w-full'/>
      <Link to='/' className='inline-block py-3 px-7
        absolute bottom-[18%] left-1/2 translate-x-[-50%] text-[#1c2429] 
        bg-[#E8B465] rounded-lg font-bold drop-shadow-sm
        hover:scale-95 hover:bg-[#ffc979] transition duration-200'>홈으로</Link>
    </div>
  )
}
