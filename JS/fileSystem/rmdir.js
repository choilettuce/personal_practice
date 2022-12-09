const fs = require('fs');

// 디렉토리 삭제
fs.rmdir("winner", (err) => console.log(err));