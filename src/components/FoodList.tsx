import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import axios from 'axios';
import Loading from '../pages/Loading';
import NotData from '../pages/NotData';
import FoodIRDNT from './FoodIRDNT';
import FoodRecipe from './FoodRecipe';
import { useRecoilState } from 'recoil';
import { basicData, ingredientData, recipeData } from '../atom/food';
import FoodCounts from './FoodCounts';
import { useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';

export default function FoodList() {
  const { foodId } = useParams();

  let idx: number = 1;
  if(foodId !== undefined)
    idx = parseInt(foodId, 10);

  const [loading, setLoading] = useState<boolean>(false);

  const [basic, setBasic] = useRecoilState(basicData);
  const [ingredient, setIngredient] = useRecoilState(ingredientData);
  const [recipe, setRecipe] = useRecoilState(recipeData);

  useEffect(() => {
    setLoading(true);
    const fetchData = async() => {
      const basicGrid = process.env.REACT_APP_BASIC_GRID_NUM;
      const ingredientGrid = process.env.REACT_APP_INGREDIENT_GRID_NUM;
      const recipeGrid = process.env.REACT_APP_RECEIPE_GRID_NUM;

      const basicUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${basicGrid}/1/85`;
      const ingredientUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${ingredientGrid}/1/999`;
      const recipeUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${recipeGrid}/1/470`;
      try {
// 기본 정보 불러오기
        const result = await axios.get(basicUrl,{
          withCredentials : true,
        });
        if(basicGrid !== undefined){
          setBasic(result.data[basicGrid].row);
        }
// 재료 정보 불러오기
        const resultSec = await axios.get(ingredientUrl, {
          withCredentials: true,
        });
        if(ingredientGrid !== undefined){
          setIngredient(resultSec.data[ingredientGrid].row);
        }
// 과정 정보 불러오기
        const resultThir = await axios.get(recipeUrl, {
          withCredentials: true,
        });
        if(recipeGrid !== undefined) {
          setRecipe(resultThir.data[recipeGrid].row);
        }
      } catch(err) {
        console.log(err);
        throw err;
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if(loading) return <Loading />;
  
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
    </section>
  )
}
