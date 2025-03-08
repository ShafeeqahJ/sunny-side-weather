let today = document.querySelector("#change-date");

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

today.innerHTML = `${day} ${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let enterInput = document.querySelector("#enter-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${enterInput.value}`;

  let apiKey = "099b7d73673fc37ab2ot4853347d8cf9";
  let =
    apiUrl = `https://api.shecodes.io/weather/v1/current?query=${enterInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentUnit);
}

let searchCityForm = document.querySelector("#city-form");
searchCityForm.addEventListener("submit", searchCity);

function showCurrentUnit(response) {
  let temperature = Math.round(response.data.temperature.current);
  let units = document.querySelector("#unit");
  units.innerHTML = temperature;
}
