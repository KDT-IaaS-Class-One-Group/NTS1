import { initializeSlideShow, showSlide, getPrevSlide, getNextSlide } from './slide.js';

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

document.addEventListener("DOMContentLoaded", function () {
  // DOM이 로드된 후 실행될 코드

  // #main 요소에 추가할 새로운 div 요소 생성
  let newContent = document.createElement("div");
  newContent.innerHTML = `<div class="navbar" id="myNavbar">
    <span class="menuIcon" onclick="teamToggle()">&#9776;</span>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
</div>`;

  // #main 요소에 새로운 div 요소 추가
  let mainElement = document.getElementById("header");
  mainElement.appendChild(newContent);
});

// 다크모드 토글버튼 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleButton = document.getElementById("darktoggleButton");
  const titleBox = document.getElementById("titleBox");

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    titleBox.style.backgroundColor = body.classList.contains("dark-mode")
      ? "#394734"
      : "#568444";
  });
});


let scrolling = false;

    window.addEventListener("scroll", () => {
      if (!scrolling) {
        scrolling = true;

        // Calculate the threshold for switching to the introduce section
        const threshold = window.innerHeight / 3;

        if (window.scrollY > threshold) {
          // Add the active class to both main and introduce sections
          document.getElementById("main").classList.add("active");
          document.getElementById("introduce").classList.add("active");
        } else {
          // Remove the active class from both main and introduce sections
          document.getElementById("main").classList.remove("active");
          document.getElementById("introduce").classList.remove("active");
        }

        // Set a timeout to prevent rapid scrolling events
        setTimeout(() => {
          scrolling = false;
        }, 1000);
      }
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

