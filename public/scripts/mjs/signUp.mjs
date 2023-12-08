const checkDuplicated = document.getElementById("checkDuplicated")

async function signup() {
  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const residentNumber = document.getElementById('residentNumber').value;
  // 서버에 ID 중복 검사 요청
  const duplicateCheckResponse = await checkDuplicateId(userId);

  // ID 중복 검사 결과 처리
  if (duplicateCheckResponse.status === 200) {
    // ID 사용 가능
    console.log('ID 사용 가능');

    const userData = {
      userId: userId,
      password: password,
      email: email,
      name: name,
      residentNumber: residentNumber
    };

    // fetch를 사용하여 서버에 데이터 전송
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.text())
      .then(data => {
        console.log('서버 응답:', data);
        // TODO: 서버 응답에 따른 클라이언트 처리 추가
      })
      .catch(error => {
        console.error('데이터 전송 중 오류 발생:', error);
        // TODO: 오류 처리 추가
      });
  } else if (duplicateCheckResponse.status === 400) {
    // 이미 존재하는 ID
    console.log('이미 존재하는 ID');
    // TODO: 중복 ID 처리 (예: 사용자에게 알림 메시지 표시)
    alert('이미 존재하는 ID입니다.');
  } else {
    // 오류 발생
    console.error('ID 중복 검사 오류');
    // TODO: 오류 처리
  }
}

// ID 중복 검사 함수
async function checkDuplicateId(userId) {
  try {
    // 서버에 ID 중복 검사 요청
    const response = await fetch('/signup/checkDuplicateId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (response.status === 200) {
      // ID 사용 가능
      console.log('ID 사용 가능');
      return true;
    } else if (response.status === 400) {
      // 이미 존재하는 ID
      console.log('이미 존재하는 ID');
      // TODO: 중복 ID 처리 (예: 사용자에게 알림 메시지 표시)
      alert('이미 존재하는 ID입니다.');
      return false;
    } else {
      // 다른 상태 코드 처리
      console.error('ID 중복 검사 오류:', response.status);
      // TODO: 오류 처리
      return false;
    }
  } catch (error) {
    console.error('ID 중복 검사 중 오류 발생:', error);
    // TODO: 오류 처리
    return false;
  }
}

checkDuplicated.addEventListener('click', function() {
  const userId = document.getElementById('userId').value;
  checkDuplicateId(userId);
});