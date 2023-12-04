import { handleScroll } from './scroll.mjs';
import { darkMode } from "./darkMode.mjs";
import { hamburgerMenu } from "./hamburger.mjs";
import { initializeSlideShow, showSlide, getPrevSlide, getNextSlide } from './slide.js';
import { login } from "./login.mjs";
import { logout } from "./logout.mjs";

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