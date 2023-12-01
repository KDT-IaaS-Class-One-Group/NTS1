import { login } from "./login.mjs";
import { logout } from "./logout.mjs";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

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

loginBtn.addEventListener("click", async function () {
  login();
});

logoutBtn.addEventListener("click", async function () {
  logout();
});