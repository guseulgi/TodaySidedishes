import React, { useEffect, useRef, useState } from 'react'
import { fetchIngredientData } from '../utils/types'

export default function FoodIRDNT({data}:{data:fetchIngredientData[]}) {
  const typeRef = useRef<HTMLLIElement>(null);
  const [state, setState] = useState<string>('');

  let typeColor :string = '';

  data.map((el) => {
    switch(el.IRDNT_TY_NM) {
      case "주재료" : 
        typeColor = '#544D42';
        break;
      case '부재료' : 
        typeColor = '#536F7D';
        break;
      case '양념' : 
        typeColor = '#FFE660';
        break;
      default : break;
    }
  })

  useEffect(()=> {
    if(typeRef.current !== null)
    typeRef.current.style.backgroundColor = typeColor;

  }, []);

  return (
    <div className='grid grid-cols-4 gap-4 mb-20'>
      {data.map((el) => {
        return (
          <div className=''>
            <ul className='flex my-2 leading-8'>
              <li className='px-3 py-1 bg-slate-400 text-white
                rounded-lg mx-2'
                ref={typeRef}>{el.IRDNT_TY_NM}</li>
              <li className='m-1 font-subMain
                text-xl leading-8 flex-1'>{el.IRDNT_NM}</li>
              <li className='m-1 text-md'>{el.IRDNT_CPCTY}</li>
            </ul>
          </div>
        )
      })}
    </div>
    
  )
}
