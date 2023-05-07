import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { isMMenu } from '../atom/booleans';

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isMMenuRow, setIsMMenuRow] = useRecoilState(isMMenu);

  const clickHamburger = () => {
    setIsMMenuRow(!isMMenuRow);
  }

  return (
    <div className='bg-white drop-shadow-sm h-[96px] box-border'>
      <div className='flex justify-between relative ml-6 mr-6
      h-full'>
        <div className='flex mt-2'>
          <Link to='/' className='w-24 cursor-pointer'>
            <img src='./Logo2.png' className='select-none'/>
          </Link>
        </div>
        <div className='hidden md:block flex-1 flex-shrink-0 ml-5 h-full'>
          <ul className='flex text-center h-full'>
            <li className='text-[#544D42] text-[1.4rem] font-subMain
              w-8/12 h-full cursor-pointer relative
              leading-[6rem] group'>
              <Link to='/info' className='block group-hover:scale-110
                transition duration-200 h-full'>Kitchen's?</Link>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-0 h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-[-100%] h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
            </li>
            <li className='text-[#544D42] text-[1.4rem] font-subMain
              w-8/12 h-full cursor-pointer relative
              leading-[6rem] group'>
              <Link to='/list' className='block group-hover:scale-110
                transition duration-200 h-full'>레시피 목록</Link>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-0 h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-[-100%] h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
            </li>
            <li className='text-[#544D42] text-[1.4rem] font-subMain
              w-8/12 h-full cursor-pointer relative
              leading-[6rem] group'>
              <Link to='/contact' className='block group-hover:scale-110
                transition duration-200 h-full'>Contact</Link>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-0 h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
              <div className='absolute left-1/2 translate-x-[-50%] 
              group-hover:w-2/5 group-hover:translate-x-[-100%] h-[3px] bottom-0
              bg-[#544D42] transition duration-500'></div>
            </li>
          </ul>
        </div>
        <div className='flex-1 flex'>
          <div className='ml-auto mr-5 my-auto relative'>
            <input type="text" className='p-1 pl-3
            border border-[#7B8F9E] outline-none rounded-sm 
            transition duration-300 ease-in-out w-48 md:w-10 focus:w-48' 
            ref={inputRef} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="w-6 h-6 text-[#544D42] absolute top-1 right-2 
              cursor-pointer hover:scale-95 transition duration-100"
              onClick={() => {
                if(inputRef.current !== null)
                  inputRef.current.value = ''
                }}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className='my-auto'>
            <Link to='/login' className='hidden md:block p-2 px-5 
            text-white bg-[#7B8F9E] rounded-lg font-bold drop-shadow-sm
            hover:scale-95 hover:bg-[#536F7D] transition duration-200'>로그인</Link>  
          </div>
          {/* 모바일 햄버거 바 */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="md:hidden w-8 h-8 text-[#7B8F9E] 
              cursor-pointer my-auto transition ease-in-out duration-500 
              hover:scale-110 hover:text-[#536F7D]"
              onClick={clickHamburger}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
