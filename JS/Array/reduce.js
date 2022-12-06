//reduce //배열 오소의 합 계산
let arrA = [1, 2, 3, 4, 5];
let add = (a, b) => a + b;

console.log(arrA.reduce(add));//15

let arrB = [9, 2, 8, 5, 7];
let sum = arrB.reduce((pre, value) => {
	return pre + value; 
});

console.log(sum); //31

// 정수 배열에서 5의 배수인 정수만 모으기
let arrC = [10, 100, 3, 4, 50, 7];
let arrD = arrC.reduce((pre, value) => {
  if (value % 5 === 0) {
    pre.push(value);
  }
  return pre;
}, []);
console.log(arrD);//[10, 100, 50]

// initialValue 추가
let arrE = [1, 3, 5, 7, 9];
let sum2 = arrE.reduce((a,b) => a + b , 10);
 
console.log(sum2);