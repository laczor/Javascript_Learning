import * as ELEMENTS from 'elements.js';                //All of the selected elements
import {Http} from 'http.js';                           //Our XMLHttpRequest object wrapped in a promise
import {WeatherData, WEATHER_PROXY_HANDLER} from 'weather-data.js'; //Our main object, created handler with Reflect API

const APP_ID = '...';

// So, it is actually an event, which will be triggered on clicking the search button
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
// 0. the cityname will be trimmed + checked 
// 1. The elements will get their css properties
// 2. URL string is made
// 3. our XMLHttpRequest wrapped in a promise is executed.
// 4. when it is successfully done, we modify the WeatherData object, via proxy + handler + Reflect APIT
function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name');
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}
// will set everything to it's original position.
function updateWeather(weatherData) {
    console.log(weatherData);
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}