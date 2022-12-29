const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const arr1 =  arr.splice(10, 2, 'a', 'b', 'c');
// 10번째 부터 2개의 요소 제거, 'a', 'b', 'c'인자 추가
console.log("arr :", arr);
console.log("arr1 :", arr1);  

const arr2 = arr.splice(-6,4);
console.log("arr :", arr);
console.log("arr2 : ", arr2);
