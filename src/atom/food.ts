import { atom } from "recoil";
import { Comments } from "../utils/types";

// 음식 인덱스
export const curIndex = atom({
  key: 'current index',
  default: Math.floor(Math.random() * 85),
});

// 인덱스에 따른 레시피 기본정보
export const basicData = atom({
  key: 'basic data',
  default: [],
});

// 인덱스에 따른 레시피 재료정보
export const ingredientData = atom({
  key: 'ingredient data',
  default: [],
});

// 인덱스에 따른 레시피 과정정보
export const recipeData = atom({
  key: 'recipe data',
  default: [],
});

// 인덱스에 따른 레시피 덧글 정보
export const reviewData = atom({
  key : 'review',
  default: [] as any,
})