const fs = require('fs');

const file = "test.txt";
const data = "테스트";
// 파일에 데이터쓰기 
fs.writeFile(file, data, (err) => console.log(err));