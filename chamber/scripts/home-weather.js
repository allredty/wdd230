const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.38&lon=-100.90&appid=f955bc75e0dcbbeec91baf052684562d&units=imperial';
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=29.38&lon=-100.90&appid=f955bc75e0dcbbeec91baf052684562d&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  weatherIcon.setAttribute("loading", "lazy");
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  forecastContainer.innerHTML = '';

  let daysDisplayed = 0;

  for (let i = 0; i < data.list.length; i++) {
    const forecast = data.list[i];
    const forecastTime = new Date(forecast.dt * 1000);

    if (i === 0 || forecastTime.getDate() !== new Date(data.list[i - 1].dt * 1000).getDate()) {
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');

      const forecastTemp = document.createElement('span');
      forecastTemp.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F-`;

      const forecastDesc = document.createElement('span');
      forecastDesc.textContent = forecast.weather[0].description;

      const forecastIcon = document.createElement('img');
      forecastIcon.setAttribute('src', `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);
      forecastIcon.setAttribute('alt', forecast.weather[0].description);

      forecastItem.appendChild(forecastTemp);
      forecastItem.appendChild(forecastDesc);
      forecastItem.appendChild(forecastIcon);

      forecastContainer.appendChild(forecastItem);

      daysDisplayed++;

      if (daysDisplayed === 3) {
        break;
      }
    }
  }
}

apiFetch();
fetchForecast();
