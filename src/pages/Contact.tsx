import React from 'react'
import {FaSourcetree} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import {
  SiTistory, SiTypescript, SiCsharp, SiTailwindcss, SiStyledcomponents,
  SiMysql, SiMongodb, SiSlack, SiRedux, SiFirebase
} from 'react-icons/si';
import {
  DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiSass, DiUnitySmall,
  DiVisualstudio, 
} from 'react-icons/di';

export default function Contact() {
  return (
    <div className='w-5/6 lg:w-4/6 mx-auto my-14 font-subMainSec
      '>
      <h2 className='font-main text-4xl mb-2'>Contact</h2>
      <hr className='w-2/3 lg:w-1/3' />
      <h2 className='my-4 '>제작자 - 구슬기</h2>
      <ul className='mx-3'>
        <li className='flex my-3'>
          <GoMail className='w-6 h-6 mr-3'/>
          <a href="mailto:guseul9405@gmail.com?body=안녕하세요.&nbsp;구슬기에게&nbsp;하실&nbsp;말씀이&nbsp;있으신가요?"
            className='relative before:bg-[#E8B465] before:w-20 before:h-9 before:block before:absolute
            before:opacity-0 hover:before:opacity-100 before:bottom-[-0.4rem]
            before:right-[-5.7rem] before:rounded-md
            before:content-["메일_보내기"] before:content-center before:leading-9
            before:pl-3
            after:bg-[#E8B465] after:w-3 after:h-3 after:block after:right-[-1.2rem]
            after:top-1/2 after:translate-y-[-50%] after:absolute after:opacity-0
            hover:after:opacity-100 after:rotate-45
            hover:underline'>guseul9405@gmail.com</a>
        </li>
        <li className='flex my-3'>
          <BsGithub className='w-6 h-6 mr-3'/>
          <a href='https://github.com/guseulgi' 
            className='my-auto relative before:bg-[#E8B465] before:w-20 before:h-9 before:block before:absolute
            before:opacity-0 hover:before:opacity-100 before:bottom-[-0.4rem]
            before:right-[-5.7rem] before:rounded-md
            before:content-["깃헙_프로필"] before:content-center before:leading-9
            before:pl-[10px]
            after:bg-[#E8B465] after:w-3 after:h-3 after:block after:right-[-1.2rem]
            after:top-1/2 after:translate-y-[-50%] after:absolute after:opacity-0
            hover:after:opacity-100 after:rotate-45
            hover:underline'>https://github.com/guseulgi</a>
        </li>
        <li className='flex my-2'>
          <SiTistory className='w-5 h-5 mr-4 ml-[2px] pt-1'/>
          <a href='https://front-kuli.tistory.com/' 
            className='relative before:bg-[#E8B465] before:w-20 before:h-9 before:block before:absolute
            before:opacity-0 hover:before:opacity-100 before:bottom-[-0.4rem]
            before:right-[-5.7rem] before:rounded-md
            before:content-["티스토리"] before:content-center before:leading-9
            before:pl-[18px]
            after:bg-[#E8B465] after:w-3 after:h-3 after:block after:right-[-1.2rem]
            after:top-1/2 after:translate-y-[-50%] after:absolute after:opacity-0
            hover:after:opacity-100 after:rotate-45
            hover:underline'>https://front-kuli.tistory.com/</a>
        </li>
      </ul>
      <div className='my-10'>
        <h4 className='font-main text-4xl mb-2'>Technique Stack</h4>
        <hr className='w-5/6 lg:w-1/2' />
        <ul className='mx-1'>
          <li className='my-4 grid grid-cols-8'>
            <DiHtml5 className=' w-7 h-7 hover:scale-110 hover:text-red-700
               transition duration-200' />
            <DiCss3 className=' w-7 h-7 hover:scale-110 hover:text-blue-800
              transition duration-200' />
            <DiSass className='w-7 h-7 hover:scale-110 hover:text-pink-600
               transition duration-200'/>
            <SiStyledcomponents className='w-8 h-8 hover:scale-110 hover:text-pink-700
               transition duration-200' />
            <SiTailwindcss className='w-7 h-7 hover:scale-110 hover:text-blue-500
               transition duration-200' />
            <DiJsBadge className=' w-7 h-7 hover:scale-110 hover:text-yellow-300
               transition duration-200' />
            <SiTypescript className='w-7 h-7 hover:scale-110 hover:text-blue-700
               transition duration-200'/>
            <SiRedux className='w-6 h-6 hover:scale-110 hover:text-purple-700
               transition duration-200' />
          </li>
          <li className='my-4 grid grid-cols-8'>
            <SiMysql className='w-8 h-8 my-auto hover:scale-110 hover:text-blue-500
               transition duration-200'/>
            <SiMongodb className='w-7 h-7 my-auto hover:scale-110 hover:text-green-600
               transition duration-200' />
            <DiNodejs className='w-9 h-9 hover:scale-110 hover:text-green-800
               transition duration-200' />
            <SiFirebase className='w-7 h-7 hover:scale-110 hover:text-yellow-400
               transition duration-200 pt-[2px]' />
          </li>
          <li className='my-4 grid grid-cols-8'>
            <DiGit className='w-9 h-9 hover:scale-110 hover:text-gray-600
               transition duration-200'/>
            <FaSourcetree className='w-6 h-6 my-auto hover:scale-110 hover:text-blue-500
               transition duration-200' />
            <SiSlack className='w-6 h-6 my-auto hover:scale-110 hover:text-green-700
               transition duration-200' />
            <DiVisualstudio className='w-7 h-7 my-auto hover:scale-110 hover:text-blue-600
               transition duration-200'/>
          </li>
          <li className='my-4 grid grid-cols-8'>
            <SiCsharp className='w-7 h-7 my-auto hover:scale-110 hover:text-purple-500
               transition duration-200'/>
            <DiUnitySmall className='w-8 h-8 hover:scale-110 hover:text-gray-500
               transition duration-200' />
          </li>
        </ul>
      </div>
    </div>
  )
}
