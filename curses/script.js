const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const scrollPoint = document.querySelector('.Home');


// let pageNumber = 0;
// let scrolling = 0;

const contentPage1 = `
<div class="left-navigation-box">
<h3>Навигация</h3>

<div class="nav-text">
    <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
    </button>        
</div>
<div class="nav-text">
    <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
    </button>
</div>
<div class="nav-text">
    <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
    </button>
</div>
</div>

<div class="lang-topics" id="##">
<div class="lang-topics-elements">
    <div class="left-elements">
        <h2>Урок 1: введение в Python</h2>
    </div>
    <span class="right-elements">
        <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
    </span>
</div>
</div>

<div class="lang-head-elements">
<h2>Введение</h2>
<div class="paragraph">
    <p>Добро пожаловать в первый урок курса "Изучение Python для начинающих"! В этом уроке мы познакомимся с основами Python и напишем нашу первую программу.</p>
</div>
<h2>Что такое Python?</h2>
<div class="paragraph">
    <p>Python - это высокоуровневый язык программирования, разработанный с акцентом на простоту и читаемость кода. Он позволяет разрабатывать разнообразные программы, начиная от простых скриптов до сложных веб-приложений и научных вычислений.</p>
</div>
<h2>Первая программа "Hello, World!"</h2>
<div class="paragraph">
    <p>В мире программирования "Hello, World!" - это традиционная первая программа, которая выводит на экран фразу "Hello, World!". Давайте напишем ее в Python:</p>
</div>

<div class="terminal">
    <div class="terminal-header">
        <span class="terminal-btn"></span>
        <span class="terminal-btn"></span>
        <span class="terminal-btn"></span>
    </div>
    <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-green">"Hello, World!"</span>)</code>
</div>    
<h2>Как это работает?</h2>
<div class="paragraph">
    <li>Ключевое слово <span class="black-bold">'print'</span> используется для вывода информации на экран.
    </li>
    <li>Мы передаем строку <span class="black-bold">"Hello, World!"</span> в функцию <span class="black-bold">'print()'</span>. Строка - это последовательность символов, заключенных в кавычки.
    </li>
    <li>Когда мы запускаем программу, Python интерпретирует код и выводит на экран текст <span class="black-bold">"Hello, World!"</span>.
    </li>
</div>
<h2>Запуск программы</h2>
<div class="paragraph">
    <p>В мире программирования "Hello, World!" - это традиционная первая программа, которая выводит на экран фразу "Hello, World!". Давайте напишем ее в Python:</p>
    <div class="paragraph">
        <li>Откройте текстовый онлайн редактор (например: <a href="https://www.python.org/shell/" target="_blank">www.python.org</a>).
        </li>
        <li>Введите код программы <span class="black-bold">"Hello, World!"</span> и нажмите Enter.
        </li>
        <li>Вы увидите вывод <span class="black-bold">"Hello, World!"</span> в командной строке.
        </li>
    </div>
</div>
<div class="terminal">
    <div class="terminal-header">
        <span class="terminal-btn"></span>
        <span class="terminal-btn"></span>
        <span class="terminal-btn"></span>
    </div>
    <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-green">"Hello, World!"</span>)</code>
    <code class="label-faq">Hello, World!</code>
</div>
<div class="next-page">
    <a href="lesson2.html">
        <button class="btnNext-page">Далее</button>
    </a>
</div>
</div>
`;
const contentPage2 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>


    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 2: Переменные и типы данных в Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>В предыдущем уроке мы познакомились с первой программой на Python. Теперь давайте узнаем, как работать с переменными и типами данных в Python.</p>
            </div>
            <h2>Что такое переменные?</h2>
            <div class="paragraph">
                <p>Переменные - это контейнеры для хранения данных. Они позволяют нам сохранять значения и обращаться к ним по именам. В Python не нужно объявлять тип переменной, он определяется автоматически на основе присвоенного значения.</p>
            </div>
            <h2>Присваивание значений переменным</h2>
            <div class="paragraph">
                <p>Для присваивания значения переменной используется оператор <span class="black-bold">'='</span>:</p>
            </div>
            
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">x = <span class="color-rose">10</span></code>
                <code class="label-faq">name = <span class="color-green">"John"</span></code>
            </div>    
            <h2>Типы данных в Python</h2>
            <div class="paragraph">
                <p>Python поддерживает различные типы данных, вот некоторые из них:</p>
            </div>
            <div class="paragraph">
                <li>Числа: <span class="black-bold">'int'</span> (целые числа), <span class="black-bold">'float'</span> (числа с плавающей запятой).
                </li>
                <li>Строки: <span class="black-bold">'str'</span> (текстовые данные), заключенные в одинарные или двойные кавычки.
                </li>
                <li>Списки: <span class="black-bold">'list'</span> (упорядоченные изменяемые коллекции элементов).
                </li>
                <li>Кортежи: <span class="black-bold">'tuple'</span> (упорядоченные неизменяемые коллекции элементов).
                </li>
                <li>Словари: <span class="black-bold">'dict'</span> (коллекции ключ-значение).
                </li>
            </div>
            <h2>Примеры использования переменных и типов данных</h2>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-grey"># Числа</code>
                <code class="label-faq">age = <span class="color-rose">25</span></code>
                <code class="label-faq">height = <span class="color-rose">1.75</span></code>
                <code class="label-faq"><span class="color-grey"># Строки</code>
                <code class="label-faq">name = <span class="color-green">"Alice"</span></code>
                <code class="label-faq">message = <span class="color-green">'Привет, как дела?'</span></code>
                <code class="label-faq"><span class="color-grey"># Списки</code>
                <code class="label-faq">fruits = [<span class="color-green">'яблоко'</span>, <span class="color-green">'банан'</span>, <span class="color-green">'апельсин'</span>]</code>
                <code class="label-faq"><span class="color-grey"># Кортежи</code>
                <code class="label-faq">coordinates = (<span class="color-rose">10</span>, <span class="color-rose">20</span>)</code>
                <code class="label-faq"><span class="color-grey"># Словари</code>
                <code class="label-faq">person = {<span class="color-green">'имя'</span>: <span class="color-green">'Bob'</span>, <span class="color-green">'возраст'</span>: <span class="color-rose">30</span>, <span class="color-green">'город'</span>: <span class="color-green">'Нью-Йорк'</span>}</code>
            </div>
            <h2>Функция type()</h2>
            <div class="paragraph">
                <p>Чтобы узнать тип данных переменной, используйте функцию <span class="black-bold">'type()'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">age = <span class="color-rose">25</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">type</span>(age))  <span class="color-grey"># Выводит &#60;class 'int'&#62;</span></code>
                <code class="label-faq">name = <span class="color-green">"Alice"</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">type</span>(age))  <span class="color-grey"># Выводит &#60;class 'str'&#62;</span></code>
                <code class="label-faq">coordinates = (<span class="color-rose">10</span>, <span class="color-rose">20</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">type</span>(age))  <span class="color-grey"># Выводит &#60;class 'tuple'&#62;</span></code>
            </div>
            <h2>Преобразование типов</h2>
            <div class="paragraph">
                <p>Иногда вам может потребоваться преобразовать данные из одного типа в другой. Для этого используются функции, такие как <span class="black-bold">'int()'</span>, <span class="black-bold">'float()'</span>, <span class="black-bold">'str()'</span>, и другие:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">x = <span class="color-rose">5</span></code>
                <code class="label-faq">y = <span class="color-green">"10"</span></code>
                <code class="label-faq"><span class="color-yellow">sum</span> = x + <span class="color-yellow">int</span>(y)  <span class="color-grey"># Преобразуем строку "10" в целое число и складываем с x</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">sum</span>)  <span class="color-grey"># Выводит 15</span></code>
            </div>
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Создайте переменные для хранения вашего имени, возраста и любимого цвета.
                </li>
                <li>Выведите значения этих переменных на экран, объединяя их в предложении.
                </li>
            </div>
            <div class="paragraph">
                <p>Отлично! Вы только что ознакомились с работой переменных и типов данных в Python. В следующем уроке мы продолжим исследование других концепций языка. Продолжайте практиковаться и успешного обучения!</p>
            </div>
            <div class="next-page">
                <a href="lesson3.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage3 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 3: Условия и циклы в Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>В предыдущих уроках мы познакомились с переменными, типами данных и написали нашу первую программу. Теперь давайте углубимся в работу с условиями и циклами, которые делают Python еще более мощным и гибким языком программирования.</p>
            </div>
            <h2>Условные операторы: if, else</h2>
            <div class="paragraph">
                <p>Условные операторы позволяют выполнять различные блоки кода в зависимости от определенных условий. Один из наиболее часто используемых условных операторов в Python - это <span class="black-bold">'if'</span>, который проверяет истинность некоторого выражения, и выполняет блок кода, если условие истинно:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">x = <span class="color-rose">10</span></code>
                <code class="label-faq"><span class="color-blue">if</span> x > <span class="color-rose">5</span>:</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"x больше 5"</span>)</code>
            </div>    
            <div class="paragraph">
                <p>Если вы хотите выполнить альтернативный блок кода в случае, если условие не выполняется, используйте <span class="black-bold">'else'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">x = <span class="color-rose">3</span></code>
                <code class="label-faq"><span class="color-blue">if</span> x > <span class="color-rose">5</span>:</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"x больше 5"</span>)</code>
                <code class="label-faq"><span class="color-blue">else</span>:</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"x меньше или равно 5"</span>)</code>
            </div>    
            <h2>Циклы: for, while</h2>
            <div class="paragraph">
                <p>Циклы позволяют выполнять повторяющиеся действия в программе. В Python есть два основных типа циклов: <span class="black-bold">'for'</span> и <span class="black-bold">'while'</span>.</p>
            </div>
            <div class="paragraph">
                <p>Цикл <span class="black-bold">'for'</span> используется для перебора элементов в последовательности, такой как список или строка:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">'яблоко'</span>, <span class="color-green">'банан'</span>, <span class="color-green">'апельсин'</span>]</code>
                <code class="label-faq"><span class="color-blue">for</span> fruit <span class="color-blue">in</span> fruints:</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(fruit)</code>
            </div>    
            <div class="paragraph">
                <p>Цикл <span class="black-bold">'while'</span> выполняет блок кода, пока определенное условие истинно:</p>
            </div>
            <h2>Прерывание циклов: break, continue</h2>
            <div class="paragraph">
                <p>Внутри циклов вы можете использовать оператор <span class="black-bold">'break'</span>, чтобы прервать выполнение цикла, когда выполняется определенное условие:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">for</span> i <span class="color-blue">in </span> <span class="color-yellow">range</span>(<span class="color-rose">1</span>, <span class="color-rose">11</span>):</code>
                <code class="label-faq">    <span class="color-blue">if</span> i == <span class="color-rose">5</span>:</code>
                <code class="label-faq"><span class="color-blue">        break</span></code>
                <code class="label-faq"><span class="color-yellow">    print</span>(i)</code>
            </div>    
            <div class="paragraph">
                <p>Оператор <span class="black-bold">'continue'</span> используется для перехода к следующей итерации цикла, игнорируя оставшуюся часть текущей итерации:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">for</span> i <span class="color-blue">in </span> <span class="color-yellow">range</span>(<span class="color-rose">1</span>, <span class="color-rose">6</span>):</code>
                <code class="label-faq">    <span class="color-blue">if</span> i == <span class="color-rose">3</span>:</code>
                <code class="label-faq"><span class="color-blue">        continue</span></code>
                <code class="label-faq"><span class="color-yellow">    print</span>(i)</code>
            </div>    
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Создайте список чисел от 1 до 10.
                </li>
                <li>Используя цикл <span class="black-bold">'for'</span>, выведите каждое число, умноженное на 2.
                </li>
                <li>Используя цикл <span class="black-bold">'while'</span>, найдите сумму всех чисел от 1 до 10.
                </li>
            </div>
            <div class="paragraph">
                <p>Отлично! Вы только что изучили условия и циклы в Python. Они являются важными инструментами, которые позволяют управлять потоком выполнения программы и обрабатывать повторяющиеся задачи. Продолжайте практиковаться, и в следующем уроке мы узнаем о функциях в Python. Удачи!</p>
            </div>
            <div class="next-page">
                <a href="lesson4.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage4 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 4: Функции в Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>В предыдущих уроках мы изучили условия и циклы, которые позволяют нам контролировать поток выполнения программы и повторять задачи. Теперь давайте узнаем о функциях, которые помогают структурировать код и повторно использовать его.</p>
            </div>
            <h2>Что такое функции?</h2>
            <div class="paragraph">
                <p>Функции - это блоки кода, которые могут быть вызваны для выполнения определенных действий. Они позволяют разбить программу на более мелкие, логические части, что делает код более читаемым и поддерживаемым.</p>
            </div>
            <h2>Создание функций</h2>
            <div class="paragraph">
                <p>В Python функции создаются с помощью ключевого слова <span class="black-bold">'def'</span>, за которым следует имя функции и круглые скобки с параметрами (если они есть), а затем двоеточие. Тело функции должно быть с отступом:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">def</span><span class="color-red"> greet</span>():</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"Привет, мир!"</span>)</code>
            </div> 
            <h2>Вызов функций</h2>
            <div class="paragraph">
                <p>Для вызова функции просто напишите ее имя с круглыми скобками:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">greet()<span class="color-grey">  # Выведет "Привет, мир!"</span></code>
            </div>    
            <h2>Параметры функций</h2>
            <div class="paragraph">
                <p>Функции могут принимать параметры - значения, которые передаются в функцию для обработки:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">def</span><span class="color-red"> greet</span>(name):</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"Привет, "</span> + name + <span class="color-green">"!"</span>)</code>
            </div> 
            <div class="paragraph">
                <p>При вызове функции с параметром, передайте значение в скобках:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">greet(<span class="color-green">"Алиса"</span>)<span class="color-grey">  # Выведет "Привет, Алиса!"</span></code>
            </div> 
            <h2>Возвращение значений</h2>
            <div class="paragraph">
                <p>Функции также могут возвращать значения с помощью ключевого слова <span class="black-bold">'return'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">def</span><span class="color-red"> greet</span>(x):</code>
                <code class="label-faq"><span class="color-blue">    return </span>x * x</code>
            </div> 
            <div class="paragraph">
                <p>При вызове функции, вы можете сохранить возвращенное значение в переменную:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">result = square(<span class="color-rose">5</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(result)<span class="color-grey">    # Выведет 25</span></code>
            </div> 
            <h2>Значения по умолчанию</h2>
            <div class="paragraph">
                <p>Вы можете установить значения по умолчанию для параметров функции, чтобы сделать их необязательными:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">def</span><span class="color-red"> greet</span>(name = <span class="color-green">"Гость"</span>):</code>
                <code class="label-faq"><span class="color-yellow">    print</span>(<span class="color-green">"Привет, "</span> + name + <span class="color-green">"!"</span>)</code>
            </div> 
            <div class="paragraph">
                <p>Если при вызове функции не указан параметр, будет использовано значение по умолчанию:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">greet()<span class="color-grey">    # Выведет "Привет, Гость!"</span></code>
                <code class="label-faq">greet(<span class="color-green">"Алиса"</span>)<span class="color-grey">    # Выведет "Привет, Алиса!"</span></code>
            </div>    
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Создайте функцию <span class="black-bold">'calculate_sum(a, b)'</span>, которая будет принимать два числа и возвращать их сумму.
                </li>
                <li>Создайте функцию <span class="black-bold">'is_even(num)'</span>, которая будет принимать число и возвращать <span class="black-bold">'True'</span>, если оно четное, и <span class="black-bold">'False'</span>, если нечетное.
                </li>
                <li>Вызовите эти функции с разными значениями и выведите результаты.
                </li>
            </div>
            <div class="paragraph">
                <p>Прекрасно! Вы только что изучили функции в Python. Они позволяют разбивать программу на более мелкие блоки кода, что упрощает его чтение и позволяет повторно использовать функции для разных задач. Продолжайте практиковаться, и в следующем уроке мы узнаем о работе с файлами в Python. Удачи!</p>
            </div>
            <div class="next-page">
                <a href="lesson5.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage5 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 5: Работа с файлами в Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>Работа с файлами является важной частью программирования. В Python есть удобные средства для чтения данных из файлов и записи данных в файлы. В этом уроке мы рассмотрим основы работы с файлами.</p>
            </div>
            <h2>Открытие файла</h2>
            <div class="paragraph">
                <p>Для работы с файлами в Python используется функция <span class="black-bold">'open()'</span>. Она принимает два аргумента: имя файла и режим доступа (чтение, запись и т.д.).</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-grey"># Открытие файла для чтения</span></code>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"example.txt"</span>, <span class="color-green">"r"</span>)</code>
                <code class="label-faq"> </code>
                <code class="label-faq"><span class="color-grey"># Открытие файла для записи (если файла не существует, он будет создан)</span></code>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"output.txt"</span>, <span class="color-green">"w"</span>)</code>
            </div> 
            <h2>Закрытие файла</h2>
            <div class="paragraph">
                <p>После завершения работы с файлом необходимо закрыть его с помощью метода <span class="black-bold">'close()'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"example.txt"</span>, <span class="color-green">"r"</span>)</code>
                <code class="label-faq"><span class="color-grey"># Выполнение операций с файлом</span></code>
                <code class="label-faq">file.close()</code>
            </div> 
            <h2>Чтение из файла</h2>
            <div class="paragraph">
                <p>Для чтения данных из файла используйте метод <span class="black-bold">'read()'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"example.txt"</span>, <span class="color-green">"r"</span>)</code>
                <code class="label-faq">content = file.read()</code>
                <code class="label-faq"><span class="color-yellow">print</span>(content)</code>
                <code class="label-faq">file.close()</code>
            </div> 
            <div class="paragraph">
                <p>Метод <span class="black-bold">'read()'</span> возвращает всё содержимое файла в виде строки.</p>
            </div>
            <h2>Запись в файл</h2>
            <div class="paragraph">
                <p>Для записи данных в файл используйте метод <span class="black-bold">'write()'</span>:</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"output.txt"</span>, <span class="color-green">"w"</span>)</code>
                <code class="label-faq">file.write(<span class="color-green">"Это текст, который будет записан в файл."</span>)</code>
                <code class="label-faq">file.close()</code>
            </div> 
            <div class="paragraph">
                <p>Метод <span class="black-bold">'write()'</span> записывает переданную строку в файл. Если файл с таким именем уже существует, он будет перезаписан.</p>
            </div>
            <h2>Добавление в файл</h2>
            <div class="paragraph">
                <p>Если вы хотите добавить данные в конец существующего файла, используйте режим доступа <span class="black-bold">"a"</span> (от <span class="black-bold">"append"</span>):</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">file = <span class="color-yellow">open</span>(<span class="color-green">"output.txt"</span>, <span class="color-green">"a"</span>)</code>
                <code class="label-faq">file.write(<span class="color-green">"Это текст, который будет добавлен в конец файла."</span>)</code>
                <code class="label-faq">file.close()</code>
            </div> 
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Создайте файл <span class="black-bold">'data.txt'</span> и запишите в него несколько строк текста.
                </li>
                <li>Откройте файл и прочитайте содержимое. Выведите его на экран.
                </li>
                <li>Добавьте еще несколько строк в файл <span class="black-bold">'data.txt'</span>.
                </li>
                <li>Повторно прочитайте файл и выведите его содержимое на экран.
                </li>
            </div>
            <div class="paragraph">
                <p>Отлично! Теперь вы знаете, как работать с файлами в Python. Работа с файлами - важный аспект программирования, который позволяет сохранять и обрабатывать данные внутри программы. Продолжайте практиковаться, и в следующем уроке мы узнаем о работе со списками и словарями в Python. Удачи!</p>
            </div>
            <div class="next-page">
                <a href="lesson6.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage6 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 6: Списки и словари в Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>В предыдущих уроках мы изучили основные концепции Python, включая переменные, условия, циклы, функции и работу с файлами. Теперь давайте познакомимся с двумя мощными структурами данных в Python - списками и словарями.</p>
            </div>
            <h2>Списки</h2>
            <div class="paragraph">
                <p>Список - это упорядоченная коллекция элементов, которые могут быть различных типов данных. В Python списки создаются с помощью квадратных скобок <span class="black-bold">'[ ]'</span> и элементы разделяются запятыми.</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">"яблоко"</span>, <span class="color-green">"банан"</span>, <span class="color-green">"апельсин"</span>, <span class="color-green">"киви"</span>]</code>
                <code class="label-faq">fruits = [<span class="color-rose">1</span>, <span class="color-rose">2</span>, <span class="color-rose">3</span>, <span class="color-rose">4</span>, <span class="color-rose">5</span>]</code>
                <code class="label-faq">mixed_list = [<span class="color-green">"apple"</span>, <span class="color-rose">10</span>, <span class="color-blue">True</span>]</code>
            </div>
            <h2>Работа со списками</h2>
            <div class="paragraph">
                <li>Доступ к элементам: Элементы списка нумеруются с нуля. Чтобы получить доступ к элементу, используйте его индекс в квадратных скобках.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">"яблоко"</span>, <span class="color-green">"банан"</span>, <span class="color-green">"апельсин"</span>]</code>
                <code class="label-faq"><span class="color-yellow">print</span>(fruits[<span class="color-rose">0</span>])    <span class="color-grey"># Выведет "яблоко"</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(fruits[<span class="color-rose">1</span>])    <span class="color-grey"># Выведет "банан"</span></code>
            </div>
            <div class="paragraph">
                <li>Изменение элементов: Вы можете изменить элемент списка, присвоив ему новое значение.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">"яблоко"</span>, <span class="color-green">"банан"</span>, <span class="color-green">"апельсин"</span>]</code>
                <code class="label-faq">fruits[<span class="color-rose">2</span>] = <span class="color-green">"киви"</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(fruits)    <span class="color-grey"># Выведет ["яблоко", "банан", "киви"]</span></code>
            </div>
            <div class="paragraph">
                <li>Длина списка: Чтобы узнать количество элементов в списке, используйте функцию <span class="black-bold">'len()'</span>.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">"яблоко"</span>, <span class="color-green">"банан"</span>, <span class="color-green">"апельсин"</span>]</code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">len</span>(fruits))    <span class="color-grey"># Выведет 3</span></code>
            </div>
            <div class="paragraph">
                <li>Добавление элементов: Добавить элемент в конец списка можно с помощью метода <span class="black-bold">'append()'</span>.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">fruits = [<span class="color-green">"яблоко"</span>, <span class="color-green">"банан"</span>]</code>
                <code class="label-faq">fruits.append(<span class="color-green">"апельсин"</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(fruits)    <span class="color-grey"># Выведет ["яблоко", "банан", "апельсин"]</span></code>
            </div>
            <h2>Словари</h2>
            <div class="paragraph">
                <p>Словарь - это коллекция пар "ключ-значение". В Python словари создаются с помощью фигурных скобок <span class="black-bold">'{ }'</span>, и каждая пара "ключ: значение" разделяется запятой.</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">person = {<span class="color-green">"имя"</span>: <span class="color-green">"Алиса"</span>, <span class="color-green">"возраст"</span>: <span class="color-rose">25</span>, <span class="color-green">"город"</span>: <span class="color-green">"Москва"</span>}</code>
            </div>
            <h2>Работа со словарями</h2>
            <div class="paragraph">
                <li>Доступ к значениям: Чтобы получить значение по ключу, используйте квадратные скобки.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">person = {<span class="color-green">"имя"</span>: <span class="color-green">"Алиса"</span>, <span class="color-green">"возраст"</span>: <span class="color-rose">25</span>, <span class="color-green">"город"</span>: <span class="color-green">"Москва"</span>}</code>
                <code class="label-faq"><span class="color-yellow">print</span>(person[<span class="color-green">"имя"</span>])    <span class="color-grey"># Выведет "Алиса"</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(person[<span class="color-green">"возраст"</span>])    <span class="color-grey"># Выведет 25</span></code>
            </div>
            <div class="paragraph">
                <li>Изменение значений: Вы можете изменить значение, присвоив новое значение ключу.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">person = {<span class="color-green">"имя"</span>: <span class="color-green">"Алиса"</span>, <span class="color-green">"возраст"</span>: <span class="color-rose">25</span>, <span class="color-green">"город"</span>: <span class="color-green">"Москва"</span>}</code>
                <code class="label-faq">person[<span class="color-green">"возраст"</span>] = <span class="color-rose">26</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(person)    <span class="color-grey"># Выведет {"имя": "Алиса", "возраст": 26, "город": "Москва"}</span></code>
            </div>
            <div class="paragraph">
                <li>Длина словаря: Чтобы узнать количество элементов в словаре, используйте функцию <span class="black-bold">'len()'</span>.
                </li>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">person = {<span class="color-green">"имя"</span>: <span class="color-green">"Алиса"</span>, <span class="color-green">"возраст"</span>: <span class="color-rose">25</span>, <span class="color-green">"город"</span>: <span class="color-green">"Москва"</span>}</code>
                <code class="label-faq">person[<span class="color-green">"возраст"</span>] = <span class="color-rose">26</span></code>
                <code class="label-faq"><span class="color-yellow">print</span>(<span class="color-yellow">len</span>(person))    <span class="color-grey"># Выведет 3</span></code>
            </div>
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Создайте список <span class="black-bold">'numbers'</span> с числами от 1 до 5.
                </li>
                <li>Измените второй элемент списка на 10.
                </li>
                <li>Добавьте число 6 в конец списка.
                </li>
                <li>Создайте словарь <span class="black-bold">'student'</span> с ключами "имя", "возраст" и "город". Заполните значениями, соответствующими вашим данным.
                </li>
            </div>
            <div class="paragraph">
                <p>Отлично! Теперь вы знаете о работе со списками и словарями в Python. Эти структуры данных предоставляют множество возможностей для хранения и обработки информации. Продолжайте практиковаться, и в следующем уроке мы узнаем о модулях и функциях стандартной библиотеки Python. Удачи!</p>
            </div>
            <div class="next-page">
                <a href="lesson7.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage7 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Урок 7: Модули и стандартная библиотека Python</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>В предыдущих уроках мы изучили основы языка Python, включая переменные, условия, циклы, функции, работу с файлами, списками и словарями. Теперь давайте познакомимся с модулями и стандартной библиотекой Python, которые предоставляют множество полезных функций и инструментов для различных задач.</p>
            </div>
            <h2>Что такое модули?</h2>
            <div class="paragraph">
                <p>Модули в Python - это файлы, содержащие определения и инструкции Python. Они позволяют организовывать код и повторно использовать его в различных программах. Модули позволяют разделять программы на логические блоки, что делает код более структурированным и удобочитаемым.</p>
            </div>
            <h2>Импорт модулей</h2>
            <div class="paragraph">
                <p>Для использования функций и классов из модулей, необходимо сначала выполнить их импорт. В Python импорт модуля выполняется с помощью ключевого слова <span class="black-bold">'import'</span>.</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">import</span> math</code>
            </div>
            <h2>Использование функций из модулей</h2>
            <div class="paragraph">
                <p>После импорта модуля, вы можете использовать его функции, обращаясь к ним через имя модуля и точку.</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">import</span> math</code>
                <code class="label-faq"> </code>
                <code class="label-faq">radius = <span class="color-rose">5</span></code>
                <code class="label-faq">area = math.pi * math.<span class="color-yellow">pow</span>(radius, <span class="color-rose">2</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(area)    <span class="color-grey"># Выведет площадь круга с радиусом 5</span></code>
            </div>
            <h2>Псевдонимы для модулей</h2>
            <div class="paragraph">
                <p>Чтобы упростить обращение к модулю, вы можете создать псевдоним с помощью ключевого слова <span class="black-bold">'as'</span>.</p>
            </div>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">import</span> math <span class="color-blue">as</span> m</code>
                <code class="label-faq"> </code>
                <code class="label-faq">radius = <span class="color-rose">5</span></code>
                <code class="label-faq">area = m.pi * m.<span class="color-yellow">pow</span>(radius, <span class="color-rose">2</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(area)    <span class="color-grey"># Выведет площадь круга с радиусом 5, используя псевдоним m для модуля math</span></code>
            </div>
            <h2>Стандартная библиотека Python</h2>
            <div class="paragraph">
                <p>Python поставляется с обширной стандартной библиотекой, которая включает разнообразные модули для работы с файлами, сетями, датами, математическими операциями и многим другим. Нет необходимости устанавливать дополнительные модули - стандартная библиотека уже включена в Python.</p>
            </div>
            <h2>Пример использования модуля из стандартной библиотеки</h2>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq"><span class="color-blue">import</span> random</code>
                <code class="label-faq"> </code>
                <code class="label-faq"><span class="color-grey"># Генерация случайного числа от 1 до 10</span></code>
                <code class="label-faq">random_number = random.randint(<span class="color-rose">1</span>, <span class="color-rose">10</span>)</code>
                <code class="label-faq"><span class="color-yellow">print</span>(random_number)</code>
            </div>
            <h2>Задание для практики</h2>
            <div class="paragraph">
                <li>Импортируйте модуль <span class="black-bold">'datetime'</span> и используйте его для вывода текущей даты и времени.
                </li>
                <li>Импортируйте модуль <span class="black-bold">'random'</span> для генерации случайного числа от 1 до 100.
                </li>
            </div>
            <div class="paragraph">
                <p>Отлично! Теперь вы знаете о модулях и стандартной библиотеке Python. Это мощные инструменты, которые расширяют функциональность Python и помогают решать различные задачи. Продолжайте практиковаться, и в следующем уроке мы узнаем о работе с исключениями (ошибками) в Python. Удачи!</p>
            </div>
            <div class="next-page">
                <a href="lesson8.html">
                    <button class="btnNext-page">Далее</button>
                </a>
            </div>
        </div>
`;
const contentPage8 = `
<div class="left-navigation-box">
    <h3>Навигация</h3>

    <div class="nav-text">
        <button class="studys-link" id="1study"><ion-icon name="document-text"></ion-icon>&nbsp;1. Введение в Python
        </button>        
    </div>
    <div class="nav-text">
        <button class="studys-link" id="2study"><ion-icon name="document-text"></ion-icon>&nbsp;2. Переменные и типы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="3study"><ion-icon name="document-text"></ion-icon>&nbsp;3. Условия и циклы
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="4study"><ion-icon name="document-text"></ion-icon>&nbsp;4. Функции
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="5study"><ion-icon name="document-text"></ion-icon>&nbsp;5. Работа с файлами
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="6study"><ion-icon name="document-text"></ion-icon>&nbsp;6. Структуры данных
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="7study"><ion-icon name="document-text"></ion-icon>&nbsp;7. Закрепление и практика
        </button>
    </div>
    <div class="nav-text">
        <button class="studys-link" id="8study"><ion-icon name="document-text"></ion-icon>&nbsp;8. Подведение итогов
        </button>
    </div>
</div>

    <div class="lang-topics" id="##">
        <div class="lang-topics-elements">
            <div class="left-elements">
                <h2>Итоговый проект и завершение курса</h2>
            </div>
            <span class="right-elements">
                <ion-icon name="logo-python" style="color: #2b5b84;"></ion-icon>
            </span>
        </div>
    </div>

        <div class="lang-head-elements">
            <div class="paragraph">
                <p>Поздравляю с завершением курса по Python! На этом последнем дне, предлагаю вам создать итоговый проект, который объединит все изученные концепции языка и позволит вам применить полученные знания на практике.</p>
            </div>
            <h2>Итоговый проект: Создание текстового анализатора</h2>
            <div class="paragraph">
                <p>Ваша задача - создать простой текстовый анализатор, который будет анализировать текст, подсчитывать количество слов, предложений и символов в тексте, а также определять наиболее часто встречающееся слово.</p>
            </div>
            <div class="paragraph">
                <p>Пример функциональности текстового анализатора:</p>
            </div>
            <div class="paragraph">
                <li>Пользователь вводит текст.
                </li>
                <li>Программа выводит наиболее часто встречающееся слово и сколько раз оно встречается.
                </li>
            </div>
            <h2>Пример ввода:</h2>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">Введите текст для анализа: Привет! Это пример текста. Пример текста с приветствием.</code>
            </div>
            <h2>Пример вывода:</h2>
            <div class="terminal">
                <div class="terminal-header">
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                    <span class="terminal-btn"></span>
                </div>
                <code class="label-faq">Количество слов: 9</code>
                <code class="label-faq">Количество предложений: 3</code>
                <code class="label-faq">Количество символов: 67</code>
                <code class="label-faq">Наиболее часто встречающееся слово: пример (2 раза)</code>
            </div>
            <div class="paragraph">
                <p>В этом проекте вы можете использовать условия, циклы, списки, словари, функции и работу с текстом. Постарайтесь разбить проект на отдельные функции, чтобы код был более читаемым и структурированным.</p>
            </div>
            <h2>Завершение курса:</h2>
            <div class="paragraph">
                <p>Поздравляю вас еще раз с успешным завершением курса! Вы изучили основы Python и освоили множество важных концепций программирования. Надеюсь, этот курс помог вам приобрести навыки, которые вы сможете использовать в своих будущих проектах или даже карьере программиста.</p>
            </div>
            <div class="paragraph">
                <p>Если у вас возникнут дополнительные вопросы или вам потребуется дополнительная помощь, не стесняйтесь обращаться. Python - удивительный язык программирования, и есть много вариантов его применения. Продолжайте практиковаться, искать интересные проекты и углублять свои знания.</p>
            </div>
            <div class="paragraph">
                <p>Удачи в вашем дальнейшем путешествии в мире программирования!</p>
            </div>
            <div class="next-page">
                <a href="../../index.html">
                    <button class="btnNext-page">Home</button>
                </a>
            </div>
        </div>
`;


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


// Button Language
function reEventItem() {
    const btnSelectPython = document.querySelector('.code.python');
    const btnSelectJavaScript = document.querySelector('.code.javascript');
    const btnSelectHTML = document.querySelector('.code.html');
    const btnSelectCreate1 = document.querySelector('.code.create1');
    const btnSelectCreate2 = document.querySelector('.code.create2');

    const btn1study = document.getElementById('1study');
    const btn2study = document.getElementById('2study');
    const btn3study = document.getElementById('3study');
    const btn4study = document.getElementById('4study');
    const btn5study = document.getElementById('5study');
    const btn6study = document.getElementById('6study');
    const btn7study = document.getElementById('7study');
    const btn8study = document.getElementById('8study');
    
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
    
    if(btn1study) {
        btn1study.addEventListener('click', () => {
            // window.location.href = 'lesson1.html';
        
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage1;
            reEventItem();

            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });

        });

    }
    if(btn2study) {
        btn2study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage2;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn3study) {
        btn3study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage3;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn4study) {
        btn4study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage4;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn5study) {
        btn5study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage5;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn6study) {
        btn6study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage6;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn7study) {
        btn7study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage7;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    if(btn8study) {
        btn8study.addEventListener('click', () => {
            // window.location.href = 'lesson2.html';
            
            const labelElement = document.querySelector('.Home');
            labelElement.innerHTML = contentPage8;
            reEventItem();
            
            // Прокрутка страницы к началу
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
        if (login === 'test@test.tt' && password === 'test') {
            alert("Welcome");
        } else {
            alert(`введи test@test.tt - test`);
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


// Кнопки навигации по урокам
// btn1study.addEventListener('click', () => {
//     // window.location.href = 'lesson1.html';

//     const labelElement = document.querySelector('.Home');
//     labelElement.innerHTML = contentPage1;
//     reEventItem();
// });
// btn2study.addEventListener('click', () => {
//     // window.location.href = 'lesson2.html';
    
//     const labelElement = document.querySelector('.Home');
//     labelElement.innerHTML = contentPage2;
//     reEventItem();

// });
// btn3study.addEventListener('click', () => {
//     window.location.href = 'lesson3.html';
// });
// btn4study.addEventListener('click', () => {
//     window.location.href = 'lesson4.html';
// });
// btn5study.addEventListener('click', () => {
//     window.location.href = 'lesson5.html';
// });
// btn6study.addEventListener('click', () => {
//     window.location.href = 'lesson6.html';
// });
// btn7study.addEventListener('click', () => {
//     window.location.href = 'lesson7.html';
// });
// btn8study.addEventListener('click', () => {
//     window.location.href = 'lesson8.html';
// });