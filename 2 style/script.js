const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const mainPage = document.querySelector('.main');
const pythonPage = document.querySelector('.lang-in-list.python');
const javascriptPage = document.querySelector('.lang-in-list.javascript');
const htmlPage = document.querySelector('.lang-in-list.html');
const btnStartPython = document.querySelector('.btn-start.python');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    mainPage.classList.toggle('deactive');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
    }
});
// Python
pythonPage?.addEventListener('click', () => {
    window.location.href = 'python.html';
});

btnStartPython?.addEventListener('click', () => {
    window.location.href = 'python/lesson1.html';
});
// end Python

// JavaScript
javascriptPage?.addEventListener('click', () => {
    window.location.href = 'javascript.html'
});

// HTML
htmlPage?.addEventListener('click', () => {
    window.location.href = 'html5.html'
});
// end HTML