import React from 'react'

export default function Header() {
  return (
    <div className='bg-white drop-shadow-sm'>
      <div className='flex justify-between ml-6 mr-6 mt-2 pb-2'>
        <div className='flex'>
          <div className='w-24 cursor-pointer'>
            <img src='./sideLogo.png' className=''/>
          </div>
        </div>
        <div className='hidden md:block w-54'></div>
        <div className='ml-auto mr-5 my-auto relative'>
          <input type="text" placeholder='요리 뭐하지?' className='p-1 pl-3 pr-3 border border-slate-400 rounded-sm' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-6 h-6 text-[#544D42] absolute top-1 right-2 
            cursor-pointer hover:scale-95 transition duration-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        <div className='my-auto'>
          <button className='hidden md:block p-2 px-5 
          text-[#544D42] bg-[#9BE7FF] rounded-lg font-bold drop-shadow-sm
          hover:scale-95 transition duration-200'>로그인</button>  
        </div>
        {/* 모바일 햄버거 바 */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="md:hidden w-8 h-8 text-[#9BE7FF] cursor-pointer my-auto  transition ease-in-out duration-500 hover:scale-110">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  )
}
