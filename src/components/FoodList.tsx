import React, { useEffect } from 'react'
import FoodItem from './FoodItem'
import NotData from '../pages/NotData';
import FoodIRDNT from './FoodIRDNT';
import FoodRecipe from './FoodRecipe';
import { useRecoilValue } from 'recoil';
import { basicData, ingredientData, recipeData } from '../atom/food';
import FoodCounts from './FoodCounts';
import { useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import FoodReview from './FoodReview';

export default function FoodList() {
  const { foodId } = useParams();

  let idx: number = 1;
  if(foodId !== undefined) { 
    idx = parseInt(foodId, 10);
  }

  const basic = useRecoilValue(basicData);
  const ingredient = useRecoilValue(ingredientData);
  const recipe = useRecoilValue(recipeData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // 데이터 불러오기에 실패했을 때
  if(!basicData) return <NotData />;

  // 데이터 이상의 값
  if(idx > 85) {
    return <NotFound />;
  }

  return (
    <section className='relative overflow-hidden'>
      <h2 className='font-main text-4xl mx-auto mt-16
      w-[85vw] flex '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
          className="w-8 h-8 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
        오늘의 추천 요리
      </h2>
      {basic && <FoodItem idx={idx} />}
      <FoodCounts idx={idx} />
      {ingredient && <FoodIRDNT idx={idx} />}
      {recipe && <FoodRecipe idx={idx} />}

      <FoodReview idx={idx}/>
    </section>
  )
}
