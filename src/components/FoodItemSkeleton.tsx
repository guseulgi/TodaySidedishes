import React from 'react'
import Bookmark from './Bookmark'

export default function FoodItemSkeleton() {
  return (
    <article className='h-full md:flex justify-between w-[85vw] mx-auto
      border-b-2 mb-7 z-[2]'>
      <div className='select-none mt-12 md:flex-1 md:mr-5'>
        <div className='flex ml-4'>
          {/* <Bookmark idx={null} /> */}
          <h2 className='text-[3.2rem] font-bold font-main text-[#323e44]
            ml-3 w-5/6
            bg-slate-300 h-14'>
              <span className='text-[2rem] italic
                font-main mb-3 ml-1 mr-5 
                '></span>
          </h2>
        </div>
        <p className='ml-12 my-4 text-lg w-5/6 md:w-4/6 
          bg-slate-200 h-8'></p>
        {/* <Sharemark idx={idx} data={curData}/> */}
      </div>

      <ul className='md:w-2/6 w-full md:my-12 my-4 flex justify-between md:block'>
        <li className='md:my-2 my-auto flex'>
          {/* <Typemark type={curData?.NATION_NM} /> */}
          <span className='hidden md:block  my-auto text-sm mr-1'></span>
        </li>
        <li className='my-2 flex leading-10 text-[#536F7D]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-10 h-10 mr-1 sm:mr-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          {/* <p className='text-xl leading-10 font-subMain'>{curData?.CALORIE}</p> */}
        </li>
        <li className='my-2 flex leading-10 text-[#536F7D]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-10 h-10 mr-1 sm:mr-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* <p className='text-xl leading-10 font-subMain'>{curData?.COOKING_TIME}</p> */}
        </li>
        <li className='my-2 flex leading-10 text-[#536F7D]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-10 h-10 mr-1 sm:mr-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {/* <p className='text-xl leading-10 font-subMain'>{curData?.LEVEL_NM}</p> */}
        </li>
        <li className='my-2 flex text-[#536F7D]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
          className="w-10 h-10 mr-1 sm:mr-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          {/* <p className='text-xl leading-10 font-subMain'>{curData?.QNT}</p> */}
        </li>
      </ul>
      
    </article>
  )
}
