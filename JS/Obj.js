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
var cat = {
    name: "나비",
    age : 1,
    mew: function(){
        return "야옹";
    }
};
console.log(cat);
console.log(cat.name);
console.log(cat.mew());


// 객체에 추가 하는 방법
let lettuce = {
    name : 'SH' ,
    birth : '0102'

};

lettuce['gender'] = 'M';

console.log(lettuce['gender']);

let obj = {} // 빈 객체 선언

// 1. dot notation 표기법
obj.name = 'lettuce';
obj.age = 20
obj.address = 'Inchoen'


