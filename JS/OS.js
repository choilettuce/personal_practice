// require 함수를 통해 모듈을 import 한다.
const os = require('os');

// 호스트이름(컴퓨터 이름)
console.log("Hostname : " + os.hostname());
  
// 운영체제 이름
console.log("운영체제 이름 : " + os.type());
  
// 운영체제 플랫폼
console.log('운영체제 플랫폼 : ' + os.platform());
  
// 운영체제 버전
console.log('운영체제 버전 : ' + os.release());

// 운영체제 아키텍쳐
console.log('운영체제 아키텍쳐 : ' + os.arch());

// 운영체제가 실행된 시간 
console.log('운영체제 실행시간 :' + os.uptime());

// 시스템의 총 메모리
console.log('시스템의 총 메모리 :' + os.totalmem());

// 시스템의 가용 메모리
console.log('시스템의 가용 메모리 :' + os.freemem());

