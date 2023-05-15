import React, { useEffect, useRef, useState } from 'react'
import { firestore } from '../firebase';

export default function Bookmark({idx} :{idx: number}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const userRef = useRef<any>(null);

  useEffect(() => {
    const userInfo = async () => {
      await firestore.collection('users').doc(`${window.localStorage.getItem('EMAIL')}`).get()
      .then((result) => {
        if(result.data() === undefined) return;
        
        userRef.current = result.data();
        setIsClicked(userRef.current.bookmark[idx]);
      });
    }
    userInfo();
  }, []);

  useEffect(() => {
    if(userRef.current !== null && userRef.current !== undefined)
      setIsClicked(userRef.current.bookmark[idx]);
    else
      setIsClicked(false);
  }, [idx]);
  
  const clickBookmark = async () => {
    if(userRef.current === undefined) {
      alert('로그인 후 이용이 가능합니다.');
      return;
    }

    if (userRef.current.bookmark[idx] === undefined) {
      userRef.current.bookmark[idx] = false;
    }

    userRef.current.bookmark[idx] = !userRef.current.bookmark[idx];
    setIsClicked(userRef.current.bookmark[idx]);
    await firestore.collection('users').doc(`${window.localStorage.getItem('EMAIL')}`).set(userRef.current);
  }
  
  return (
    <div onClick={clickBookmark}
      className='cursor-pointer inline-block my-auto'>
      {isClicked ? 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
        className="w-8 h-8 text-[#FFE660]">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
      </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-8 h-8 text-[#544D42]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        }
    </div>
  )
}
