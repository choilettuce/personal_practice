const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res) => {
    res.send("hello World!");
})

app.listen(port, () => {
    console.log(`포트 : ${port}`)
});
