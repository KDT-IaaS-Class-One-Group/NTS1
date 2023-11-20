function signup() {
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var residentNumber = document.getElementById('residentNumber').value;

  var userData = {
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
    })
    .catch(error => {
      console.error('데이터 전송 중 오류 발생:', error);
    });
}