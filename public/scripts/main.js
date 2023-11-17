function teamToggle() {
    let navbar = document.getElementById("myNavbar");
    if (navbar.style.width === "250px") {
        navbar.style.width = "0";
    } else {
        navbar.style.width = "250px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // DOM이 로드된 후 실행될 코드

    // #main 요소에 추가할 새로운 div 요소 생성
    let newContent = document.createElement("div");
    newContent.innerHTML = `<span class="menuIcon" onclick="teamToggle()">&#9776;</span>
    <div class="navbar" id="myNavbar">
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