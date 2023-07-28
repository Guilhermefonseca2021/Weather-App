// 9a25f0f17b1b1b8b32fe2bc92c77e2e5
const apiKey = "9a25f0f17b1b1b8b32fe2bc92c77e2e5";
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png";

const cityInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature');
const descElement = document.querySelector('.discription');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');

// funcoes
const getWeatherData = async(city) => {
    const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang-pt-br'

    const res = await fetch (apiWeatherURL)
    const data = await res.json(apiWeatherURL)

    console.log(data)
}

const showWeatherData = (city) => {
    getWeatherData(city)
};

//  eventos
searchBtn.addEventListener('click', (evento) => {

    // como um botao vai tentar enviar formulario tipo submit n quero entao prevent default
    evento.preventDefault()

    const city = cityInput.value;

    showWeatherData(city)
});