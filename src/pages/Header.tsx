import React from 'react'

export default function Header() {
  return (
    <div className='bg-white drop-shadow-sm'>
      <div className='flex justify-between ml-6 mr-6 mt-2 pb-2'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>오늘 반찬 뭐하지?</span>
        </div>
        <div className='hidden md:block w-54'></div>
        <div className='ml-auto mr-5 my-auto '>
          <input type="text" placeholder='반찬 검색' className='p-1 pl-3 pr-3 border border-slate-400 rounded-sm' />
          <button className='p-2 px-5 ml-2 text-white bg-blue-600 rounded-lg font-bold drop-shadow-sm'>검색</button>
        </div>
        <button className='hidden md:block p-1 px-5 text-white bg-red-400 rounded-lg font-bold drop-shadow-sm'>로그인</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="md:hidden w-8 h-8 text-red-400 cursor-pointer my-auto  transition ease-in-out duration-500 hover:scale-110">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>
    </div>
  )
}
