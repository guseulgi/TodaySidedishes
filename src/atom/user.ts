import { atom } from 'recoil';

// 유저 정보
export const allUsers = atom({
  key : 'All Users',
  default : [], 
})