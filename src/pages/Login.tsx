import React from 'react'

export default function Login() {
  return (
    <section className='w-full h-[85vh] lg:h-screen
      overflow-hidden relative bg-[#F2EFE7]'>
      <img src="./images/source/bg2.jpg" alt="배경화면" 
      className='fixed lg:absolute w-auto bg-cover
      lg:block bg-fixed bg-repeat'/>
      <div className='flex flex-col align-middle w-8/12 md:w-5/12 h-4/6 my-20 mx-auto
        lg:rounded-full bg-white drop-shadow-lg'>
        {/* <img src='./images/source/fryingpan.png'
          className='hidden lg:block absolute top-8 rotate-45
          right-[-320px] z-[-1]' /> */}
        <h5 className='text-center mt-10 lg:mt-20 text-2xl
          text-[#536F7D]'>오늘도 신나게 쿠킹! 🍾</h5>
        <input type='text' placeholder='아이디 입력' 
          className='block w-3/4 lg:w-3/5 h-8 mx-auto mt-12 py-5 px-2
          rounded-md border-b-2 border-[#544D42] outline-none
          focus:bg-[#FFF7F2]' />
        <input type='text' placeholder='비밀번호 입력' 
          className='block w-3/4 lg:w-3/5 h-8 mx-auto mt-6 py-5 px-2
          rounded-md border-b-2 border-[#544D42] outline-none
          focus:bg-[#FFF7F2]' />
        <button className='block w-3/4 lg:w-3/5 h-10 rounded-md text-white
          mx-auto mt-8 bg-[#7B8F9E] drop-shadow-sm
          font-bold transition duration-200 hover:translate-y-px-1 
          hover:scale-105 hover:bg-[#536F7D]'>로그인</button>
      </div>
    </section>
  )
}
