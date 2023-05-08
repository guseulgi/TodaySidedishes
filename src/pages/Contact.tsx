import React from 'react'
import {FaSourcetree} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import {
  SiTistory, SiTypescript, SiCsharp, SiTailwindcss, SiStyledcomponents,
  SiMysql, SiMongodb, SiSlack, SiRedux
} from 'react-icons/si';
import {
  DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiSass, DiUnitySmall,
  DiVisualstudio, 
} from 'react-icons/di';

export default function Contact() {
  return (
    <div className='w-5/6 lg:w-4/6 mx-auto my-10 font-subMainSec
      h-[70vh]'>
      <h2 className='font-main text-4xl mb-2'>Contact</h2>
      <hr className='w-2/3 lg:w-1/3' />
      <h2 className='my-4 '>제작자 - 구슬기</h2>
      <ul className='mx-3'>
        <li className='flex my-2'>
          <GoMail className='w-6 h-6 mr-3'/>
          <a href="mailto:guseul9405@gmail.com?body=안녕하세요.&nbsp;구슬기에게&nbsp;하실&nbsp;말씀이&nbsp;있으신가요?">
            guseul9405@gmail.com</a>
        </li>
        <li className='flex my-2'>
          <BsGithub className='w-6 h-6 mr-3'/>
          <a href='https://github.com/guseulgi' 
            className='my-auto'>https://github.com/guseulgi</a>
        </li>
        <li className='flex my-2'>
          <SiTistory className='w-5 h-5 mr-4 ml-[2px] pt-1'/>
          <a href='https://front-kuli.tistory.com/' >https://front-kuli.tistory.com/</a>
        </li>
      </ul>
      <div className='my-10'>
        <h4 className='font-main text-4xl mb-2'>Technique Stack</h4>
        <hr className='w-5/6 lg:w-1/2' />
        <ul>
          <li className='my-4 grid grid-cols-8'>
            <DiHtml5 className=' w-7 h-7'/>
            <DiCss3 className=' w-7 h-7' />
            <DiSass className='w-7 h-7' />
            <SiStyledcomponents className='w-8 h-8' />
            <SiTailwindcss className='w-7 h-7' />
            <DiJsBadge className=' w-7 h-7' />
            <SiTypescript className='w-7 h-7'/>
            <SiRedux className='w-6 h-6' />
          </li>
          <li className='my-4 grid grid-cols-8'>
            <SiMysql className='w-8 h-8'/>
            <SiMongodb className='w-7 h-7' />
            <DiNodejs className='w-9 h-9' />
          </li>
          <li className='my-4 grid grid-cols-8'>
            <DiGit className='w-8 h-8'/>
            <FaSourcetree className='w-6 h-6' />
            <SiSlack className='w-6 h-6' />
            <DiVisualstudio className='w-7 h-7'/>
          </li>
          <li className='my-4 grid grid-cols-8'>
            <SiCsharp className='w-7 h-7'/>
            <DiUnitySmall className='w-8 h-8' />
          </li>
        </ul>
      </div>
    </div>
  )
}
