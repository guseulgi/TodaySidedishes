import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import {  useSetRecoilState } from 'recoil';
import { isMMenu } from '../atom/booleans';

const md = 767;

export default function MMenu() {
  const setIsMMenuRow = useSetRecoilState(isMMenu);

  window.addEventListener('resize', () => {
    if(window.innerWidth >= md) {
      setIsMMenuRow(false);
    }
  })

  const closeMMenu = useCallback(() => {
    setIsMMenuRow(false);
  }, []);

    return (
      <div className='absolute z-[999] right-6 top-16 bg-[#F2EFE7] w-1/4
        before:absolute before:right-2 before:top-[-6px] before:w-4 before:h-4
        before:bg-[#F2EFE7] before:z-[-1] before:rotate-45
        transition duration-300 border border-[#e7e2d3]
        '>
        <ul className='text-center cursor-pointer select-none'>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]' onClick={closeMMenu}>
            <Link to='/login'>로그인</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]' onClick={closeMMenu}>
            <Link to='/login/signup'>회원가입</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]' onClick={closeMMenu}>
            <Link to='/info'>Kitchen's?</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]' onClick={closeMMenu}>
            <Link to='/list'>레시피 목록</Link>
          </li>
          <li className='py-4 hover:bg-[#e7e2d3] hover:underline
            hover:font-bold transition duration-100 font-subMain text-[1.2rem]
            text-[#544D42]' onClick={closeMMenu}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
}
