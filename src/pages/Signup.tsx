import React, { useCallback, useEffect, useRef, useState } from 'react'
import {SiFirebase} from 'react-icons/si';
import {RiLockPasswordFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {CgUserlane} from 'react-icons/cg';
import { firestore } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigator = useNavigate();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const emailAtInputRef = useRef<HTMLSelectElement>(null);

  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [isCertify, setIsCertify] = useState<boolean>(false);
  
  const [isNicknameCertify, setIsNicknameCertify] = useState<boolean>(false);
  const nicknameRef = useRef<HTMLInputElement>(null);

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

  const isEmailCheck = useCallback(() => {
    if(emailInputRef.current?.value === '') return;

    const tmpEmail = emailInputRef.current?.value+'@'+emailAtInputRef.current?.value;

    firestore.collection('users').get()
      .then((result) => result.forEach((doc) => {
        if(doc.data().email === tmpEmail) {
          // 이메일이 존재하면 -> 동일한 이메일이 존재한다고 안내메세지
          setIsCertify(false);
          setIsDuplicate(true);
          return;
        }
      }));

      setIsCertify(true);
      setIsDuplicate(false);
  }, []);

  const nicknameCheck = useCallback((e :React.ChangeEvent<HTMLInputElement>) => {
    setIsNicknameCertify(false);

    if(e.target.value.length < 2 || e.target.value.length > 8) return;

    if( e.target.value !== '' )
      setIsNicknameCertify(true);
  }, []);

  const passwordCheck = useCallback((e :React.ChangeEvent<HTMLInputElement>) => { 
    if(e.target.value.length < 4 || e.target.value.length > 12) return;

    setPasswordInput(e.target.value);
  }, []);

  const passwordConfirmCheck = useCallback((e :React.ChangeEvent<HTMLInputElement>) => { 
    if(e.target.value.length < 4 || e.target.value.length > 12) return;

    setPasswordConfirmInput(e.target.value);
  }, []);

  const registerUser = useCallback((e :React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let tmpArr :Array<boolean> = [];
    for(let i = 0; i < 87; i++) {
      tmpArr[i] = false;
    }

    // 회원 가입 처리
    if (isCertify && isNicknameCertify && isPasswordCertify) {
      const newUser = {
        email : emailInputRef.current?.value+'@'+emailAtInputRef.current?.value,
        nickname : nicknameRef.current?.value,
        password : passwordInputRef.current?.value,
        bookmark : tmpArr,
      }

      firestore.collection("users")
        .doc(`${emailInputRef.current?.value+'@'+emailAtInputRef.current?.value}`)
        .set(newUser);
    } else {
      alert('정상적으로 회원가입이 되지 않았습니다. 🚫 입력 형식이 올바르지 않습니다.');
      return;
    }

    navigator('/login');
  }, [isCertify, isNicknameCertify, isPasswordCertify]);
  
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
          <input type="text" name="email" required ref={emailInputRef}
            placeholder='이메일 입력'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2'/>
          <span>@</span>
          <select name="at" ref={emailAtInputRef}
            className='border-[1px]
            py-1 px-3 mx-2 rounded-md'>
            <option value="naver.com" >naver.com</option>
            <option value="gmail.com" >gmail.com</option>
            <option value="hanmail.net" >hanmail.net</option>
          </select>
          <button className='py-2 px-3 rounded-md bg-[#544D42]
            text-white text-sm hover:bg-[#716758] hover:scale-95 transition
            duration-200'
            onClick={isEmailCheck}>중복확인</button>
        </li>
        <>
          { isDuplicate ? <li className='mb-5 mx-1'>
            <span className='text-red-600'>동일한 이메일이 존재합니다.</span>
          </li>
          : <>
            {isCertify ? (<li className='mb-5 mx-1'>
              <span className='text-green-600'>사용가능한 이메일입니다.</span> 
            </li>) 
              : null}
            </>}
        </>

        <li className='flex my-2'>
          <CgUserlane className='w-6 h-6 mx-2'/>
          <span>닉네임</span>
        </li>
        <li className='mb-2'>
          <input type="text" name="nickname" required placeholder='닉네임 입력'
            onChange={nicknameCheck} ref={nicknameRef}
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' />
        </li>
        <>
          {isNicknameCertify ? <li className='mb-6 mx-1'>
            <span className='text-green-600'>사용가능한 닉네임입니다.</span>
          </li> : <li className='mb-6 mx-1'>
            <span className='text-red-600'>2글자에서 8글자 이내로 입력해주세요.</span>
          </li>}
        </>

        <li className='mb-2 flex my-auto'>
          <RiLockPasswordFill className='w-6 h-6 mx-2'/>
          <span>비밀번호</span>
        </li>
        <li className='mb-2'>
          <input type="password" name="password" ref={passwordInputRef}
            required placeholder='비밀번호는 4자에서 12자 이내' autoComplete='on'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' onChange={passwordCheck}/>
        </li>
        <li className='mb-2'>
          <input type="password" name="passwordconfirm" ref={passwordConfirmInputRef}
            required placeholder='비밀번호 확인' autoComplete='on'
            className='outline-none border-[1px] rounded-md py-1 px-3
            w-52 mr-2' onChange={passwordConfirmCheck}/>
        </li>
        { isPasswordCertify ? 
          <li className='mb-6 mx-1'>
            <span className='text-green-600'>비밀번호가 일치합니다.</span>
          </li> : 
          <li className='mb-6 mx-1'>
            <span className='text-red-600'>비밀번호가 일치하지 않습니다.</span>
          </li> }
      </ul>
      <button className='rounded-md py-1 px-3 
        bg-[#544D42] ml-6 w-52 mr-2 text-white
        hover:bg-[#716758] hover:scale-95 transition
        duration-200'
        onClick={registerUser}>회원가입 하기</button>
    </form>
  )
}
