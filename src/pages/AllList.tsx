import React from 'react'
import { useRecoilValue } from 'recoil'
import { basicData } from '../atom/food';
import {fetchBasicData} from '../utils/types';

export default function AllList() {
  const basicDataRow = useRecoilValue(basicData);

  return (
    <div>
      <h2 className='font-main text-5xl w-11/12 md:w-5/6 mx-auto
        mt-16'>무슨 요리를 해볼까요?</h2>
      <ul className='my-12 mx-auto w-11/12 md:w-5/6'>
        {basicDataRow.map((el :fetchBasicData, idx) => {
          let tmpLV = '';
          let colorLV = '';
          switch(el.LEVEL_NM) {
            case '초보환영' :
              tmpLV = '초보';
              colorLV ='#cd931e'
              break;
            case '보통' :
              tmpLV = '보통';
              colorLV ='#8E6412'
              break;
            case '어려움' :
              tmpLV = '어려움';
              colorLV ='#544D42'
              break;
          }

          return (
            <li className='flex my-8 hover:scale-105
              transition duration-200'>
              <p className='bg-[#F5EFE6] rounded-full w-7 h-7
                text-[#544D42] font-bold font-subMainSec text-xl
                my-auto text-center pb-2 drop-shadow-sm'>{idx + 1} </p>
              <p className='pl-3 font-subMain w-1/5 lg:w-1/4
                text-2xl text-[#544D42] my-auto'>{el.RECIPE_NM_KO}</p>
              <p className='h-full my-auto flex-1'>{el.SUMRY}</p>
              <p className='text-sm flex my-auto text-white font-bold
                py-1 px-2 ml-2 rounded-lg' style={{
                  backgroundColor : colorLV,
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                  className="w-3 h-3 my-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>
                {tmpLV}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
