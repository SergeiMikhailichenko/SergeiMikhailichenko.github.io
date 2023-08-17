const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const mainPage = document.querySelector('.main');
const pythonPage = document.querySelector('.lang-in-list.python');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    mainPage.classList.toggle('deactive');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
    }
});

pythonPage.addEventListener('click', () => {
    window.location.href = 'python.html';
});