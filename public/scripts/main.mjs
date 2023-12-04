import { handleScroll } from './scroll.mjs';
import { darkMode } from "./darkMode.mjs";
import { hamburgerMenu } from "./hamburger.mjs";

document.addEventListener("DOMContentLoaded", function () {
  darkMode();
  hamburgerMenu();
});

// 스크롤 이벤트에 스크롤처리 함수 연결
window.addEventListener("scroll", handleScroll);


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

function teamToggle() {
  let navbar = document.getElementById("myNavbar");
  if (navbar.style.width === "250px") {
    navbar.style.width = "0";
  } else {
    navbar.style.width = "250px";
  }
}


// function logout() {

//   document.getElementById("loggedInUserId").style.display = "none";
//   document.getElementById("loginForm").style.display = "block";
//   document.getElementById("logoutBtn").style.display = "none";
//   document.getElementById("signupBtn").style.display = "block";
// }

