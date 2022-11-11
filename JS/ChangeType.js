// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자타입 -> 문자열 타입
String(1); // "1"
String(NaN); // "NaN"

// 불리언 타입 -> 문자열 타입
String(true); // "true"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자타입 -> 문자열 타입
(1).toString(); // "1"
(NaN).toString(); // "NaN"
// 불리언 타입 -> 문자열 타입
(true).toString(); // "true"

// 3.문자열 연결 연산자를 이용하는 방법
// 숫자타입 -> 문자열 타입
1 + ''; // "1"
NaN + ''; // "NaN"
// 불리언 타입 -> 문자열 타입
true + ''; // "true"



// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 -> 숫자 타입
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53
// 불리언 타입 -> 숫자 타입
Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
// 문자열 타입 -> 숫자 타입
parseInt('0'); // 0
parseInt('-1'); // -1
parseFloat('10.53'); // 10.53

// 3. '+'단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0'; // 0
+'-1'; // -1
+'10.53'; // 10.53
// 불리언 타입 => 숫자 타입
+true; // 1
+false; // 0

// 4. *산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1; // 10.53
// 불리언 타입 => 숫자 타입
true * 1; // 1
false * 1; // 0



// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입  -> 불리언 타입
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); // true
// 숫자 타입 -> 불리언 타입
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
// null 타입 -> 불리언 타입
Boolean(null); // false
// undefined 타입 => 불리언 타입
Boolean(undefined); // false
// 객체 타입 -> 불리언 타입
Boolean({}); // true
Boolean([]); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법

// 문자열 타입 => 불리언 타입
!!'x'; // true
!!''; // false
!!'false'; // true

// 숫자 타입 => 불리언 타입
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // true

// null 타입 => 불리언 타입
!!null; // false

// undefined 타입 => 불리언 타입
!!undefined; // false

// 객체 타입 => 불리언 타입
!!{}; // true
!![]; // true