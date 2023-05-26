import React, { useEffect, useState } from 'react'
import { fetchIngredientData } from '../utils/types'
import { useRecoilValue } from 'recoil';
import { ingredientData } from '../atom/food';

export default function FoodIRDNT({idx} :{idx: number}) {
  const [mainIRDNT, setMainIRDNT] = useState<Array<fetchIngredientData>>([]);
  const [subIRDNT, setSubIRDNT] = useState<Array<fetchIngredientData>>([]);
  const [spicyIRDNT, setSpicyIRDNT] = useState<Array<fetchIngredientData>>([]);
  let tmpArrFir: any[] = [];
  let tmpArrSec: any[] = [];
  let tmpArrThir: any[] = [];

  const ingredientRowData = useRecoilValue(ingredientData);
  const ingredient :fetchIngredientData[] = ingredientRowData.filter((el :fetchIngredientData) => el.RECIPE_ID === idx);

  useEffect(() => {
    ingredient.map((el :fetchIngredientData) => {
      switch(el.IRDNT_TY_NM) {
        case "주재료" : 
          tmpArrFir.push(el);
          break;
        case '부재료' : 
          tmpArrSec.push(el);
          break;
        case '양념' : 
          tmpArrThir.push(el);
          break;
        default : break;
      }
    });
    setMainIRDNT(tmpArrFir);
    setSubIRDNT(tmpArrSec);
    setSpicyIRDNT(tmpArrThir);
  }, [idx]);

  return (
    <div className='grid grid-cols-3 gap-8 md:gap-12 lg:gap-20 mx-8 md:mx-12 lg:mx-16
      '>
      <div className=''>
      <h5 className='px-3 py-1 bg-[#544D42] text-white
                rounded-2xl mx-2 text-center'>주재료</h5>
        {mainIRDNT.length !== 0 ? mainIRDNT.map((el) => {
          return (
            <div>
              <ul className='flex my-1 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-md md:text-xl leading-8 text-[#323e44]'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-sm lg:text-[1rem] leading-8 lg:leading-8 flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        }) : <div>
            <ul className='flex my-1 leading-8 text-center'>
              <li className='m-1 flex-1 font-subMainSec
                text-sm md:text-lg leading-8 text-[#323e44]'>
                  주재료가 필요하지 않아요!
              </li>
            </ul>
        </div>}
      </div>
      <div>
      <h5 className='px-3 py-1 bg-[#536F7D] text-white
                rounded-2xl mx-2 text-center'>부재료</h5>
      {subIRDNT.length !== 0 ? subIRDNT.map((el) => {
          return (
            <div>
              <ul className='flex my-1 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-md md:text-xl leading-8 text-[#323e44]'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-sm lg:text-[1rem] leading-8 lg:leading-8 flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        }) : <div>
          <ul className='flex my-1 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-sm md:text-lg leading-8 text-[#323e44]'>
                    부재료가 필요하지 않아요!
                </li>
              </ul>
        </div>}
      </div>
      <div>
      <h5 className='px-3 py-1 bg-[#E8B465] text-gray-700
                rounded-2xl mx-2 text-center'>양념</h5>
      {spicyIRDNT.length !== 0 ? spicyIRDNT.map((el) => {
          return (
            <div>
              <ul className='flex my-1 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-md md:text-xl leading-8 text-[#323e44]'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-sm lg:text-[1rem] leading-8 lg:leading-8 flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        }) : <div>
            <ul className='flex my-1 leading-8 text-center'>
              <li className='m-1 flex-1 font-subMainSec
                text-sm md:text-lg leading-8 text-[#323e44]'>
                  양념 재료가 필요하지 않아요!
              </li>
            </ul>
        </div>}
      </div>
    </div>
  )
}
