// instanceof 를 활용하여 특정 클래스에 속하는지 아닌지를 확인 할 수 있다.

class Animal {}
let rabbit = new Animal();

console.log(rabbit instanceof Animal);

// Array와 같은 내장클래스에도 사용 가능
let arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);


