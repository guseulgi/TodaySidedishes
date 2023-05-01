export interface fetchData {
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