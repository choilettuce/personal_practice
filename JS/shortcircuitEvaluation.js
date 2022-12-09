// 단축평가 규칙
true || anything //  => true
false || anything // => anything
true && anything // => anything
false && anything // => false



// 논리곱(&&) 연산자
'a'   && 'b'   // => 'b'
false && 'b'   // => false
'a'   && false // => false

// 논리합(||) 연산자
'a'   || 'b'   // => 'a'
false || 'b'   // => 'b'
'a'   || false // => 'a'

// 단축평가를 활용한 if문 대체
let finished = true; // 주어진조건이 true
let message = '';

message = finished && '완료';
console.log(message); // => '완료'

finished = false; // 주어진 조건이 false

message = finished || '미완료';
console.log(message); // => '미완료'


// 삼항 조건 연산자로 if ... else 문 대체
let condition = true;
let message2 = '';

message2 =  done ? '완료' : '미완료';
console.log(message2); // => 완료


