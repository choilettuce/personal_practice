const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const arr1 =  arr.splice(10, 2, 'a', 'b', 'c');
// 10번째 부터 2개의 요소 제거, 'a', 'b', 'c'인자 추가

// const arr1 = arr.splice(-6,4);
// 뒤에서 6번째인 7부터 시작하여 4개의 요소 삭제

// const arr1 = arr.splice(-13, 1);
// 절대값이 배열의 길이보다 큰 경우에는 0으로 세팅한다.
// 0번째 요소부터 1개의 요소 삭제
	
// const arr1 = arr.splice(3);
// deleteCount가 생략된경우 지정한 start 인덱스부터 끝까지 모두 제거

// const arr1 = arr.splice(5, 0, 'add');
// deleteCount가 0이거나 작은 수이면 어떤 요소도 삭제되지 않는다. 
// 그러므로 arr1은 빈배열을 반환한다.

console.log("arr :", arr);
console.log("arr1 :", arr1);  


