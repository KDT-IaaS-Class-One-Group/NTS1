import { initializeDarkMode } from "./darkMode.mjs";
import { createHamburgerMenu } from "./hamburger.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeDarkMode();
  createHamburgerMenu();
});

// 상태 관리 변수이며 현재 슬라이드의 번호를 추적하는 역할
let currentSlide = 1;

function showSlide(number) {
  const slides = document.querySelectorAll(".slide");
  if (number > slides.length) {
    currentSlide = 1;
  }
  if (number < 1) {
    currentSlide = slides.length;
  }

  slides.forEach((slide, index) => {
    // 현재 슬라이드는 활성화되어 나타나도록 설정
    if (index + 1 === currentSlide) {
      slide.classList.add("active");
      slide.classList.remove("previous", "next");
    } else if (index + 1 < currentSlide) {
      // 이전 슬라이드는 왼쪽으로 이동하여 사라지도록 설정
      slide.classList.remove("active", "next");
      slide.classList.add("previous");
    } else {
      // 다음 슬라이드는 오른쪽으로 이동하여 나타나도록 설정
      slide.classList.remove("active", "previous");
      slide.classList.add("next");
    }
  });
}

// 이전 슬라이드로 이동하는 함수
// -= 1 = 현 슬라이드가 2번일 경우 1번 슬라이드로 갈 수 있게 1씩 마이너스하는 역할
function prevSlide() {
  showSlide((currentSlide -= 1));
}

// 다음 슬라이드로 이동하는 함수
// += = 현 슬라이드에서 1씩 추가되는 1 슬라이드일 경우 2 슬라이드 이동하는 함수
function nextSlide() {
  showSlide((currentSlide += 1));
}

// 버튼에 대한 이벤트 처리를 추가합니다.
document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
});

showSlide(currentSlide);

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
