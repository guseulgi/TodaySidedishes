import React from 'react'

export default function NotData() {
  return (
    <div className=' h-[95vh] overflow-hidden '>
        <div className="block absolute z-[-1]" style={{
          backgroundImage: `url('./images/source/bg3.jpg')`,
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          }}>
        </div>
        <div className='text-center mt-24 bg-white py-10 w-4/5 lg:w-4/6 mx-auto'>
          <span className='text-xl text-[#342f27]'>잠시만요!</span>
          <div className='font-main text-5xl mt-2 mb-10 px-3 text-[#342f27]'>
            음식 정보를 불러들이지 못하였습니다...
          </div>
          <a href='/' className='text-xl my-10 px-6 py-3 bg-[#544D42]
            text-white rounded-lg font-bold transition 
            duration-200 hover:bg-[#342f27]'>Home</a>
        </div>
      </div>
  )
}
