export function darkMode() {
  const body = document.body;
  const titleBox = document.getElementById("titleBox");
  const toggleButton = document.getElementById("darktoggleButton");

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    titleBox.style.backgroundColor = body.classList.contains("dark-mode")
      ? "#394734"
      : "#666666";
  });
}