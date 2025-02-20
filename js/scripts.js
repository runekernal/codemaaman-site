
// Dark Mode Toggle
let isDarkModeOn = false;
const darkModeIcon = document.getElementById('dark-mode-icon');
darkModeIcon.addEventListener('click', () => {
  isDarkModeOn = !isDarkModeOn;
  if (isDarkModeOn) {
    document.documentElement.style.setProperty("--background-color", "black");
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
const dynamicText = document.querySelector('.dynamic-text');
const words = ["Grow.", "Innovate.", "Succeed."];
let wordIndex = 0;
let charIndex = 0;

const typeEffect = () => {
  if (charIndex < words[wordIndex].length) {
    dynamicText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1000);
  }
};


const eraseEffect = () => {
  if (charIndex > 0) {
    dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  }
};

typeEffect();