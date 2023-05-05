import React from 'react'
import { Link } from 'react-router-dom'

export default function MMenu() {

    return (
      <div className='absolute z-[999] right-6 top-16 bg-[#F2EFE7] w-1/4
        before:absolute before:right-2 before:top-[-6px] before:w-4 before:h-4
        before:bg-[#F2EFE7] before:z-[-1] before:rotate-45
        transition duration-300 border border-[#e7e2d3]
        '>
        <ul className='text-center cursor-pointer select-none'>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]'>
            <Link to='/login'>로그인</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]'>
            <Link to='/login/signup'>회원가입</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]'>
            <Link to='/info'>Kitchen's?</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]'>
            <Link to='/recomand'>오늘의 추천</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
}
