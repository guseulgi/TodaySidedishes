import React from 'react'
import { useSetRecoilState } from 'recoil';
import { curIndex } from '../atom/food';
import { useNavigate } from 'react-router-dom';

export default function FoodCounts({idx} :{idx: number}) {
  const maxIndex = 85;
  const minIndex = 1;
  const navigate = useNavigate();

  return (
    <div className='w-full absolute top-60'>
      <ul className='flex justify-between'>
        <li>
          <button onClick={
            () => {
              if(idx > 1) {
                idx = idx - 1;
              } else {
                idx = maxIndex;
              }
              navigate(`/${idx}`);
            }
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="w-10 h-10 text-[#536F7D] hover:scale-125 transition duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </li>
        <li>
          <button onClick={
            () => {
              if(idx < 85) {
                idx = idx + 1;
              } else {
                idx = minIndex;
              }
              navigate(`/${idx}`);
            }
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="w-10 h-10 text-[#536F7D] hover:scale-125 transition duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}
