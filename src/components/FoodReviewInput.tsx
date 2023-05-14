import React, { useEffect, useRef, useState } from 'react'
import {FaStar, FaRegStar} from 'react-icons/fa';
import { firestore } from '../firebase';

export default function FoodReviewInput({idx, reviewList, setReRender} 
  :{idx:number, reviewList:any, setReRender:any}) {
  const [clickIdx, setClickIdx] = useState<number>(0);
  const [isClickedStar, setIsClickedStar] = useState<boolean[]>([
    false, false, false, false, false
  ]);
  const [idxToComent, setIdxToComent] = useState<string[]>([
    '별점을 등록해주세요!', '별로예요 😭', '그저그래요 🤨', '보통이에요 😀', '맛있어요 😋', '최고예요 😍'
  ]);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setClickIdx(0);
    if(contentRef.current !== null)
      contentRef.current.value = '';
  }, [idx]);

  useEffect(() => {
    let tmpArr = [false, false, false, false, false];
    for (let i = 1; i < clickIdx + 1; i++) {
      tmpArr[i - 1] = true;
    }
    setIsClickedStar(tmpArr);
  }, [clickIdx]);

  const clickSubmit = async () => {
    if(contentRef.current?.value === '' || contentRef.current === undefined) return;
    
    const newReview = {
      content :`${contentRef.current?.value}`,
      goodCounts : 0,
      regdate : new Date().toLocaleString(),
      reviewStars : clickIdx,
      user : {
        nickname : `${window.localStorage.getItem('USER')}`,
        email : `${window.localStorage.getItem('EMAIL')}`,
      },
    }
    
    let newList;
    if(reviewList === undefined) {
      newList = {
        'coments' : [newReview],
      };
    } else {
      newList = {
        'coments' : [...reviewList.coments, newReview],
      };
    }
    
    await firestore.collection('comment').doc(`${idx}`).set(newList, {
      merge: true,
    });

    if(contentRef.current !== null)
      contentRef.current.value = '';
    setReRender((cur :any) => !cur);
    setClickIdx(0);
  }

  return (
    <div className='pt-6 mb-16 border-t-[1px]'>
      <div className='lg:block flex w-full my-3 ml-2'>
        <h6 className='text-sm font-bold my-auto flex-1 ml-1'>
          {window.localStorage.getItem('USER')}
        </h6>
        <div className='flex lg:my-2'>
          {isClickedStar.map((el, idx) => {
            if(el === false) {
              return (
                <FaRegStar className='w-7 h-7 mx-[1px] hover:scale-125
                  transition duration-200 text-[#E8B465]' onClick={() => {
                  setClickIdx(idx + 1);
              }}/>
            )} else {
              return (
                <FaStar className='w-7 h-7 mx-[1px] hover:scale-125
                  transition duration-200 text-[#E8B465]' onClick={() => {
                    setClickIdx(idx + 1);
                }}/>
              );
            }
          })}
          <p className='my-auto ml-2 font-subMain text-lg
            lg:mr-32 mr-4'>{idxToComent[clickIdx]}</p>
        </div>
      </div>
      <ul className='w-full flex mx-auto border-[1px] my-2 rounded-md
        box-border'>
          <li className='flex-1 h-20 lg:h-28'>
            <textarea placeholder='요리는 어떠셨나요? 댓글을 남겨보세요'
              name='content' ref={contentRef}
              className='w-full h-full resize-none required
              outline-none box-border py-3 px-4 text-sm text-gray-500
              '/>
          </li>
          <li className='w-20 lg:w-36 h-20 lg:h-28 cursor-pointer
              bg-[#544D42] text-white rounded-r-md'>
            <button type='submit' className='block w-full h-full m-auto
              hover:scale-110 transition duration-200'
              onClick={clickSubmit}>등록</button>
          </li>
        </ul>
      </div>
  )
}
