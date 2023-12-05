const API_KEY = `f8d0459764a8d53ac96ae14ca3993acb`;
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');


const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);

}

const showWeather = async (data) => {
    if (data.cod == '404') {
        weather.innerHTML = `<h2>City not found</h2>`
    }
    else {

        weather.innerHTML = `<div>

    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
            </div>`
        document.querySelector('#search').value = '';
    }
}


form.addEventListener('submit', function (event) {
    getWeather(search.value);
    event.preventDefault();
})



