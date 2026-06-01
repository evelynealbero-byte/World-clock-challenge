let selectedCityTimeZone = null;

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss[ <small>]A[</small>]",
    );
  }
  let mumbaiElement = document.querySelector("#mumbai");
  if (mumbaiElement) {
    let mumbaiDateElement = mumbaiElement.querySelector(".date");
    let mumbaiTimeElement = mumbaiElement.querySelector(".time");
    let mumbaiTime = moment().tz("Asia/Kolkata");

    mumbaiDateElement.innerHTML = mumbaiTime.format("MMMM Do YYYY");
    mumbaiTimeElement.innerHTML = mumbaiTime.format(
      "h:mm:ss[ <small>]A[</small>]",
    );
  }
  let AlicanteElement = document.querySelector("#alicante");
  if (AlicanteElement) {
    let AlicanteDateElement = AlicanteElement.querySelector(".date");
    let AlicanteTimeElement = AlicanteElement.querySelector(".time");
    let AlicanteTime = moment().tz("Europe/Madrid");

    AlicanteDateElement.innerHTML = AlicanteTime.format("MMMM Do YYYY");
    AlicanteTimeElement.innerHTML = AlicanteTime.format(
      "h:mm:ss[ <small>]A[</small>]",
    );
  }
}

function updateSelectedCity() {
  if (!selectedCityTimeZone) {
    return;
  }

  let cityTimeZone = selectedCityTimeZone;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/").pop().replace(/_/g, " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
        <div>
        <h2>${cityName} 🌍</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html" class="home-link">All cities</a>`;
}

function updateCity(event) {
  selectedCityTimeZone = event.target.value;
  updateSelectedCity();
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateSelectedCity, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
