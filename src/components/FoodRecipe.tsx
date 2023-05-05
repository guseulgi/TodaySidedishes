import React from 'react'
import { fetchBasicData, fetchRecipeData } from '../utils/types'
import { useRecoilValue } from 'recoil';
import { basicData, recipeData } from '../atom/food';

export default function FoodRecipe({idx} :{idx:number}) {
  const recipeRowData = useRecoilValue(recipeData);
  const recipe = recipeRowData.filter((el :fetchRecipeData) => el.RECIPE_ID === idx);

  const basic = useRecoilValue(basicData);
  const curData :fetchBasicData = basic[idx - 1];

  return (
    <div className='my-16'>
      <h2 className='font-subMain text-5xl text-center
        mb-10 text-[#323e44]'>
        {curData?.RECIPE_NM_KO}{', 한번 만들어볼까요?'}
      </h2>

      {recipe.map((el: fetchRecipeData) => {
        return (
          <ul className='w-5/6 lg:w-2/3 mx-auto my-6 flex'>
            <li className='text-3xl font-main text-[#323e44]
              px-6 relative'>
              <div className='bg-[#7B8F9E] rounded-full
                w-8 h-8 absolute left-2 top-3 z-[-1]'></div>  
              {el.COOKING_NO}</li>
            <li className='mt-2 leading-10 text-xl'>{el.COOKING_DC}</li>
          </ul>

        );
      })}
    </div>
  )
}
