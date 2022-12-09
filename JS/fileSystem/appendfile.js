const fs = require('fs');

const file = "test.txt";
const data = "추가";

// 파일에 데이터 덮어쓰기
fs.appendFile(file, data, (err) => console.log(err));