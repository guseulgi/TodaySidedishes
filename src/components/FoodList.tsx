import React, { useEffect, useRef, useState } from 'react'
import FoodItem from './FoodItem'
import { fetchData } from '../utils/types';
import axios from 'axios';
import Loading from '../pages/Loading';

export default function FoodList() {
  const curIdx = 0;
  const startIdx = useRef<number>(1);
  const [state, setState] = useState<number>(startIdx.current);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<fetchData>();

  useEffect(() => {
    setLoading(true);

    const fetchData = async() => {
      const API_KEY = 'eb5684d0603863f163940fcf86a3d017401a1b80b6db1bd04a2a38b84e272700';

      const GridNum = 'Grid_20150827000000000226_1';
      const url = `/openapi/${API_KEY}/json/${GridNum}/${startIdx.current}/${startIdx.current + 1}`;

      try {
        const result = await axios.get(url,{
          withCredentials : true,
        });
        setData(result.data[GridNum].row[curIdx]);
      } catch(err) {
        console.log(err);
        throw err;
      }
      setLoading(false);
    }

    fetchData();
  }, [startIdx, state]);

  if(loading) return <Loading />;
  if(!data) return <div>데이터를 불러들이지 못하였습니다.</div>;

  return (
    <section>
      {data && <FoodItem data={data} />}

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
        <li className='text-[#536F7D] mx-5'>{startIdx.current}</li>
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
