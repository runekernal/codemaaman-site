
// Dark Mode Toggle
let isDarkModeOn = false;
const darkModeIcon = document.getElementById('dark-mode-icon');
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  isDarkModeOn = !isDarkModeOn;
  if (isDarkModeOn) {
    document.documentElement.style.setProperty("--background-color", "#black");
    document.documentElement.style.setProperty("--primary-font-color", "#EEEEEE");
    darkModeIcon.classList.replace('ri-moon-line', 'ri-sun-line');

  } else {
    document.documentElement.style.setProperty("--background-color", "#EEEEEE");
    document.documentElement.style.setProperty("--primary-font-color", "#393E46")
    darkModeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
  }
});

// onScroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
});
  

// TypeWriter

const speed = 100;
const words = ["Grow.", "Innovate.", "Collaborate."]
const dynamicText = document.querySelector(".dynamic-text");

function typeWriter() {
  for (let word of words) {
    for (let i = 0; i < words.length; i++) {
      setTimeout(() => {
        dynamicText.innerHTML += word[i]
      }, speed);
    }
  }
}