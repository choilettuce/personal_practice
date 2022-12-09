// 대입연산자
var x = 5, result;

//선할당 후증가
result = x++;
console.log(result, x);

//선증가 후할당
result = ++x;
console.log(result, x);

//선할당 후감소
result = x--;
console.log(result, x);

//선할당 후증가
result = --x;
console.log(result, x);


// 삼항조건 연산자
let y = 10;
let result2 = y % 2 ? '홀수' : '짝수';

console.log('y는 짝수인가? : ' + result2);

