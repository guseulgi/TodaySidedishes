export const getNameCB = (callback: (str: string) => void): void => {
  const name :string = 'Kim';

  setTimeout(() => {
    callback(name);
  }, 2000);
};

// test('2초 뒤 이름을 받아오는 콜백 함수 테스팅', (done) => {
//   function callback(name: string) :void {
//     expect(name).toBe('Kim');
//     done();
//   }

//   getNameCB(callback);
// })


export const getNameCBError = (callback: (data: any) => void): void => {
  const name :string = 'Kim';

  //50% 확률로 에러를 발생시켜 에러를 콜백함수에 담아서 전달
  setTimeout(() => {
      try {
        if(Math.floor(Math.random() * 2) % 2 === 0) {
          callback(name);
        } else {
          throw new Error('에러');
        }
      } catch(err) {
        callback(err);
      }
  }, 2000);
};

// test('2초 후에 이름을 받아오는 콜백 함수 테스팅', (done) => {
//   function callback(data: any): void {
//     try {
//       if(data instanceof Error) {
//         expect(data).toBe('에러');
//       } else {
//         expect(data).toBe('Kim');
//       }
//       done();
//     } catch (err) {
//       done(err);
//     }
//   }

//   getNameCBError(callback);
// })

const getNamePromise = (): Promise<string> => {
  const name = 'Kim';
  return new Promise<string>((res, rej) => {
    setTimeout(()=>{
      if(Math.floor(Math.random() * 2) % 2 === 0) {
        res(name);
      } else {
        rej(new Error('에러'));
      }
    }, 2000);
  });
}

// test('2초 후에 이름을 받아오는 프로미스 함수 테스팅', () => {
//   return getNamePromise()
//     .then((age: string) => {
//       expect(age).toBe('Kim');
//     })
//     .catch((err) => {
//       expect(err.message).toBe('에러');
//     })
// })

// test('2초 후에 이름을 받아오는 프로미스 함수 테스팅', () => {
//   return expect(getNamePromise()).resolves.toBe('Kim');
// })


const getNameAsync = (id: string): Promise<string> => {
  const name = 'Kim';

  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if(id === 'Kim') {
        res(name);
      } else {
        rej(new Error('에러'));
      }
    }, 2000);
  });
}

test('2초 후에 이름을 받아오는 async 함수 테스팅' , async () => {
  try {
    const res: any = await getNameAsync('Kim');
    expect(res).toBe('Kim');
  } catch (err) {
    expect(err.message).toBe('에러');
  }
});