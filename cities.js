const cities = document.querySelector('.cities');
const toronto = document.getElementById('toronto');
const rome = document.getElementById('rome');
const kyiv = document.getElementById('kyiv');
const canberra = document.getElementById('canberra');
const brasilia = document.getElementById('brasilia');
const warsaw = document.getElementById('warsaw');
const london = document.getElementById('london');


// Додавання міст динамічно через JS
const washington = createCityElement('Washington', 'washington', cities);
const mexico = createCityElement('Mexico City', 'mexico-city', cities);
const nuuk = createCityElement('Nuuk', 'nuuk', cities);
const madrid = createCityElement('Madrid', 'madrid', cities);
const berlin = createCityElement('Berlin', 'berlin', cities);
const tokyo = createCityElement('Tokyo', 'tokyo', cities);
const dublin = createCityElement('Dublin', 'dublin', cities);
const cairo = createCityElement('Cairo', 'cairo', cities);
const antananarivo = createCityElement('Antananarivo', 'antananarivo', cities);
const montevideo = createCityElement('Montevideo', 'montevideo', cities);

// Масив всіх міст
export const allCities = [
    toronto,
    rome,
    kyiv,
    canberra,
    brasilia,
    warsaw,
    london,
    washington,
    mexico,
    nuuk,
    madrid,
    berlin,
    tokyo,
    dublin,
    cairo,
    antananarivo,
    montevideo,
];

// Функція по створенню міст і додаванню їх в батьківський елемент.
function createCityElement(cityName, cityId, parentElement) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('city');
    newDiv.id = cityId;

    const newSpan = document.createElement('span');
    newSpan.classList.add('word');
    newSpan.textContent = cityName;

    const newButton = document.createElement('button');
    newButton.classList.add('btn');

    newDiv.appendChild(newSpan);
    newDiv.insertAdjacentHTML('beforeend', '<br>'); // Вставляємо <br> перед кнопкою
    newDiv.appendChild(newButton);

    // Додаємо новий елемент до батьківського елемента 
    parentElement.appendChild(newDiv);

    return newDiv;
};

// Створення input поле

function createInputArea() {
    return ` 
    <h2 class="title">Weather forecast</h2>
        <form action="form" id="form">
            <input type="text" id="inputCity" class="input" placeholder="Enter the name of the city">
            <button class="btn_input">Show weather</button>
        </form>`
};

function displayInputArea(element) {
    const container = document.querySelector('.container');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('input_container')
    parentDiv.innerHTML = element;
    container.appendChild(parentDiv);
};

displayInputArea(createInputArea());