//값으로 String 타입만을 사용한 객체
let obj1 = {a : "apple", b : "banana", c: "carrot"};

// 값으로 number 타입만을 사용한 객체
let obj2 = {a : 1, b: 2, c:3};

// 값으로 다양한 자료형들을 함께 사용한 객체
let obj3 = {a : "hello", b : 100, c: [1,2,3,4]}

// 값으로 객체를 사용한 객체
let obj4 = {
    a: {a1 :1, a2:2},
    b: {b1 :3, b2:4},
    c: {c1 :5, c2:6},
}

// 출력
console.log(obj1['a']);
console.log(obj2.a);
console.log(obj3['c']);
console.log(obj4.c)
console.log(obj4.c.c2);


// 함수를 값으로 할수도 있다.
// 객체 생성방식
//1. 객체 리터럴 방식 : 변수처럼 객체를 생성하는 방식!
let myObj = {

    name: 'lettuce',
    age: 20,

    hello: function(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }
};

console.log(myObj); 

// 2. 객체 생성자 방식
var myObj2 = new Object();

myObj2.name = 'lettuce';
myObj2['age'] = 20;

myObj2.hello = function(){
    return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
};

console.log(myObj2); 

// 객체에 추가 하는 방법

let obj = {}; // 빈 객체 선언

// 1. dot notation 표기법
obj.name = 'lettuce';
obj.age = 20
obj.address = 'seoul'

console.log(obj);

//배열
var arr1 = [12, 15, 18, 24, 29];
console.log(arr1.length);
arr1.push("91");
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(61);
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log(arr1.indexOf(18));




//참조자료형 
var a1 = [1, 2, 3, 4, 5];
var a2 = a1;
console.log("a1 : ", a1);
console.log("a2 : ", a2);



