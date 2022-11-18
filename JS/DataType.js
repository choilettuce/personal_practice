//number type
let n1 = 1234;
let n2 = 2.123;

//string type
let s1 = "hello";
let s2 = 'world';

//boolean type
let b1 = true;
let b2 = false;

//null type
let n = null;

// undefined type
let u1;
let u2 = undefined;

// Array type
let arr = [1,2,3,4]

//Object type
let obj = {a : "apple" , b : "banana", c: "carrot"}

//참조자료형 
var a1 = [1, 2, 3, 4, 5];
var a2 = a1;
console.log("a1 : ", a1);
console.log("a2 : ", a2);

a1.pop();
console.log("a1 : ", a1);
console.log("a2 : ", a2);


//자료형확인
let t1 = typeof('문자');
let t2 = typeof(245);

console.log(t1);
console.log(t2);