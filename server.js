const express = require('express');
const path = require('path')
const app = express();
const port = 8080 ;


app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});