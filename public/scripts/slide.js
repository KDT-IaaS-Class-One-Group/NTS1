// 특정 슬라이드를 보여주는 함수
function showSlide(slides, currentSlide) {
  slides.forEach((slide, index) => {
    // 모든 슬라이드 클래스 제거
    slide.classList.remove("previous", "active", "next");

    // 현재 슬라이드를 활성화 클래스로 설정
    if (index + 1 === currentSlide) {
      slide.classList.toggle("active", true);
      // 이전 슬라이드를 클래스로 설정
    } else if (index + 1 < currentSlide) {
      slide.classList.toggle("previous", true);
      // 다음 슬라이드를 클래스로 설정
    } else {
      slide.classList.toggle("next", true);
    }
  });
}

// 이전 슬라이드 번호를 가져오는 함수
function getPrevSlide(totalSlides, currentSlide) {
  let prevSlide = currentSlide - 1;
  // 슬라이드 번호가 0이하일 경우 마지막 슬라이드로 설정
  return prevSlide <= 0 ? totalSlides : prevSlide;
}

// 다음 슬라이드 번호를 가져오는 함수
function getNextSlide(totalSlides, currentSlide) {
  let nextSlide = currentSlide + 1;
  // 슬라이드 번호가 총 슬라이드 개수를 초과하면 첫 번째 슬라이드로 설정
  return nextSlide > totalSlides ? 1 : nextSlide;
}

// 슬라이드 쇼를 초기화하는 함수
function initializeSlideShow() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 1;

  // 왼쪽 버튼 클릭 시 이전 슬라이드로 변경하는 클릭 이벤트
  document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = getPrevSlide(totalSlides, currentSlide);
    showSlide(slides, currentSlide);
  });

  // 오른쪽 버튼 클릭 시 다음 슬라이드로 변경하는 클릭 이벤트
  document.querySelector(".next").addEventListener("click", () => {
    currentSlide = getNextSlide(totalSlides, currentSlide);
    showSlide(slides, currentSlide);
  });

  showSlide(slides, currentSlide);
}

export { showSlide, getPrevSlide, getNextSlide, initializeSlideShow,};
