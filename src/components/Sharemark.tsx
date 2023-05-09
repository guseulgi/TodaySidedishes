import React from 'react'

export default function Sharemark() {
  console.log(window.location);

  return (
    <ul className='flex justify-center my-8 md:mt-8 md:mb-0'>
      <li className='w-14 h-14 rounded-full bg-[#544D42] mr-7 text-center
        leading-9 text-black-300 text-md
        hover:scale-95 transition duration-150 hover:bg-[#3e3931]
        before:bg-[#E8B465] before:w-20 before:h-9 before:block before:absolute
        before:opacity-0 hover:before:opacity-100 before:bottom-[-2rem]
        before:left-1/2 before:translate-x-[-50%] before:rounded-md
        before:content-["URL_복사"] before:content-center
        after:bg-[#E8B465] after:w-3 after:h-3 after:block after:bottom-[-0.2rem]
        after:left-1/2 after:translate-x-[-50%] after:absolute after:opacity-0
        hover:after:opacity-100 after:rotate-45'>
        <button onClick={() => {
          navigator.clipboard.writeText(`${window.location.origin}`+`${window.location.pathname}`)
          .then(() => {
            alert('레시피 주소가 복사되었습니다.');
          })
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="w-8 h-8 m-[12px] text-[#F5EFE6]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        </button>
      </li>
      <li className='w-14 h-14 rounded-full bg-[#FFE660] mr-7
        leading-9 text-white text-md text-center
        hover:scale-95 transition duration-150 hover:bg-[#e5cf56]
        before:bg-[#544D42] before:w-28 before:h-9 before:block before:absolute
        before:opacity-0 hover:before:opacity-100 before:bottom-[-2rem]
        before:left-1/2 before:translate-x-[-50%] before:rounded-md
        before:content-["카카오톡_공유"]
        after:bg-[#544D42] after:w-3 after:h-3 after:block after:bottom-[-0.2rem]
        after:left-1/2 after:translate-x-[-50%] after:absolute after:opacity-0
        hover:after:opacity-100 after:rotate-45'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="w-8 h-8 m-[12px] text-[#544D42]">
            <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clip-rule="evenodd" />
          </svg>
        </button>
      </li>
      <li className='w-14 h-14 rounded-full bg-[#544D42] mr-7 text-center
        leading-9 text-black-300 text-md
        hover:scale-95 transition duration-150 hover:bg-[#3e3931]
        before:bg-[#E8B465] before:w-20 before:h-9 before:block before:absolute
        before:opacity-0 hover:before:opacity-100 before:bottom-[-2rem]
        before:left-1/2 before:translate-x-[-50%] before:rounded-md
        before:content-["오류_신고"] before:content-center
        after:bg-[#E8B465] after:w-3 after:h-3 after:block after:bottom-[-0.2rem]
        after:left-1/2 after:translate-x-[-50%] after:absolute after:opacity-0
        hover:after:opacity-100 after:rotate-45'>
        <button onClick={() => {
          alert('준비 중입니다.');
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="w-8 h-8 m-[12px] text-[#F5EFE6]">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
          </svg>
        </button>
      </li>
    </ul>
  )
}
