import React, { useEffect, useRef, useState } from 'react'
import FoodItem from './FoodItem'
import { fetchBasicData, fetchIngredientData } from '../utils/types';
import axios from 'axios';
import Loading from '../pages/Loading';
import Sharemark from './Sharemark';
import NotData from '../pages/NotData';
import FoodIRDNT from './FoodIRDNT';

export default function FoodList() {
  const curIdx = 0;
  const randomReceipeNum = Math.floor(Math.random() * 85);

  const startIdx = useRef<number>(randomReceipeNum);
  const [state, setState] = useState<number>(startIdx.current);
  const [loading, setLoading] = useState<boolean>(false);

  const [basicData, setBasicData] = useState<fetchBasicData>();
  const [ingredientData, setIngredientData] = useState<fetchIngredientData[]>();

  const filterArr = useRef<Array<fetchIngredientData>>([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async() => {
      const basicGrid = process.env.REACT_APP_BASIC_GRID_NUM;
      const ingredientGrid = process.env.REACT_APP_INGREDIENT_GRID_NUM;

      const basicUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${basicGrid}/${startIdx.current}/${startIdx.current + 1}`;
      const ingredientUrl = `/openapi/${process.env.REACT_APP_API_KEY}/json/${ingredientGrid}/1/999`;

      try {
        const result = await axios.get(basicUrl,{
          withCredentials : true,
        });

        const resultSec = await axios.get(ingredientUrl, {
          withCredentials: true,
        });
        
// 기본 정보 불러오기
        if(basicGrid !== undefined){
          setBasicData(result.data[basicGrid].row[curIdx]);
        }
        
// 재료 정보 불러오기
        if(ingredientGrid !== undefined){
          filterArr.current = resultSec.data[ingredientGrid].row.filter((el :any) => el.RECIPE_ID === startIdx.current);
          console.log(filterArr);
          setIngredientData(filterArr.current);
        }

// 과정 정보 불러오기 TODO

      } catch(err) {
        console.log(err);
        throw err;
      }
      setLoading(false);
    }

    fetchData();
  }, [startIdx, state]);

  if(loading) return <Loading />;
  
  // 데이터 불러오기에 실패했을 때
  if(!basicData) return <NotData />;

  return (
    <section>
      {basicData && <FoodItem data={basicData} />}
      <Sharemark />
      {ingredientData && <FoodIRDNT data={filterArr.current}/>}

      <ul className='flex justify-center mb-10'>
        <li>
        <button onClick={() => {
            startIdx.current = startIdx.current - 1;
            console.log(startIdx.current);
            setState(startIdx.current);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="w-6 h-6 text-[#536F7D] hover:scale-125 transition duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </li>
        <li className='text-[#536F7D] mx-5'>
          {startIdx.current}
        </li>
        <li>
          <button onClick={() => {
            startIdx.current = startIdx.current + 1;
            console.log(startIdx.current);
            setState(startIdx.current);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="w-6 h-6 text-[#536F7D] hover:scale-125 transition duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </li>
      </ul>
    </section>
  )
}
