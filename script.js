const toggleButton = document.querySelector('.theme-toggle');
const mobileToggeButton = document.querySelector('.mobile-theme-toggle');
const html = document.documentElement;

// 1️⃣ Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.classList.add(savedTheme);
}
// 2️⃣ Toggle theme on button click
toggleButton.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// 2️⃣ Toggle theme on button click
mobileToggeButton.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

const humburgerButton = document.querySelector('.humburger-mobile-nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.close-mobile-nav-button');

humburgerButton.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
});

mobileNavClose.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});
