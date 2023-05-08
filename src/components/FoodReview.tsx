import React from 'react'
import FoodReviewInput from './FoodReviewInput'

export default function FoodReview() {
  return (
    <div className='w-[85vw] mx-auto mt-16'>
      <div className='flex'>
        <h2 className='font-main text-4xl 
        flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-8 h-8 my-auto mr-2 my-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>  
          한마디 
        </h2>
        <span className='text-md my-auto ml-2'>(총개수)</span>
      </div>


      <ul className='w-full my-2 '>
        {/* 댓글 목록 */}
        <li className='border-t-[1px] w-full flex my-3'>
          <div className='w-14 h-14 bg-slate-400 mx-2 my-6
            rounded-full'></div>
          <div className='flex-1 my-5'>
            <ul className='flex mb-1 justify-between'>
              <li className='flex'>
                <p className='text-[#544D42] font-bold text-lg
                  ml-2 mr-3'>닉네임</p>
                <p className='text-gray-400 text-sm my-auto'>2023/05/08 14:00:11</p>
                <p className='my-auto text-sm mx-3'>별 개수 표시</p>
              </li>
              <li className='flex mr-7 text-gray-400 my-auto
                text-sm'>
                <button>답글</button> 
                <p className='mx-2 text-xs text-gray-200 my-auto'> | </p>
                <button>신고</button>
              </li>
            </ul>
            <p className='w-5/6 mx-2
              '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, aspernatur aperiam aut quos consequatur laborum odit, hic tempora dolores provident omnis voluptatum adipisci commodi accusamus blanditiis magni placeat. Fugiat, odio.</p>
          </div>
        </li>

        <li className='border-t-[1px] w-full flex my-3'>
          <div className='w-14 h-14 bg-slate-400 mx-2 my-6
            rounded-full'></div>
          <div className='flex-1 my-5'>
            <ul className='flex mb-1 justify-between'>
              <li className='flex'>
                <p className='text-[#544D42] font-bold text-lg
                  ml-2 mr-3'>닉네임</p>
                <p className='text-gray-400 text-sm my-auto'>2023/05/08 14:00:11</p>
                <p className='my-auto text-sm mx-3'>별 개수 표시</p>
              </li>
              <li className='flex mr-7 text-gray-400 my-auto
                text-sm'>
                <button>답글</button> 
                <p className='mx-2 text-xs text-gray-200 my-auto'> | </p>
                <button>신고</button>
              </li>
            </ul>
            <p className='w-5/6 mx-2
              '>댓글 내용</p>
          </div>
        </li>

      </ul>
      <FoodReviewInput />
    </div>
  )
}
