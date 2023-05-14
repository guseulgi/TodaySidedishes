import React, { useEffect, useRef, useState } from 'react'
import FoodReviewInput from './FoodReviewInput'
import {FaThumbsUp} from 'react-icons/fa'
import { Comment } from '../utils/types'
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'

export default function FoodReview({idx}:{idx:number}) {
  const {foodId} = useParams();
  const [reRender, setReRender] = useState<boolean>(false);
  const reviewDataRow = useRef<any>(null);

  useEffect(() => {
    setReRender(false);
  }, [foodId]);

  useEffect(() => {
    reviewDataRow.current = null;
    // 덧글
    const firestoreCommentData = async () => {
      await firestore.collection('comment').doc(foodId).get()
      .then((result) => {
        if(foodId !== undefined) {
          reviewDataRow.current = result.data();
          setReRender(true);
        }
      });
    }
    firestoreCommentData();
  });

  const deleteReview = async (index :number) => {
    const isDelete = window.confirm('정말로 덧글을 삭제하시겠습니까?');
    
    if(isDelete) {
      const originReviews = {
        'coments' : reviewDataRow.current?.coments.filter((el :any, reviewIdx :any) => reviewIdx !== index)
      };
      await firestore.collection('comment').doc(`${foodId}`).set(originReviews);
      setReRender((cur) => !cur);
    }
  }

  const clickGoodBtn = async (index :number) => {
    let findComment = reviewDataRow.current?.coments.find((el :any, reviewIdx :number) => reviewIdx === index);
    findComment.goodCounts += 1;
    reviewDataRow.current.coments[index] = findComment;

    const changeReviews = {
      'coments' : reviewDataRow.current.coments,
    }
    await firestore.collection('comment').doc(`${foodId}`).set(changeReviews);
    setReRender((cur) => !cur);
  }

  return (
    <div className='mx-auto mt-16 sm:w-[95vw] md:w-[85vw] xl:w-[70vw]'>
      <div className='flex'>
        <h2 className='font-main text-4xl 
        flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-8 h-8 my-auto mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>  
          한마디 
        </h2>
        <span className='text-2xl my-auto ml-4
          text-amber-800'>{reviewDataRow.current ? reviewDataRow.current.coments.length : '0'}</span>
      </div>
      <ul className='w-full my-2 '>

        {reviewDataRow.current && reviewDataRow.current.coments.map((el : Comment, index : any) => {
          let stars = '';
          for(let i = 0; i < el.reviewStars; i++) {
            stars += '⭐️';
          };
          const iconStyle = 'identicon';
          const iconSource = `https://api.dicebear.com/6.x/${iconStyle}/svg?seed=${el.user.nickname}`;        

          return (
            <li key={index} className='border-t-[1px] w-full flex my-3'>
              <div  className='w-14 h-14 mx-2 my-6 border-[1px]
                drop-shadow-sm'>
                <img src={iconSource} alt="프로필 이미지" 
                  className='block w-9 h-9 my-[9px] mx-[9px]'/>
              </div>
              <div className='flex-1 my-5'>
                <ul className='flex mb-1 justify-between'>
                  <li className='flex'>
                    <p className='text-[#544D42] font-bold text-lg
                      ml-2 mr-3'>{el.user.nickname}</p>
                    <p className='text-gray-400 text-sm my-auto'>{el.regdate}</p>
                    <p className='my-auto text-sm mx-3'>{stars}</p>
                  </li>
                  <li className='flex mr-7 text-gray-400 my-auto
                    text-sm'>
                    <button >
                      {el.user.nickname === window.localStorage.getItem('USER') ? null 
                      : <FaThumbsUp className='hover:text-blue-500' 
                          onClick={() => clickGoodBtn(index)}/>}
                    </button> 
                      {el.user.nickname === window.localStorage.getItem('USER') ? null 
                      : <>
                        <span className='ml-2' >{el.goodCounts}</span>
                        <p className='mx-2 text-xs text-gray-200 my-auto'> | </p>
                        <button className='hover:text-gray-500'
                          onClick={() => alert('준비 중입니다.')}>신고</button>
                      </>}
                    {el.user.nickname === window.localStorage.getItem('USER') ? 
                        <button className='hover:text-gray-500'
                        onClick={() => deleteReview(index)}>❌</button>
                      : null
                    }
                  </li>
                </ul>
                <p className='w-5/6 mx-2
                  '>{el.content}</p>
              </div>
            </li>
          );
          }
        )}
      </ul>
      <FoodReviewInput idx={idx} reviewList={reviewDataRow.current}
        setReRender={setReRender}/>
    </div>
  )
}
