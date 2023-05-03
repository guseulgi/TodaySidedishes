import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [inputs, setInputs] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const mMenuRef = useRef<HTMLDivElement>(null);

  const clickHamburger = () => {
    if(mMenuRef.current === null) return;

    // if(mMenuRef.current.classList.contains('opacity-0')){
    //   mMenuRef.current.classList.remove('opacity-0');
    //   mMenuRef.current.classList.add('translate-x-0');
    // }
    // else {
    // mMenuRef.current.classList.add('opacity-0');
    // mMenuRef.current.classList.remove('translate-x-0');
    // }

    if(mMenuRef.current.classList.contains('invisible')){
      mMenuRef.current.classList.remove('invisible');
      // mMenuRef.current.classList.add('translate-x-0');
    }
    else {
    mMenuRef.current.classList.add('invisible');
    // mMenuRef.current.classList.remove('translate-x-0');
    }
  }

  return (
    <div className='bg-white drop-shadow-sm'>
      <div className='flex justify-between relative ml-6 mr-6 mt-2 pb-2'>
        <div className='flex'>
          <Link to='/' className='w-24 cursor-pointer'>
            <img src='./Logo2.png' className='select-none'/>
          </Link>
        </div>
        <div className='hidden md:block flex-1 flex-shrink-0 ml-5 my-auto'>
          <ul className='flex text-center'>
            <li className='text-[#544D42] text-2xl font-subMain
              w-8/12 h-full cursor-pointer hover:scale-110 transition
              duration-200'>
              <Link to='/info'>Kitchen's?</Link>
            </li>
            <li className='text-[#544D42] text-2xl font-subMain
              w-8/12 h-full cursor-pointer hover:scale-110 transition
              duration-200'>
              <Link to='/recomand'>오늘의 추천</Link>
            </li>
            <li className='text-[#544D42] text-2xl font-subMain
              w-8/12 h-full cursor-pointer hover:scale-110 transition
              duration-200'>
              <Link to='/contact'>Contact</Link>
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
          {/* 모바일 메뉴 */}
          <div className='invisible absolute right-0 top-16 bg-[#F2EFE7] w-1/4
            before:absolute before:right-2 before:top-[-6px] before:w-4 before:h-4
            before:bg-[#F2EFE7] before:z-[-1] before:rotate-45
            transition duration-300 border border-[#e7e2d3]'
            ref={mMenuRef}>
            <ul className='text-center cursor-pointer select-none'>
              <li className='py-4 hover:bg-[#e7e2d3] hover:underline
                hover:font-bold transition duration-100 font-subMain text-[1.2rem]
                text-[#544D42]'>
                  로그인
              </li>
              <li className='py-4 hover:bg-[#e7e2d3] hover:underline
                hover:font-bold transition duration-100 font-subMain text-[1.2rem]
                text-[#544D42]'>회원가입</li>
              <li className='py-4 hover:bg-[#e7e2d3] hover:underline
                hover:font-bold transition duration-100 font-subMain text-[1.2rem]
                text-[#544D42]'>Kitchen's?</li>
              <li className='py-4 hover:bg-[#e7e2d3] hover:underline
                hover:font-bold transition duration-100 font-subMain text-[1.2rem]
                text-[#544D42]'>오늘의 추천</li>
              <li className='py-4 hover:bg-[#e7e2d3] hover:underline
                hover:font-bold transition duration-100 font-subMain text-[1.2rem]
                text-[#544D42]'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
