import { atom } from "recoil";

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