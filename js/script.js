// 9a25f0f17b1b1b8b32fe2bc92c77e2e5
const apiKey = "9a25f0f17b1b1b8b32fe2bc92c77e2e5";
const apiCountryURL = "https://countryflagsapi.com/png";

const cityInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search');

const weatherContainer = document.querySelector('#weather-data')
const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature');
const descElement = document.querySelector('.discription');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

// funcoes
const getWeatherData = async(city) => {
    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey +'&lang-pt-br')
    const data = await response.json()

    // preciso retornar para o showdata usar o DOM
    return data
}

const showWeatherData = async (city) => {

    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp) + ' °C'
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        'src', 
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
    // countryElement.setAttribute('src', apiCountryURL + data.sys.country);
    humidityElement.innerText = data.main.humidity + '%';
    windElement.innerText = data.wind.speed + 'km/h';
    weatherContainer.classList.remove('hide')
};

//  eventos
searchBtn.addEventListener('click', (evento) => {

    // como um botao vai tentar enviar formulario tipo submit n quero entao prevent default
    evento.preventDefault()

    const city = cityInput.value;

    showWeatherData(city)
});

cityInput.addEventListener('keyup', (e) => {

    if(e.code === "Enter") {
        // valor do input
        const city = e.target.value

        showWeatherData(city)
    }
})