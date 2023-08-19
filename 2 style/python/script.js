const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const mainPage = document.querySelector('.main');
const pythonPage = document.querySelector('.lang-in-list.python');
const btnNextPage = document.querySelector('.btn-next');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    mainPage.classList.toggle('deactive');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
    }
});


btnNextPage.addEventListener('click', () => {
    const getNumberPage = () => {
        const url = window.location.href;
        const findName = 'lesson';
        const endName = '.html';
        const idx1 = url.indexOf(findName);
        const idx2 = url.indexOf(endName, idx1);
        if (idx1 < 0 || idx2 < 0) {
            return 1;
        }
        else {
            return parseInt(url.slice(idx1 + findName.length, idx2));
        }
    }
    window.location.href = `lesson${getNumberPage() + 1}.html`;
});