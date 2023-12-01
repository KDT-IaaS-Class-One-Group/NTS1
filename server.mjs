import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: '192.168.100.134',
//   user: 'nts96',
//   password: '1234',
//   database: 'nts',
//   port: 3307,
//   connectionLimit: 6,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('MariaDB 연결 오류:', err);
//   } else {
//     console.log('MariaDB 연결 성공');
//     createTable(); // 테이블 생성 함수 호출
//   }
// });

// function createTable() {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS user (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       userId VARCHAR(255) NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       name VARCHAR(255) NOT NULL,
//       residentNumber VARCHAR(255) NOT NULL
//     );
//   `;

//   connection.query(createTableQuery, (err, results) => {
//     if (err) {
//       console.error('테이블 생성 오류:', err);
//     } else {
//       console.log('user 테이블 생성 완료');
//     }
//   });
// }

// app.post('/signup/checkDuplicateId', async (req, res) => {
//   const userId = req.body.userId;

//   // ID 중복 검사를 위한 SQL 쿼리
//   const duplicateCheckQuery = 'SELECT COUNT(*) AS count FROM user WHERE userId = ?';

//   try {
//     // ID 중복 검사
//     const duplicateCheckResult = await new Promise((resolve, reject) => {
//       connection.query(duplicateCheckQuery, [userId], (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       });
//     });

//     const duplicateCount = duplicateCheckResult[0].count;

//     if (duplicateCount > 0) {
//       // 이미 존재하는 ID일 경우
//       return res.status(400).send('이미 존재하는 ID입니다.');
//     } else {
//       // 존재하지 않는 ID일 경우
//       return res.status(200).send('사용 가능한 ID입니다.');
//     }
//   } catch (error) {
//     console.error('데이터베이스 오류:', error);
//     res.status(500).send('ID 중복 검사 중 오류가 발생했습니다.');
//   }
// });

// app.post('/signup', async (req, res) => {
//   // 클라이언트에서 전송된 회원가입 데이터
//   const userData = req.body;

//   // ID 중복 검사를 위한 SQL 쿼리
//   const duplicateCheckQuery = 'SELECT COUNT(*) AS count FROM user WHERE userId = ?';

//   try {
//     // ID 중복 검사
//     const duplicateCheckResult = await new Promise((resolve, reject) => {
//       connection.query(duplicateCheckQuery, [userData.userId], (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       });
//     });

//     const duplicateCount = duplicateCheckResult[0].count;

//     if (duplicateCount > 0) {
//       // 이미 존재하는 ID일 경우
//       return res.status(400).send('이미 존재하는 ID입니다.');
//     }

//     // 존재하지 않는 ID일 경우 회원가입 처리
//     const insertQuery = 'INSERT INTO user (userId, password, email, name, residentNumber) VALUES (?, ?, ?, ?, ?)';
//     const insertValues = [
//       userData.userId,
//       userData.password,
//       userData.email,
//       userData.name,
//       userData.residentNumber
//     ];

//     // 회원가입 데이터 삽입
//     connection.query(insertQuery, insertValues, (err, results) => {
//       if (err) {
//         console.error('데이터베이스 오류:', err);
//         res.status(500).send('회원가입 중 오류가 발생했습니다.');
//       } else {
//         console.log('데이터베이스에 회원가입 데이터 저장 완료');
//         res.status(200).send('회원가입이 완료되었습니다.');
//       }
//     });
//   } catch (error) {
//     console.error('데이터베이스 오류:', error);
//     res.status(500).send('회원가입 중 오류가 발생했습니다.');
//   }
// });

// app.post('/login', (req, res) => {
//   const userId = req.body.userId;
//   const password = req.body.password;

//   // 데이터베이스에서 사용자 정보 조회
//   const query = 'SELECT * FROM user WHERE userId = ? AND password = ?';
//   connection.query(query, [userId, password], (error, results) => {
//     if (error) {
//       console.error('로그인 에러:', error);
//       res.status(500).send('로그인 중 에러가 발생했습니다.');
//     } else {
//       if (results.length > 0) {
//         // 로그인 성공
//         res.status(200).send('로그인 성공');
//       } else {
//         // 로그인 실패
//         res.status(401).send('아이디 또는 비밀번호가 올바르지 않습니다.');
//       }
//     }
//   });
// });

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});