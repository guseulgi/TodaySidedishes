import React, { useEffect, useRef } from 'react'
import { firestore } from '../firebase';
import { useRecoilState } from 'recoil';
import { allUsers } from '../atom/user';
import { User } from '../utils/types';

export default function MyPage() {

  const iconStyle = 'identicon';
  const iconSource = `https://api.dicebear.com/6.x/${iconStyle}/svg?seed=${window.localStorage.getItem("USER")}`;

  const [users, setUsers] = useRecoilState(allUsers);

  const getUserInfo = () => {
    let user :any;
    user = users.find((el :User) => {
      const email = window.localStorage.getItem('EMAIL');
      if(el.email === email) {
        return el;
      }
    });

    if(user !== undefined)
      return user;
  }

  useEffect(() => {

  }, []);

  const nicknameChange = () => {
    // 파이어스토어에 닉네임 바로 변경
  }

  return (
    <div className='w-2/3 md:w-5/6 lg:w-2/3 mx-auto mb-16'>
      <h2 className='font-main text-5xl mt-16 w-full'>마이페이지</h2>
      <hr className='w-full my-2' />
      <div className='mt-12 md:mt-6 md:flex'>
        <div className='mb-7  md:ml-8 lg:ml-1'>
          <div className='w-72 h-72 md:w-48 md:h-48 lg:w-72 lg:h-72
            mx-auto
            rounded-sm drop-shadow-sm bg-white block
            border-[1px] border-gray-200  mb-2'>
            <img src={iconSource} alt="프로필" 
              className='block w-60 h-60 md:w-36 md:h-36 lg:w-60 lg:h-60
              mx-auto my-6
              hover:scale-105 transition duration-200'/>
          </div>
          <button className='p-2 w-72 md:w-48 lg:w-72
            block mx-auto mb-4
            text-white bg-[#7B8F9E] rounded-lg font-bold drop-shadow-sm
            hover:scale-95 hover:bg-[#536F7D] transition duration-200'
            disabled >프로필 변경 🚫</button>
        </div>
        <div className='w-[370px] mx-auto md:my-4 lg:my-10'>
          <ul className=''>
            <li className='mb-4 w-80 flex justify-between align-middle'>
              <p className='w-24 leading-10'>이메일</p>
              <input type="text" disabled value={`${window.localStorage.getItem('EMAIL')}`} 
                className='py-2 px-3 border-[1px] flex-1'/>
            </li>
            <li className='mb-2 text-green-700'>
              <p>현재 닉네임은 {window.localStorage.getItem('USER')} 입니다.</p>
            </li>
            <li className='mb-4 flex justify-between align-middle'>
              <p className='w-24 leading-10 '>닉네임</p>
              <input type="text" placeholder='닉네임 변경'
                className='py-2 px-3 border-[1px] flex-1'/>
              <button className='py-2 px-4 rounded-lg bg-[#7B8F9E]
                ml-2 text-white hover:scale-95 hover:bg-[#536F7D] 
                transition duration-200'>변경</button>
            </li>
            <li className='mb-2 flex justify-between align-middle'>
              <p className='w-24 leading-10'>비밀번호</p>
              <input type="text" placeholder='비밀번호 변경'
                className='py-2 px-3 border-[1px] flex-1'/>
              <p className='opacity-0 py-2 px-4 rounded-lg bg-[#536F7D]
                ml-2'>확인</p>
            </li>
            <li className='mb-4 flex justify-between align-middle'>
              <p className='w-24 leading-10'>비밀번호 확인</p>
              <input type="text" placeholder='비밀번호 확인'
                className='py-2 px-3 border-[1px] flex-1'/>
              <button className='py-2 px-4 rounded-lg bg-[#7B8F9E]
                ml-2 text-white hover:scale-95 hover:bg-[#536F7D] 
                transition duration-200'>변경</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
