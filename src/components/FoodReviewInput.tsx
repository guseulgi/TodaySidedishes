import React, { useEffect, useState } from 'react'
import {FaStar, FaRegStar} from 'react-icons/fa';

export default function FoodReviewInput() {
  const [clickIdx, setClickIdx] = useState<number>(0);
  const [isClickedStar, setIsClickedStar] = useState<boolean[]>([
    false, false, false, false, false
  ]);
  const [idxToComent, setIdxToComent] = useState<string[]>([
    '별점을 등록해주세요!', '별로예요 😭', '그저그래요 🤨', '보통이에요 😀', '맛있어요 😋', '최고예요 😍'
  ]);

  useEffect(() => {
    let tmpArr = [false, false, false, false, false];
    for (let i = 1; i < clickIdx + 1; i++) {
      tmpArr[i - 1] = true;
    }
    setIsClickedStar(tmpArr);
  }, [clickIdx]);

  return (
    <div className='pt-6 mb-16 border-t-[1px]'>
      <div className='lg:block flex w-full my-3 ml-2'>
        <h6 className='text-sm font-bold my-auto flex-1 ml-1'>닉네임</h6>
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
              className='w-full h-full resize-none required
              outline-none box-border py-3 px-4 text-sm text-gray-500
              '/>
          </li>
          <li className='w-20 lg:w-36 h-20 lg:h-28 cursor-pointer
              bg-[#544D42] text-white rounded-r-md'>
            <button className='block w-full h-full m-auto
              hover:scale-110 transition duration-200'>등록</button>
          </li>
        </ul>
      </div>
  )
}
