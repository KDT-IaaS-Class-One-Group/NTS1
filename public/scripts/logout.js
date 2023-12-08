function logout() {
  document.getElementById("loggedInUserId").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("signupBtn").style.display = "block";
}

export { logout }