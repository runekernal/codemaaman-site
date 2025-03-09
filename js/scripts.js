
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

// Section Highligting

const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar .menu ul li a');
const highlight = document.querySelector('.navbar .menu .highlight');

const activeNavButton = () => {
  const activeHash = window.location.hash;
  const links = document.querySelectorAll('.navbar .menu ul li a');
  links.forEach((link) => {
    if (link.hash === activeHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Nav updating

let isScrolling;
window.addEventListener("scroll", () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(activeNavButton, 100);
});

function updateHashOnScroll() {
  const sections = document.querySelectorAll("section");
  let scrollPosition = window.scrollY;
  let buffer = window.innerHeight * 0.1
  let navbarHieght = document.querySelector("nav").offsetHeight

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const adjustedSectionTop = sectionTop - navbarHieght
    if (scrollPosition >= adjustedSectionTop - buffer && scrollPosition < sectionTop + sectionHeight) {
      const newHash = "#" + section.id;
      if (window.location.hash !== newHash) {
        history.replaceState(null, null, newHash);
        activeNavButton();
      }
    }
  });
}

window.addEventListener("scroll", updateHashOnScroll);
window.addEventListener("hashchange", activeNavButton);

// About Tabs

let aboutTabs = document.querySelectorAll('[data-tab-head]');
let aboutContents = document.querySelectorAll('[data-tab-content]');
aboutTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    aboutContents.forEach(tab => {
      tab.classList.remove('active');
    });
    let tabContent = document.querySelector(tab.dataset.tabHead);
    tabContent.classList.toggle('active');
    aboutTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.toggle('active');
  });
})


