import React from 'react'
import { useRecoilState } from 'recoil'
import { basicData } from '../atom/food';
import {fetchBasicData} from '../utils/types';

export default function AllList() {
  const [basicDataRow, setBasicDataRow] = useRecoilState(basicData);

  return (
    <div>
      <ul>
        {basicDataRow.map((el :fetchBasicData) => {
          return (
            <li>{el.RECIPE_NM_KO}</li>
          )
        })}
      </ul>
    </div>
  )
}
