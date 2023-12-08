function login() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, password }),
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("loggedInUserId").innerText =
          userId + "님 반갑습니다!";
        document.getElementById("loggedInUserId").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";
        document.getElementById("signupBtn").style.display = "none";
      } else {
        console.error("로그인 실패:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("데이터 전송 중 오류 발생:", error);
    });
}

export { login }