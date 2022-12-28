const arr = [1,2,3,4,5,6,7,8,9,10]

const arr1 = arr.slice(3,5); 
const arr2 = arr.slice(undefined, 5); // undefined인 경우 0부터 slice
const arr3 = arr.slice(-3);			  // 음수를 지정한 경우 배열의 끝에서부터 길이를 나타낸다
const arr4 = arr.slice(-3, 9);	//		
const arr5 = arr.slice(12);		// 배열의 길이와 같거나 큰수를 지정한 경우 - 빈배열 반환	
const arr6 = arr.slice(4);		// 추출 종료할 기준인덱스를 지정하지 않은 경우 - 배열의 끝까지 slice
const arr7 = arr.slice(undefined);		
const arr8 = arr.slice(5, -4);			
const arr9 = arr.slice(2, 15);		
 
console.log("arr :",arr);	
console.log("arr1 :",arr1);	
console.log("arr2 :",arr2);	
console.log("arr3 :",arr3);	
console.log("arr4 :",arr4);	
console.log("arr5 :",arr5);	
console.log("arr6 :",arr6);	
console.log("arr7 :",arr7);	
console.log("arr8 :",arr8);
console.log("arr9 :",arr9);