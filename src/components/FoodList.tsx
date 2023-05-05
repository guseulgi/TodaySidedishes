import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import axios from 'axios';
import Loading from '../pages/Loading';
import Sharemark from './Sharemark';
import NotData from '../pages/NotData';
import FoodIRDNT from './FoodIRDNT';
import FoodRecipe from './FoodRecipe';
import { useRecoilState, useRecoilValue } from 'recoil';
import { basicData, curIndex, ingredientData, recipeData } from '../atom/food';
import FoodCounts from './FoodCounts';

export default function FoodList() {
  const [loading, setLoading] = useState<boolean>(false);

  const [basic, setBasic] = useRecoilState(basicData);
  const [ingredient, setIngredient] = useRecoilState(ingredientData);
  const [recipe, setRecipe] = useRecoilState(recipeData);

  const index = useRecoilValue(curIndex);

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

  return (
    <section className='relative overflow-hidden'>
      {basic && <FoodItem idx={index} />}
      <FoodCounts idx={index} />
      {ingredient && <FoodIRDNT idx={index} />}
      {recipe && <FoodRecipe idx={index} />}
    </section>
  )
}
