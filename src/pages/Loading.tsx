import React from 'react'

export default function Loading() {
  return (
    <section className='bg-[#FFF6ED]'>
      <div className='w-4/6 py-24 text-center mx-auto'>
        <div className='w-52 h-52 block mx-auto mb-5' style={{
          backgroundImage: 'url("./images/source/famer.png")',
          backgroundSize: 'cover',
        }}></div>
        <h3 className='font-main text-5xl text-[#342f27]'>음식 정보를 가져오는 중입니다...</h3>
        <p className='mt-4 text-[#342f27]'>잠시만 기다려주세요!</p>
      </div>
    </section>
  )
}
