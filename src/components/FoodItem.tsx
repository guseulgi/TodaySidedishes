import React, { useState } from 'react'
import { fetchData } from '../utils/types'
import Bookmark from './Bookmark';

export default function FoodItem({data}:{data:fetchData}) {

  return (
    <article className='w-screen h-full'>
      <div className='select-none ml-16 flex mt-12'>
        <Bookmark />
        <h2 className='text-[3.2rem] font-bold text-[#323e44]
          ml-3'>{data?.RECIPE_NM_KO}</h2>
      </div>

      <ul>
        <li>{data?.CALORIE}</li>
        <li>{data?.COOKING_TIME}</li>
        <li>{data?.LEVEL_NM}</li>
        <li>{data?.NATION_NM}</li>
        <li>{data?.QNT}</li>
      </ul>
      <h5>{data?.SUMRY}</h5>
  </article>
  )
}
