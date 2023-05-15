import React, { useEffect, useState } from 'react'
import FoodList from '../components/FoodList';
import {  useRecoilState, useSetRecoilState } from 'recoil';
import { basicData, ingredientData, recipeData, reviewData } from '../atom/food';
import axios from 'axios';
import Loading from './Loading';
import { useNavigate, useParams } from 'react-router-dom';

export default function Main() {
  const { foodId } = useParams();
  const navigation = useNavigate();
  const [reviewDataRow ,setReviewDataRow] = useRecoilState(reviewData);
  let tmpArr :any[] = [...reviewDataRow];
  for(let i = 0; i < 87; i++) {
    tmpArr.push(
      {
        content : '',
        goodCounts : 0,
        regdate : '',
        reviewStars : 5,
        user : {
          nickname : 'undefined',
          email : 'undefined',
        },
      }
    );
  }

  let idx: number = Math.floor(Math.random() * 85);
  if(foodId === undefined) { 
    navigation(`/${idx}`);
  }
  const [loading, setLoading] = useState<boolean>(false);

  const [basic, setBasic] = useRecoilState(basicData);
  const [ingredient, setIngredient] = useRecoilState(ingredientData);
  const [recipe, setRecipe] = useRecoilState(recipeData);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const basicGrid = process.env.REACT_APP_BASIC_GRID_NUM;
      const ingredientGrid = process.env.REACT_APP_INGREDIENT_GRID_NUM;
      const recipeGrid = process.env.REACT_APP_RECEIPE_GRID_NUM;

      const basicUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${basicGrid}/1/85`;
      const ingredientUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${ingredientGrid}/1/999`;
      const recipeUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${recipeGrid}/1/470`;
      
      const basicTmpUrl = `http://211.237.50.150:7080/openapi/${process.env.REACT_APP_API_KEY}/json/${basicGrid}/1/85`;
      try {
// 기본 정보 불러오기
        const result = await axios.get(basicUrl, {
          withCredentials : true,
        });
        if(basicGrid !== undefined){
          console.log('------result',result);
          console.log(result.data[basicGrid]);
          if(result.data[basicGrid] !== undefined) {


            console.log(result.data[basicGrid].row);
            (result && setBasic(result.data[basicGrid].row));
            console.log(basic, '-------------basic');
          }
        }
// 재료 정보 불러오기
        const resultSec = await axios.get(ingredientUrl, {
          withCredentials: true,
        });
        if(ingredientGrid !== undefined){
          console.log('------result',resultSec);
          console.log(resultSec.data[ingredientGrid]);

          if(resultSec.data[ingredientGrid] !== undefined) {
            console.log(resultSec.data[ingredientGrid]);
            (resultSec && setIngredient(resultSec.data[ingredientGrid].row));
            console.log(resultSec.data[ingredientGrid].row);
          }
        }
// 과정 정보 불러오기
        const resultThir = await axios.get(recipeUrl, {
          withCredentials: true,
        });
        if(recipeGrid !== undefined) {
          if(resultThir.data[recipeGrid] !== undefined) {
            (resultThir && setRecipe(resultThir.data[recipeGrid].row));
          }
        }
      } catch(err) {
        console.log(err);
        throw err;
      }
      if(basic && ingredient && recipe)
        setLoading(false);
      else
        setLoading(true);
    }
    fetchData();
  }, []);

  if(loading) return <Loading />;

  return (
    <>
      <FoodList />
    </>
  )
}
