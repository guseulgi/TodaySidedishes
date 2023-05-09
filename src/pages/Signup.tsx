import React, { useEffect, useRef, useState } from 'react'
import {SiFirebase} from 'react-icons/si';
import {RiLockPasswordFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {CgUserlane} from 'react-icons/cg';


export default function Signup() {
  const [isCertify, setIsCertify] = useState<boolean>(false);
  const [isCertifyConfirm, setIsCertifyConfirm] = useState<boolean>(false);
  
  const [isPasswordCertify, setIsPasswordCertify] = useState<boolean>(false);

  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordConfirmInput, setPasswordConfirmInput] = useState<string>(' ');
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(passwordInput === passwordConfirmInput) {
      setIsPasswordCertify(true);
    } else {
      setIsPasswordCertify(false);
    }
  }, [passwordInput, passwordConfirmInput]);
  
  return (
    <form className='my-16 w-[93vw] sm:w-[75vw] lg:w-[45vw] mx-auto relative'>
      <h3 className='font-main text-4xl mb-10 flex'>
        <SiFirebase className='mr-1'/>
        Kitchen's 회원가입
      </h3>

      <img src='/images/source/cooking1.png' 
        className='absolute bottom-4
        right-5 xl:right-24 2xl:right-36
        opacity-90'/>
      <img src='/images/source/cooking2.png' 
        className='absolute top-10 left-[-280px]
        hidden lg:block opacity-80'/>
        <img src='/images/source/cooking3.png' 
        className='absolute top-[-43px] right-[-200px]
        hidden lg:block opacity-80'/>

      <ul className='ml-6'>
        <li className='flex my-auto'>
          <MdEmail className='w-6 h-6 mx-2'/>
          <span>이메일</span>
        </li>
        <li className='my-2'>
          <input type="text" name="email" required placeholder='이메일 입력'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2'/>
          <span>@</span>
          <select name="at" className='appearance-none border-[1px]
            py-1 px-3 mx-2 rounded-md'>
            <option value="naver">naver.com</option>
            <option value="gmail" >gmail.com</option>
            <option value="hanmail" >hanmail.net</option>
          </select>
          <button className='py-2 px-3 rounded-md bg-[#544D42]
            text-white text-sm hover:bg-[#716758] hover:scale-95 transition
            duration-200'
            onClick={() => {
              setIsCertify(true);
            }}>인증하기</button>
        </li>
        <>
          {isCertify ? (<li className='mb-5 mx-1'>
            {isCertifyConfirm ? <span className='text-green-600'>성공적으로 인증되었습니다.</span> 
            : <span className='text-red-600'>인증 메일이 발송되었습니다.</span>}
            <input type="text" name='emailconfirm' required placeholder='인증번호 입력' 
              className='outline-none border-[1px] rounded-md py-1 px-3
              mx-2 w-32'/>
            <button className='py-2 px-3 rounded-md bg-[#544D42]
              text-white text-sm hover:bg-[#716758] hover:scale-95 transition
              duration-200'
              onClick={() => {
                setIsCertifyConfirm(true);
              }}>확인</button>
          </li>) 
          : null}
        </>
        <li className='flex my-2'>
          <CgUserlane className='w-6 h-6 mx-2'/>
          <span>닉네임</span>
        </li>
        <li className='mb-6'>
          <input type="text" name="nickname" required placeholder='닉네임 입력'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' />
        </li>
        <li className='mb-2 flex my-auto'>
          <RiLockPasswordFill className='w-6 h-6 mx-2'/>
          <span>비밀번호</span>
        </li>
        <li className='mb-2'>
          <input type="password" name="password" ref={passwordInputRef}
            required placeholder='비밀번호 입력' autoComplete='on'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' onChange={(e) => setPasswordInput(e.target.value)}/>
        </li>
        <li className='mb-2'>
          <input type="password" name="passwordconfirm" ref={passwordConfirmInputRef}
            required placeholder='비밀번호 확인' autoComplete='on'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' onChange={(e) => setPasswordConfirmInput(e.target.value)}/>
        </li>
        { isPasswordCertify ? 
        <li className='mb-6 mx-1'>
          <span className='text-green-600'>비밀번호가 일치합니다.</span>
        </li> : 
        <li className='mb-6 mx-1'>
          <span className='text-red-600'>비밀번호가 일치하지 않습니다.</span>
        </li>}
      </ul>
      <button type='submit' className='rounded-md py-1 px-3 
        bg-[#544D42] ml-6 w-52 mr-2 text-white
        hover:bg-[#716758] hover:scale-95 transition
        duration-200'
        onClick={(e) => {
          e.preventDefault();
        }}>회원가입 하기</button>
    </form>
  )
}
