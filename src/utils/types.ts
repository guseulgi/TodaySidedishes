export interface fetchBasicData {
  ROW_NUM: number,
  RECIPE_ID : number,
  RECIPE_NM_KO : string,
  SUMRY : string,
  NATION_CODE : string,
  NATION_NM:string,
  TY_CODE:string,
  TY_NM:string,
  COOKING_TIME:string,
  CALORIE:string,
  QNT:string,
  LEVEL_NM:string,
  IRDNT_CODE? :string,
  PC_NM? :string,
}

/*
RECIPE_ID 레시피 코드 (SEQ_RECIPE)
RECIPE_NM_KO 레시피 이름(한글)
SUMRY 간략(요약) 소개
NATION_CODE 유형코드
NATION_NM 유형분류
TY_CODE 음식분류코드
TY_NM 음식분류
COOKING_TIME 조리시간
CALORIE 칼로리
QNT 분량
LEVEL_NM 난이도
IRDNT_CODE 재료별 분류명
PC_NM 가격별 분류
*/

// RECIPE_ID	레시피 코드
// IRDNT_SN	재료순번
// IRDNT_NM	재료명
// IRDNT_CPCTY	재료용량
// IRDNT_TY_CODE	재료타입 코드
// IRDNT_TY_NM	재료타입명

export interface fetchIngredientData {
  ROW_NUM: number,
  RECIPE_ID : number,
  IRDNT_SN? : number,
  IRDNT_NM :string,
  IRDNT_CPCTY : string,
  IRDNT_TY_CODE? : string,
  IRDNT_TY_NM : string,
}

/*
RECIPE_ID	레시피 코드
COOKING_NO	요리설명순서
COOKING_DC	요리설명
STEP_TIP	과정팁
*/
export interface fetchRecipeData {
  RECIPE_ID: number,
  COOKING_NO: number,
  COOKING_DC: string,
  STEP_TIP?: string,
}

/* 회원 스키마 */
export interface User {
  email: string,
  password: string,
  nickname: string,
  bookmark: Array<boolean>,
}

// 덧글 스키마
export interface Comment {
  content :string,
  goodCounts : number,
  regdate : string,
  reviewStars :number,
  user : User,
}

export interface Comments {
  coments : Array<Comment>,
}