// 배열순회하면서 특정 배열 제거

let words = ['one', 'two', 'three', 'four']

words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift()
  } // shift 배열의 맨앞을 제거
})


const arr1 = ['apple', 'kiwi', 'grape', 'orange'];

//forEach로 배열순회
function fun1 (item) {
  console.log(item);
}

arr1.forEach(fun1);

// 화살표함수로 구현
arr1.forEach((item) => {
  console.log(item);
});

// Map에서 forEach로 요소 순회
let map = new Map();
map.set('name', 'John');
map.set('age', '30');

map.forEach ((value) => console.log(value));
map.forEach ((value, key) => console.log("key: " + key + ", value: " + value));