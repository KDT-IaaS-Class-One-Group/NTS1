let scrolling = false;

export function handleScroll() {
  if (!scrolling) {
    scrolling = true;
    const threshold = window.innerHeight / 3;
    const mainSection = document.getElementById("main");
    const introduceSection = document.getElementById("introduce");
    mainSection.classList.toggle("active", window.scrollY > threshold);
    introduceSection.classList.toggle("active", window.scrollY > threshold);
    setTimeout(() => {
      scrolling = false;
    }, 1000);
  }
}