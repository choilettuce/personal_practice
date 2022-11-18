//Math.max
let max_a = Math.max();
let max_b = Math.max(1, 10, -100, -10, "-1000", 0); 
let max_c = Math.max(1, 10, -100, -10, "문자열", 0);

console.log(max_a);
console.log(max_b);
console.log(max_c);


//Math.min
let min_a = Math.min();
let min_b = Math.min(1, 10, -100, -10, "-1000", 0);
let min_c = Math.min(1, 10 ,-100, -10, "문자열", 0);

console.log(min_a);
console.log(min_b);
console.log(min_c);


//Math.random

let min = 10;
let max = 20;

let r1 = Math.random();
let r2 = Math.random() * (max- min)+ min;

console.log(r1);
console.log(r2);


//Math.round()
let round1 = Math.round(10.49);
let round2 = Math.round(11.01);
let round3 = Math.round(-10.95);
let round4 = Math.round(-11.01);

console.log("round1 : ",round1);
console.log("round2 : ",round2);
console.log("round3 : ",round3);
console.log("round4 : ",round4);

//Math.floor()
let floor1 = Math.floor(10.95); 
let floor2 = Math.floor(11.01);
let floor3 = Math.floor(-10.95);
let floor4 = Math.floor(-11.01);


console.log("floor1 : ",floor1);
console.log("floor2 : ",floor2);
console.log("floor3 : ",floor3);
console.log("floor4 : ",floor4);

//Math.ceil()
let ceil1 = Math.ceil(10.49);
let ceil2 = Math.ceil(11.01);
let ceil3 = Math.ceil(-10.95);
let ceil4 = Math.ceil(-11.01);

console.log("ceil1 : ",ceil1);
console.log("ceil2 : ",ceil2);
console.log("ceil3 : ",ceil3);
console.log("ceil4 : ",ceil4);