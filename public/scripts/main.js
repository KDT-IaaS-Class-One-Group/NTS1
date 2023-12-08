import { handleScroll } from './scroll.js';
import { darkMode } from "./darkMode.js";
import { hamburgerMenu } from "./hamburger.js";
import { initializeSlideShow, showSlide, getPrevSlide, getNextSlide } from './slide.js';
import { login } from "./login.js";
import { logout } from "./logout.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

document.addEventListener("DOMContentLoaded", function () {
  darkMode();
  hamburgerMenu();
});

// 스크롤 이벤트에 스크롤처리 함수 연결
window.addEventListener("scroll", handleScroll);

// 슬라이드 쇼 초기화
initializeSlideShow();

// 예시로 슬라이드 조작
const slides = document.querySelectorAll(".slide");
let currentSlide = 1;

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = getPrevSlide(slides.length, currentSlide);
  showSlide(slides, currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = getNextSlide(slides.length, currentSlide);
  showSlide(slides, currentSlide);
});

function teamToggle() {
  let navbar = document.getElementById("myNavbar");
  if (navbar.style.width === "250px") {
    navbar.style.width = "0";
  } else {
    navbar.style.width = "250px";
  }
}

loginBtn.addEventListener("click", async function () {
  login();
});

logoutBtn.addEventListener("click", async function () {
  logout();
});

// function login() {
//   const userId = document.getElementById("userId").value;
//   const password = document.getElementById("password").value;

//   fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userId, password })
//   })
//     .then(response => {
//       if (response.ok) {
        
//         document.getElementById("loggedInUserId").innerText = userId + "님 반갑습니다!";
//         document.getElementById("loggedInUserId").style.display = "block";
//         document.getElementById("loginForm").style.display = "none";
//         document.getElementById("logoutBtn").style.display = "block";
//         document.getElementById("signupBtn").style.display = "none";
//       } else {
       
//         console.error('로그인 실패:', response.statusText);
//       }
//     })
//     .catch(error => {
//       console.error('데이터 전송 중 오류 발생:', error);
//     });
// }


// function logout() {

//   document.getElementById("loggedInUserId").style.display = "none";
//   document.getElementById("loginForm").style.display = "block";
//   document.getElementById("logoutBtn").style.display = "none";
//   document.getElementById("signupBtn").style.display = "block";
// }

