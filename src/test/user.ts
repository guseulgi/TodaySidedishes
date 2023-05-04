export interface User {
  name: string,
  email: string,
  age: number,
}

const users: User[] = [
  { name: 'XXX', email: '123@333', age: 30},
  { name: 'zzz', email: '222@333', age: 31},
  { name: 'VV', email: '555@333', age: 25},
  { name: 'YYYY', email: '444@333', age: 28},
];

const getAllUsers = ():User[] => {
  return users;
};

// test('길이확인!', () => {
//   expect(getAllUsers()).toHaveLength(4);
// });

// test('회원 존재 여부 확인', () => {
//   expect(getAllUsers()).toContainEqual({ name: 'YYYY', email: '444@333', age: 28});
// });

const getCountsOverAge = (age: number): number => {
  const resultArr: User[] = users.filter((el :User) => el.age >= age);
  return resultArr.length;
}

// test('30살 이상인 회원 테스트', () => {
//   expect(getCountsOverAge(30)).toBeGreaterThanOrEqual(2);
// })

const getEmailToName = (name: string): string => {
  const result: User | undefined = users.find((el :User) => el.name === name);
  if(result !== undefined)
    return result?.email;
  
  return '회원 없음';
}

// test('이메일 형식 확인', () => {
//   expect(getEmailToName('zzz')).toMatch(
//     /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
//   );
// })

const throwError = ():never => {
  throw new Error('에러');
}

// test('에러 발생!', () => {
//   expect(() => throwError()).toThrow();
// })