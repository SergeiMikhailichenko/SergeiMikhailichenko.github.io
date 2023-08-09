const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const scrollPoint = document.querySelector('.Home');


// let pageNumber = 0;
// let scrolling = 0;

const contentHomePage = `
<div class="pages home" id="pages1">
    <h2>Добро пожаловать!</h2>
    <p>Попробуйте разные языки программирования бесплатно на нашем сайте, чтобы определить, в каком направлении обучаться. Изучайте, экспериментируйте и выбирайте свой путь в программировании без ограничений!</p>
</div>
`;
const contentLanguagesPage = `
<div class="pages lang" id="lang">
    <h2>Languages</h2>
    <form action="#" class="form-select-code">
        <div class="form-box-code">
            <h1>Python</h1>
            <span class="code python">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
        <div class="form-box-code">
            <h1>JavaScript</h1>
            <span class="code javascript">
                <ion-icon name="logo-javascript" style="color: #F7DF1E; background-color: #000;"></ion-icon>
            </span>
        </div>
        <div class="form-box-code">
            <h1>HTML</h1>
            <span class="code html">
                <ion-icon name="logo-html5" style="color: #FF6600;"></ion-icon>
            </span>
        </div>
        <div class="form-box-code">
            <h1>? ? ?</h1>
            <span class="code create1">
                <ion-icon name="build"></ion-icon>
            </span>
        </div>
        <div class="form-box-code">
            <h1>? ? ?</h1>
            <span class="code create2">
                <ion-icon name="build"></ion-icon>
            </span>
        </div>
    </form>
    <div class="terminal">
        <div class="terminal-header">
            <span class="terminal-btn"></span>
            <span class="terminal-btn"></span>
            <span class="terminal-btn"></span>
        </div>
        <pre>
            <code class="label-faq"><span class="prompt">info@website:</span>~$</code>
        </pre>
    </div>    
</div>
`;
const contentAboutPage = `
<div class="pages about" id="about">
    <h2>About</h2>
    <p>Мы предлагаем удобный и интерактивный опыт обучения, чтобы вы могли определиться с выбором языка программирования, близкого вашим интересам. Освойте основы Python, JavaScript, Java, C++ и многих других языков с помощью учебных материалов и интерактивных заданий. Присоединяйтесь к нашему сообществу страстных учеников программирования, чтобы открыть для себя бесконечные возможности в мире технологий. Регистрируйтесь сейчас и начните свой увлекательный путь в программировании!</p>
    <div class="code-logos">
        <span class="code-logo">
            <ion-icon name="logo-python"></ion-icon>
        </span>
        <span class="code-logo">
            <ion-icon name="logo-javascript"></ion-icon>
        </span>
        <span class="code-logo">
            <ion-icon name="logo-css3"></ion-icon>
        </span>
        <span class="code-logo">
            <ion-icon name="logo-html5"></ion-icon>
        </span>
    </div>
</div>
`;
const contentContactsPage = `
<div class="pages contacts" id="contacts">
    <h2>Contacts</h2>
    <div class="cont">
        <p>Если у вас есть срочные вопросы или предпочитаете связаться с нами напрямую, вы можете воспользоваться одним из указанных ниже контактов:</p>
        <p>Телефон: [ваш номер телефона]</p>
        <p>Электронная почта: [ваш адрес электронной почты]</p>
        <p>Skype: [ваш Skype ID]</p>
        <p>Telegram: [ваш Telegram ID]</p>
        <p>Мы ценим ваше мнение и стараемся делать наш сайт лучше. Ваша обратная связь поможет нам улучшить наш сервис и предложить вам еще более качественное обучение программированию. Мы благодарим вас за уделенное внимание и надеемся на долгосрочное сотрудничество.</p>
    </div>            
</div>
`;
const contentPythonPage = `
<div class="lang-topics" id="##">
    <div class="lang-topics-elements">
        <div class="left-elements">
            <h2>Курс: Изучение Python для начинающих</h2>
            <a href="./python/lesson1.html">
                <button class="btnStartLang">Начать</button>
            </a>
        </div>
        <span class="right-elements">
            <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
        </span>
    </div>
</div>
<div class="lang-head-elements">
    <h2>О курсе:</h2>
    <p>Добро пожаловать на наш увлекательный курс "Изучение Python для начинающих"! Этот курс разработан специально для тех, кто только начинает свой путь в программировании и хочет познакомиться с миром языка Python.</p>    
    <h2>Цель курса:</h2>
    <p>Целью нашего курса является предоставление вам качественного введения в Python и помощь в овладении основами программирования на этом языке. Мы стремимся создать простую и понятную образовательную программу, которая позволит вам без труда разобраться в ключевых концепциях Python и даст возможность написать свои первые программы.</p>
    <h2>Чему вы научитесь:</h2>
    <p><ion-icon name="checkmark-circle"></ion-icon> Переменные и типы данных: Изучите, как объявлять переменные и работать с различными типами данных.</p>
    <p><ion-icon name="checkmark-circle"></ion-icon> Условия и циклы: Познакомьтесь с условными операторами и циклами, чтобы сделать ваш код более гибким.</p>
    <p><ion-icon name="checkmark-circle"></ion-icon> Функции: Узнайте, как определять и использовать функции для организации кода.</p>
    <p><ion-icon name="checkmark-circle"></ion-icon> Работа с файлами: Изучите, как открывать, читать и записывать данные в файлы.</p>
    <p><ion-icon name="checkmark-circle"></ion-icon> Структуры данных: Познакомьтесь с различными структурами данных, такими как списки, кортежи и словари.</p>
    <h2>План обучения:</h2>
    <h3>Урок 1: Введение в Python</h3>
    <p>-Знакомство с Python: история, применение, особенности.</p>
    <p>-Установка Python и интерпретатора.</p>    
    <p>-Первая программа на Python: "Hello, World!"</p>    
    <h3>Урок 2: Переменные и типы данных</h3>
    <p>-Объявление и использование переменных.</p>
    <p>-Основные типы данных в Python: числа, строки, списки, кортежи, словари.</p>
    <p>-Примеры работы с различными типами данных.</p>
    <h3>Урок 3: Условия и циклы</h3>
    <p>-Условные операторы (if, else) и их применение.</p>
    <p>-Циклы: for и while.</p>
    <p>Примеры использования условий и циклов.</p>
    <h3>Урок 4: Функции</h3>
    <p>-Что такое функции и зачем их использовать.</p>
    <p>-Определение функций и передача параметров.</p>
    <p>-Возвращение значений из функций.</p>
    <p>-Примеры простых функций.</p>
    <h3>Урок 5: Работа с файлами</h3>
    <p>-Открытие, чтение и запись файлов в Python.</p>
    <p>-Обработка и анализ данных из файлов.</p>
    <p>-Примеры работы с файлами.</p>
    <h3>Урок 6: Структуры данных</h3>
    <p>-Списки и их особенности.</p>
    <p>-Кортежи и их использование.</p>
    <p>-Словари: ключи и значения.</p>
    <p>-Примеры работы со структурами данных.</p>
    <h3>Урок 7: Модули и стандартная библиотека Python</h3>
    <p>-Краткий обзор изученного материала.</p>
    <p>-Решение задач и практических упражнений на Python.</p>
    <p>-Создание простой программы, использующей разные концепции языка.</p>
    <h3>Итоговый проект и завершение курса</h3>
</div>
`;
// <span class="prompt">info@website:~$</span> 
const specificationPython = `Python - высокоуровневый язык программирования с чистым синтаксисом, обширной стандартной библиотекой и широким спектром применений: веб-разработка, научные вычисления, автоматизация задач, искусственный интеллект и многое другое.`;
const specificationJavascript = `JavaScript - высокоуровневый язык программирования, широко используемый для разработки интерактивных веб-страниц и приложений. Он поддерживает клиентскую и серверную разработку, обеспечивает динамические возможности и работает во всех современных веб-браузерах.`;
const specificationHTML = `HTML - это язык разметки, используемый для создания веб-страниц. Он определяет структуру содержимого страницы, такую как заголовки, параграфы, изображения и ссылки. HTML позволяет организовать информацию, которую видят пользователи в браузере.`;
const specificationCreateLang = `Coming soon . . .`;

// scrollPoint.addEventListener('wheel', (event) => {
//     // Получаем текущую позицию вертикального скроллинга
//     const scrollPosition = event.deltaY;
//     console.log(scrollPosition);
//     const labelElement = document.querySelector('.Home');
//     scrolling += scrollPosition;
//     if (scrolling > 200 && pageNumber === 0) {
//         scrolling = 0;
//         pageNumber += 1;
//         console.log('pageNumber');
//         labelElement.innerHTML = contentLanguagesPage;
//         reEventItem(); 
//     } else if (scrolling < -200 && pageNumber === 1){
//         scrolling = 0;    
//         pageNumber -= 1;
//         console.log('0');
//         labelElement.innerHTML = contentHomePage;
//     }
// });

// Button Language
function reEventItem() {
    const btnSelectPython = document.querySelector('.code.python');
    const btnSelectJavaScript = document.querySelector('.code.javascript');
    const btnSelectHTML = document.querySelector('.code.html');
    const btnSelectCreate1 = document.querySelector('.code.create1');
    const btnSelectCreate2 = document.querySelector('.code.create2');
    
    if(btnSelectPython) {
        btnSelectPython.addEventListener('mouseover', () => {
            const labelElement = document.querySelector('.label-faq');
            labelElement.innerHTML = specificationPython;
        });
        btnSelectPython.addEventListener('click', () => {
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPythonPage;
            reEventItem();
        });
    }

    if(btnSelectJavaScript) {
        btnSelectJavaScript.addEventListener('mouseover', () => {
            const labelElement = document.querySelector('.label-faq');
            labelElement.innerHTML = specificationJavascript;
        });
    }

    if(btnSelectHTML) {
        btnSelectHTML.addEventListener('mouseover', () => {
            const labelElement = document.querySelector('.label-faq');
            labelElement.innerHTML = specificationHTML;
        });
    }

    if(btnSelectCreate1) {
        btnSelectCreate1.addEventListener('mouseover', () => {
            const labelElement = document.querySelector('.label-faq');
            labelElement.innerHTML = specificationCreateLang;
        });
    }

    if(btnSelectCreate2) {
        btnSelectCreate2.addEventListener('mouseover', () => {
            const labelElement = document.querySelector('.label-faq');
            labelElement.innerHTML = specificationCreateLang;
        });
    }
    
            
};
reEventItem();

// Header
const btnHeaderHome = document.querySelector('.home-link');
const btnHeaderLanguages = document.querySelector('.languages-link');
const btnHeaderAbout = document.querySelector('.about-link');
const btnHeaderContact = document.querySelector('.contact-link');

// Кнопки
const btnRegister = document.querySelector('.btnRegister');
// Кнопки навигации
const btn1study = document.getElementById('1study');
const btn2study = document.getElementById('2study');
const btn3study = document.getElementById('3study');
const btn4study = document.getElementById('4study');
const btn5study = document.getElementById('5study');
const btn6study = document.getElementById('6study');
const btn7study = document.getElementById('7study');
const btn8study = document.getElementById('8study');

document.getElementById('check').onclick = () => {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if (login.length !== 0 || password.length !== 0) {
        if (login === 'test@test.tt' && password === '123') {
            alert("Welcome");
        } else {
            alert(`Хера лысого!`);
        }
    }
}


// Кнопка на переход к форме регистрации
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Кнопка на переход к форме Логин
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});



// HEADER BUTTON
btnHeaderHome.addEventListener('click', () => {
    const labelElement = document.querySelector('.Home');
    labelElement.innerHTML = contentHomePage;
    reEventItem();
});


btnHeaderLanguages.addEventListener('click', () => {
    const labelElement = document.querySelector('.Home');
    labelElement.innerHTML = contentLanguagesPage;
    reEventItem();
});

btnHeaderAbout.addEventListener('click', () => {
    const labelElement = document.querySelector('.Home');
    labelElement.innerHTML = contentAboutPage;
    reEventItem();
});

btnHeaderContact.addEventListener('click', () => {
    const labelElement = document.querySelector('.Home');
    labelElement.innerHTML = contentContactsPage;
    reEventItem();
});
        // END HEADER
        
        // Кнопка Логин в header
btnPopup.addEventListener('click', () => {
    if (wrapper.classList.contains('active-popup')) {
        wrapper.classList.remove('active-popup');
    } else {
        wrapper.classList.add('active-popup');
    }
});

// Кнопка закрытия окна Логин
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btn1study.addEventListener('click', () => {
    window.location.href = 'lesson1.html';
});
btn2study.addEventListener('click', () => {
    window.location.href = 'lesson2.html';
});
btn3study.addEventListener('click', () => {
    window.location.href = 'lesson3.html';
});
btn4study.addEventListener('click', () => {
    window.location.href = 'lesson4.html';
});
btn5study.addEventListener('click', () => {
    window.location.href = 'lesson5.html';
});
btn6study.addEventListener('click', () => {
    window.location.href = 'lesson6.html';
});
btn7study.addEventListener('click', () => {
    window.location.href = 'lesson7.html';
});
btn8study.addEventListener('click', () => {
    window.location.href = 'lesson8.html';
});