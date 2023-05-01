import React from 'react'
import { fetchData } from '../utils/types'

export default function FoodItem({data}:{data:fetchData}) {

  return (
    <article>
    <h2>{data?.RECIPE_NM_KO}</h2>
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
