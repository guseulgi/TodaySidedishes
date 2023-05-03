import React, { useEffect, useRef, useState } from 'react'
import { fetchIngredientData } from '../utils/types'

export default function FoodIRDNT({data}:{data:fetchIngredientData[]}) {
  const [mainIRDNT, setMainIRDNT] = useState<Array<fetchIngredientData>>([]);
  const [subIRDNT, setSubIRDNT] = useState<Array<fetchIngredientData>>([]);
  const [spicyIRDNT, setSpicyIRDNT] = useState<Array<fetchIngredientData>>([]);

  console.log(data);

  useEffect(() => {
    let tmpArrFir = [...mainIRDNT];
    let tmpArrSec = [...subIRDNT];
    let tmpArrThir = [...spicyIRDNT];
    data.map((el) => {
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
  }, []);

  return (
    <div className='grid grid-cols-3 gap-14 lg:gap-20 mx-14 lg:mx-16
      mb-10'>
      <div className=''>
      <h5 className='px-3 py-1 bg-[#544D42] text-white
                rounded-2xl mx-2 text-center'>주재료</h5>
        {mainIRDNT.map((el) => {
          return (
            <div>
              <ul className='flex my-2 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-xl leading-8'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-md flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <div>
      <h5 className='px-3 py-1 bg-[#536F7D] text-white
                rounded-2xl mx-2 text-center'>부재료</h5>
      {subIRDNT.map((el) => {
          return (
            <div>

              <ul className='flex my-2 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-xl leading-8'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-md flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <div>
      <h5 className='px-3 py-1 bg-[#E8B465] text-gray-700
                rounded-2xl mx-2 text-center'>양념</h5>
      {spicyIRDNT.map((el) => {
          return (
            <div>
 
              <ul className='flex my-2 leading-8 text-center'>
                <li className='m-1 flex-1 font-subMainSec
                  text-xl leading-8'>
                    {el.IRDNT_NM}
                </li>
                <li className='m-1 text-md flex-1'>{el.IRDNT_CPCTY}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
