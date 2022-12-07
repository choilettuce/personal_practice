// 빈배열 생성 and 배열에 추가
let arr = []; 

arr[0] = 'zero';
arr[1] = 'one';
arr[2] = 'two';


// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }    


//number 타입으로만 이루어진 배열
let arr1 = [1, 2, 3, 4, 5];

//string 타입으로만 이루어진 배열
let arr2 = ["h","e", "l", "l", "o"];

//number 타입과 string 타입을 함께 사용한 배열
let arr3 = [1, "h", 2, "e"];

//다양한 자료형 함께 사용한 배열 
let arr4 = [true, 1, undefined, false, "h", 2, null];

// console.log(arr1[0]);

// console.log(arr2[1]);

// console.log(arr3[2]);

// console.log(arr4[3]);


//배열에 추가 삭제
arr1.push(91);
console.log(arr1); // 배열의 맨끝에 값을 추가한다.

arr1.pop();
console.log(arr1); // 배열의 맨끝에 값을 제거한다.

arr1.unshift(61);
console.log(arr1); // 배열의 맨앞에 값을 추가한다.

arr1.shift();
console.log(arr1); // 배열의 맨앞에 값을 제거한다.

console.log(arr1.indexOf(4));
console.log(arr1.length);

//참조자료형 
var a1 = [1, 2, 3, 4, 5];
var a2 = a1;
console.log("a1 : ", a1);
console.log("a2 : ", a2);
