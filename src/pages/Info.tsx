import React from 'react'

export default function Info() {
  return (
    <div className='w-4/6 mx-auto h-[75vh]'>
      <h2 className='text-[2.5rem] font-main
         text-center mt-12'>
        Kitchen's 는  
      </h2>
      <h2 className='text-[2.5rem] font-main
       text-center mb-6'>
        무얼 하는 사이트인가요?   
      </h2>
      <ul className='w-5/6 mx-auto mb-12 font-subMainSec text-xl'>
        <li className='my-4 '>
          <span className='text-2xl'>1. </span>
          농림수산식품교육문화정보원에서 제공하는 공공 API를 기반으로 레시피를 소개합니다.
        </li>
        <li className='my-4'>
          <span className='text-2xl'>2. </span>
          정보의 출처는 
          <a href="https://data.mafra.go.kr/opendata/data/indexOpenDataDetail.do?data_id=20150827000000000464&filter_ty=O&getBack=&sort_id=&s_data_nm=&instt_id=&cl_code=&shareYn="
            className='underline text-blue-500 hover:text-purple-700'> 농림축산식품 공공데이터 포털</a>
          에 존재합니다.
        </li>
        <li className='my-4'>
          <span className='text-2xl'>3. </span>
          샘플 데이터는
          <a href="http://211.237.50.150:7080/openapi/sample/xml/Grid_20150827000000000226_1/1/5"
            className='underline text-blue-500 hover:text-purple-700'> 여기</a>
          에서 확인 가능하며, 레시피 기본정보 / 레시피 재료정보 / 레시피 과정정보 총 3가지의 정보를 요청하여 그렸습니다.
        </li>
        <li className='my-4'>
          <span className='text-2xl'>4. </span>
          해당 프로젝트를 하고자 했던 이유는 매번 무슨 요리를 할 지 고민 되어서
          참고할 목적으로 만들게 되었습니다.
        </li>
      </ul>
    </div>
  )
}
