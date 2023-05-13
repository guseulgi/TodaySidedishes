import React from 'react'
import FoodReviewInput from './FoodReviewInput'
import {FaRegThumbsUp, FaThumbsUp} from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { reviewData } from '../atom/food'
import { Comment } from '../utils/types'

export default function FoodReview(idx : {idx:number}) {
  const reviewDataRow = useRecoilValue(reviewData);
  console.log(reviewDataRow);

  return (
    <div className='w-[85vw] mx-auto mt-16'>
      <div className='flex'>
        <h2 className='font-main text-4xl 
        flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-8 h-8 my-auto mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>  
          한마디 
        </h2>
        <span className='text-xl italic my-auto ml-2 mt-3
          text-amber-800'>{reviewDataRow.length}</span>
      </div>
      <ul className='w-full my-2 '>
        {/* 댓글 목록 */}
        {reviewDataRow.map((el : Comment, index : any) => {
          // 주어진 인덱스와 리뷰 인덱스가 같은 리뷰만 보이게 되어야 한다.

          if(index === idx) {
            let stars = '';
            for(let i = 0; i < el.reviewStars; i++) {
              stars += '⭐️';
            };

            return (
              <li className='border-t-[1px] w-full flex my-3'>
                <div className='w-14 h-14 bg-slate-400 mx-2 my-6
                  rounded-full'></div>
                <div className='flex-1 my-5'>
                  <ul className='flex mb-1 justify-between'>
                    <li className='flex'>
                      <p className='text-[#544D42] font-bold text-lg
                        ml-2 mr-3'>{el.user.nickname}</p>
                      <p className='text-gray-400 text-sm my-auto'>{el.regdate}</p>
                      <p className='my-auto text-sm mx-3'>{stars}</p>
                    </li>
                    <li className='flex mr-7 text-gray-400 my-auto
                      text-sm'>
                      <button >
                        {true ? <FaRegThumbsUp className='hover:text-gray-500' /> 
                        : <FaThumbsUp className='hover:text-blue-500' />}
                      </button> 
                      <span className='mx-2' >{el.goodCounts}</span>
                      <p className='mx-2 text-xs text-gray-200 my-auto'> | </p>
                      <button className='hover:text-gray-500'>신고</button>
                    </li>
                  </ul>
                  <p className='w-5/6 mx-2
                    '>{el.content}</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
      <FoodReviewInput />
    </div>
  )
}
