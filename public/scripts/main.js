// 상태 관리 변수이며 현재 슬라이드의 번호를 추적하는 역할
let currentSlide = 1;

function showSlide(number) {
  const slides = document.querySelectorAll('.slide');
  // 첫번째 슬라이드를 보여주기 위한 조건식
  if (number > slides.length) { currentSlide = 1; }
  // 마지막 슬라이드를 보여주기 위한 조건식
  if (number < 1) { currentSlide = slides.length; }
  // 모든 슬라이드에 remove로 active 클래스 제거를 반복 = 현재 활성화된 슬라이드 비활성화
  for (let i = 0; i < slides.length; i++) {
    // classList 클래스 목록에 접근하기 위한 속성
    slides[i].classList.remove('active');
  }
  slides[currentSlide - 1].classList.add('active');
}

// 이전 슬라이드로 이동하는 함수
// -= 1 = 현 슬라이드가 2번일 경우 1번 슬라이드로 갈 수 있게 1씩 마이너스하는 역할
function prevSlide() {
  showSlide(currentSlide -= 1);
}

// 다음 슬라이드로 이동하는 함수
// += = 현 슬라이드에서 1씩 추가되는 1 슬라이드일 경우 2 슬라이드 이동하는 함수
function nextSlide() {
  showSlide(currentSlide += 1);
}

// 버튼에 대한 이벤트 처리를 추가합니다.
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
});

showSlide(currentSlide);