const express = require('express');
const path = require('path')
const app = express();
const mysql = require('mysql2')
const port = 8080 ;
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 본인의 MariaDB 계정 정보로 수정
  password: '723546', // 본인의 MariaDB 계정 정보로 수정
  database: 'nts',
  port: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error('MariaDB 연결 오류:', err);
  } else {
    console.log('MariaDB 연결 성공');
  }
});

function createTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userId VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      residentNumber VARCHAR(255) NOT NULL
    );
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('테이블 생성 오류:', err);
    } else {
      console.log('user 테이블 생성 완료');
    }
  });
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.post('/signup', (req, res) => {
  // 클라이언트에서 전송된 회원가입 데이터
  const userData = req.body;

  // MariaDB에 데이터 삽입
  const insertQuery = 'INSERT INTO user (userId, password, email, name, residentNumber) VALUES (?, ?, ?, ?, ?)';
  const values = [
    userData.userId,
    userData.password,
    userData.email,
    userData.name,
    userData.residentNumber
  ];

  connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      res.status(500).send('회원가입 중 오류가 발생했습니다.');
    } else {
      console.log('데이터베이스에 회원가입 데이터 저장 완료');
      res.send('회원가입이 완료되었습니다.');
    }
  });
});

app.post('/login', (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  // 데이터베이스에서 사용자 정보 조회
  const query = 'SELECT * FROM user WHERE userId = ? AND password = ?';
  connection.query(query, [userId, password], (error, results) => {
    if (error) {
      console.error('로그인 에러:', error);
      res.status(500).send('로그인 중 에러가 발생했습니다.');
    } else {
      if (results.length > 0) {
        // 로그인 성공
        res.status(200).send('로그인 성공');
      } else {
        // 로그인 실패
        res.status(401).send('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    }
  });
});



app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});