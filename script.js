import './cities.js'
import { allCities } from './cities.js';
// import { citiesMap } from './cities.js';

const apiKey = 'e410e2efa02a4fc69fb174528242105';


// http://api.weatherapi.com/v1/current.json?key=e410e2efa02a4fc69fb174528242105&q=London

// Масив для збереження усіх міст. Його більше не використовую, бо замінив його на citiesMap
// const allCities = [toronto, rome, kyiv, canberra, brasilia, warsaw, london];





// Додаємо обробник подій для кожної кнопки міста
allCities.forEach(city => {
    city.addEventListener('click', function() {
        const selectedCity = this.id;
        handleCitySelection(selectedCity);
    });
});

// Object.keys(citiesMap).forEach(cityId => {
//     const cityElement = document.getElementById(cityId);
//     cityElement.addEventListener('click', function() {
//         handleCitySelection(cityId);
//     });
// });


function handleCitySelection(selectedCity) {
    // const city = citiesMap[cityId];
    const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}`;

    // Викликаємо API для отримання погоди обраного міста
    fetch(query)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.location.name);
        console.log(data.location.country);
        console.log(`Temp ${data.current.temp_c} °С`);
        console.log(`Feels like ${data.current.feelslike_c} °С`);
        // Додайте ваш код обробки отриманих даних тут
    })
    .catch(error => {
        console.log(error.message)});
};