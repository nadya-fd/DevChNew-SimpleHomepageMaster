// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// // 1️⃣ Load saved theme from localStorage
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   body.classList.add(savedTheme);
// }

// // 2️⃣ Toggle theme on button click
// toggleButton.addEventListener('click', () => {
//   if (body.classList.contains('dark')) {
//     body.classList.remove('dark');
//     body.classList.add('light');
//     localStorage.setItem('theme', 'light');
//   } else {
//     body.classList.remove('light');
//     body.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//   }
// });

const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;
const moonBtn = document.querySelector('.moon-button');
const sunBtn = document.querySelector('.sun-button');

// 1️⃣ Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// 2️⃣ Toggle theme on button click
toggleButton.addEventListener('click', () => {
  console.log('click');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
    moonBtn.classList.remove('darkModeMoon');
    sunBtn.classList.remove('darkModeSun');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    moonBtn.classList.add('darkModeMoon');
    sunBtn.classList.add('darkModeSun');
  }
});
